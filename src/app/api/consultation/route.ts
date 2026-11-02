import { NextResponse } from "next/server";
import {
  DEFAULT_GOOGLE_CALENDAR_URL,
  deriveConsultationRoute,
  type ConsultationFormValues,
  validateConsultationFormValues,
} from "@/lib/consultation";

export const runtime = "nodejs";

function getStringValue(formData: FormData, key: keyof ConsultationFormValues) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function getAttachment(formData: FormData) {
  const value = formData.get("attachment");
  if (value instanceof File && value.size > 0) {
    return value;
  }
  return null;
}

function getCalendarUrl(route: ReturnType<typeof deriveConsultationRoute>) {
  const generalUrl =
    process.env.CONSULTATION_CALENDAR_URL_GENERAL ??
    DEFAULT_GOOGLE_CALENDAR_URL;

  switch (route) {
    case "ai":
      return process.env.CONSULTATION_CALENDAR_URL_AI || generalUrl;
    case "product":
      return process.env.CONSULTATION_CALENDAR_URL_PRODUCT || generalUrl;
    case "discovery":
      return process.env.CONSULTATION_CALENDAR_URL_DISCOVERY || generalUrl;
    default:
      return generalUrl;
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const attachment = getAttachment(formData);

    const values: ConsultationFormValues = {
      firstName: getStringValue(formData, "firstName"),
      lastName: getStringValue(formData, "lastName"),
      companyName: getStringValue(formData, "companyName"),
      role: getStringValue(formData, "role"),
      businessEmail: getStringValue(formData, "businessEmail"),
      phoneNumber: getStringValue(formData, "phoneNumber"),
      solutionType: getStringValue(formData, "solutionType"),
      headcount: getStringValue(formData, "headcount"),
      annualRevenue: getStringValue(formData, "annualRevenue"),
      projectStage: getStringValue(formData, "projectStage"),
      budget: getStringValue(formData, "budget"),
      timeline: getStringValue(formData, "timeline"),
      problemSummary: getStringValue(formData, "problemSummary"),
    };

    const errors = validateConsultationFormValues(values, attachment);
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please review the highlighted fields and try again.",
          errors,
        },
        { status: 400 },
      );
    }

    const route = deriveConsultationRoute(values);
    const redirectUrl = getCalendarUrl(route);
    const webhookUrl = process.env.CONSULTATION_WEBHOOK_URL;

    if (webhookUrl) {
      const outbound = new FormData();

      for (const [key, value] of formData.entries()) {
        if (typeof value === "string") {
          outbound.append(key, value);
        } else if (value instanceof File && value.size > 0) {
          outbound.append(key, value, value.name);
        }
      }

      outbound.append("route", route);
      outbound.append("submittedAt", new Date().toISOString());
      outbound.append("redirectUrl", redirectUrl);

      const webhookHeaders = process.env.CONSULTATION_WEBHOOK_BEARER_TOKEN
        ? {
            Authorization: `Bearer ${process.env.CONSULTATION_WEBHOOK_BEARER_TOKEN}`,
          }
        : undefined;

      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: webhookHeaders,
        body: outbound,
        cache: "no-store",
      });

      if (!webhookResponse.ok) {
        return NextResponse.json(
          {
            ok: false,
            error:
              "We saved your intake locally, but couldn't forward it to the configured destination.",
          },
          { status: 502 },
        );
      }

      return NextResponse.json({
        ok: true,
        message: "Thanks. Your details are on their way to the right team.",
        mode: "webhook",
        redirectUrl,
        route,
      });
    }

    console.info("Consultation submission received without webhook:", {
      ...values,
      route,
      attachmentName: attachment?.name ?? null,
      attachmentSize: attachment?.size ?? null,
    });

    return NextResponse.json({
      ok: true,
      message:
        "Thanks. Your request has been captured and is ready for calendar handoff.",
      mode: "local",
      redirectUrl,
      route,
    });
  } catch (error) {
    console.error("Consultation submission failed:", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Something unexpected happened while submitting the form. Please try again.",
      },
      { status: 500 },
    );
  }
}

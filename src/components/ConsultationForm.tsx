"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ANNUAL_REVENUE_OPTIONS,
  BUDGET_OPTIONS,
  CONSULTATION_ENTRY_PATH,
  EMPTY_CONSULTATION_FORM_VALUES,
  HEADCOUNT_OPTIONS,
  MAX_ATTACHMENT_SIZE_BYTES,
  PROJECT_STAGE_OPTIONS,
  ROUTE_DETAILS,
  SOLUTION_TYPE_OPTIONS,
  TIMELINE_OPTIONS,
  type ConsultationFormErrors,
  type ConsultationFormValues,
  type ConsultationRoute,
  validateConsultationFormValues,
} from "@/lib/consultation";

type SubmissionState =
  | { status: "idle" }
  | { status: "submitting" }
  | {
      status: "success";
      message: string;
      redirectUrl: string;
      route: ConsultationRoute;
      mode: "local" | "webhook";
    }
  | { status: "error"; message: string };

type ConsultationFieldName = keyof ConsultationFormValues | "attachment";

const ALL_FIELDS: ConsultationFieldName[] = [
  "firstName",
  "lastName",
  "companyName",
  "role",
  "businessEmail",
  "phoneNumber",
  "solutionType",
  "headcount",
  "annualRevenue",
  "projectStage",
  "budget",
  "timeline",
  "problemSummary",
  "attachment",
];

function fieldId(name: ConsultationFieldName) {
  return `consultation-${name}`;
}

function errorId(name: ConsultationFieldName) {
  return `consultation-${name}-error`;
}

type BaseFieldProps = {
  label: string;
  name: keyof ConsultationFormValues;
  value: string;
  required?: boolean;
  placeholder?: string;
  type?: string;
  touched: boolean;
  error?: string;
  onBlur: (name: keyof ConsultationFormValues) => void;
  onChange: (name: keyof ConsultationFormValues, value: string) => void;
};

function FieldError({
  name,
  error,
}: {
  name: ConsultationFieldName;
  error?: string;
}) {
  if (!error) return null;
  return (
    <p
      id={errorId(name)}
      className="mt-1 text-xs font-medium text-rose-600"
      role="alert"
    >
      {error}
    </p>
  );
}

function TextField({
  label,
  name,
  value,
  required,
  placeholder,
  type = "text",
  touched,
  error,
  onBlur,
  onChange,
}: BaseFieldProps) {
  const hasError = touched && Boolean(error);
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-slate-700">
        {label}
        {required ? <span className="text-rose-500"> *</span> : null}
      </span>
      <input
        id={fieldId(name)}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(name, event.target.value)}
        onBlur={() => onBlur(name)}
        aria-invalid={hasError}
        aria-describedby={hasError ? errorId(name) : undefined}
        className={`w-full rounded-xl border bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10 ${
          hasError
            ? "border-rose-300 focus:border-rose-500 focus:ring-rose-100"
            : "border-slate-200"
        }`}
      />
      <FieldError name={name} error={hasError ? error : undefined} />
    </label>
  );
}

function SelectField({
  label,
  name,
  value,
  required,
  placeholder,
  touched,
  error,
  onBlur,
  onChange,
  options,
}: BaseFieldProps & { options: readonly string[] }) {
  const hasError = touched && Boolean(error);
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-slate-700">
        {label}
        {required ? <span className="text-rose-500"> *</span> : null}
      </span>
      <div className="relative">
        <select
          id={fieldId(name)}
          name={name}
          value={value}
          onChange={(event) => onChange(name, event.target.value)}
          onBlur={() => onBlur(name)}
          aria-invalid={hasError}
          aria-describedby={hasError ? errorId(name) : undefined}
          className={`w-full appearance-none rounded-xl border bg-white px-3 py-2 pr-10 text-sm text-slate-900 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10 ${
            hasError
              ? "border-rose-300 focus:border-rose-500 focus:ring-rose-100"
              : "border-slate-200"
          }`}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="m6 9 6 6 6-6"
          />
        </svg>
      </div>
      <FieldError name={name} error={hasError ? error : undefined} />
    </label>
  );
}

export function ConsultationForm() {
  const [values, setValues] = useState<ConsultationFormValues>(
    EMPTY_CONSULTATION_FORM_VALUES,
  );
  const [attachment, setAttachment] = useState<File | null>(null);
  const [showAttachmentPanel, setShowAttachmentPanel] = useState(false);
  const [touched, setTouched] = useState<
    Partial<Record<ConsultationFieldName, boolean>>
  >({});
  const [errors, setErrors] = useState<ConsultationFormErrors>({});
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    status: "idle",
  });
  const redirectTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (redirectTimer.current) window.clearTimeout(redirectTimer.current);
    };
  }, []);

  useEffect(() => {
    if (attachment) setShowAttachmentPanel(true);
  }, [attachment]);

  const handleChange = (name: keyof ConsultationFormValues, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSubmissionState((current) =>
      current.status === "error" ? { status: "idle" } : current,
    );
  };

  const handleBlur = (name: keyof ConsultationFormValues) => {
    setTouched((current) => ({ ...current, [name]: true }));
    setErrors(validateConsultationFormValues(values, attachment));
  };

  const handleAttachmentChange = (file: File | null) => {
    setAttachment(file);
    setTouched((current) => ({ ...current, attachment: true }));
    setErrors((current) => ({
      ...current,
      attachment:
        file && file.size > MAX_ATTACHMENT_SIZE_BYTES
          ? "Please upload a file smaller than 10 MB."
          : undefined,
    }));
    setSubmissionState((current) =>
      current.status === "error" ? { status: "idle" } : current,
    );
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const allTouched = Object.fromEntries(
      ALL_FIELDS.map((f) => [f, true]),
    ) as Partial<Record<ConsultationFieldName, boolean>>;
    setTouched(allTouched);

    const nextErrors = validateConsultationFormValues(values, attachment);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmissionState({
        status: "error",
        message: "A few important details still need your attention.",
      });
      return;
    }

    setSubmissionState({ status: "submitting" });

    const formData = new FormData();
    for (const [key, value] of Object.entries(values)) {
      formData.append(key, value);
    }
    if (attachment) formData.append("attachment", attachment, attachment.name);

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        body: formData,
      });

      const payload = (await response.json()) as
        | {
            ok: true;
            message: string;
            mode: "local" | "webhook";
            redirectUrl: string;
            route: ConsultationRoute;
          }
        | { ok: false; error: string };

      if (!response.ok || !payload.ok) {
        throw new Error(
          payload.ok
            ? "Something went wrong while sending your request."
            : payload.error,
        );
      }

      setSubmissionState({
        status: "success",
        message: payload.message,
        redirectUrl: payload.redirectUrl,
        route: payload.route,
        mode: payload.mode,
      });

      redirectTimer.current = window.setTimeout(() => {
        window.location.assign(payload.redirectUrl);
      }, 1800);
    } catch (error) {
      setSubmissionState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "We couldn't submit your consultation request.",
      });
    }
  };

  if (submissionState.status === "success") {
    return (
      <div className="rounded-[28px] border border-emerald-200 bg-emerald-50/80 p-8 sm:p-10">
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-700">
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>
        <h2 className="mb-3 text-3xl font-bold text-slate-900">
          Your consultation request is in.
        </h2>
        <p className="max-w-2xl text-base leading-7 text-slate-700">
          {submissionState.message} We&apos;ll take you to the{" "}
          <span className="font-semibold text-slate-900">
            {ROUTE_DETAILS[submissionState.route].label}
          </span>{" "}
          in a moment so you can pick a time that works.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={submissionState.redirectUrl}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary-dark px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Continue to Google Calendar
          </a>
          <Link
            href={CONSULTATION_ENTRY_PATH}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-white"
          >
            Submit another request
          </Link>
        </div>
        {submissionState.mode === "local" ? (
          <p className="mt-6 text-sm leading-6 text-slate-600">
            The webhook destination is not configured yet, so this submission
            is only being captured in local server logs for now.
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* About you */}
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
          About you
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <TextField
            label="First Name"
            name="firstName"
            value={values.firstName}
            placeholder="Enter first name"
            required
            touched={Boolean(touched.firstName)}
            error={errors.firstName}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={values.lastName}
            placeholder="Enter last name"
            required
            touched={Boolean(touched.lastName)}
            error={errors.lastName}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <TextField
            label="Company Name"
            name="companyName"
            value={values.companyName}
            placeholder="Enter company name"
            required
            touched={Boolean(touched.companyName)}
            error={errors.companyName}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <TextField
            label="Your Role"
            name="role"
            value={values.role}
            placeholder="Enter your role"
            required
            touched={Boolean(touched.role)}
            error={errors.role}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <TextField
            label="Business Email"
            name="businessEmail"
            type="email"
            value={values.businessEmail}
            placeholder="you@company.com"
            required
            touched={Boolean(touched.businessEmail)}
            error={errors.businessEmail}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <TextField
            label="Business Contact Number"
            name="phoneNumber"
            type="tel"
            value={values.phoneNumber}
            placeholder="+1 (555) 555-5555"
            touched={Boolean(touched.phoneNumber)}
            error={errors.phoneNumber}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Project details */}
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
          Project details
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <SelectField
            label="What do you need help with?"
            name="solutionType"
            value={values.solutionType}
            placeholder="Select one option"
            required
            options={SOLUTION_TYPE_OPTIONS}
            touched={Boolean(touched.solutionType)}
            error={errors.solutionType}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <SelectField
            label="Current Headcount"
            name="headcount"
            value={values.headcount}
            placeholder="Select one option"
            required
            options={HEADCOUNT_OPTIONS}
            touched={Boolean(touched.headcount)}
            error={errors.headcount}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <SelectField
            label="Annual Revenue"
            name="annualRevenue"
            value={values.annualRevenue}
            placeholder="Select one option"
            required
            options={ANNUAL_REVENUE_OPTIONS}
            touched={Boolean(touched.annualRevenue)}
            error={errors.annualRevenue}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <SelectField
            label="Project Stage"
            name="projectStage"
            value={values.projectStage}
            placeholder="Select one option"
            required
            options={PROJECT_STAGE_OPTIONS}
            touched={Boolean(touched.projectStage)}
            error={errors.projectStage}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <SelectField
            label="Estimated Budget"
            name="budget"
            value={values.budget}
            placeholder="Select one option"
            required
            options={BUDGET_OPTIONS}
            touched={Boolean(touched.budget)}
            error={errors.budget}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <SelectField
            label="Ideal Timeline"
            name="timeline"
            value={values.timeline}
            placeholder="Select one option"
            required
            options={TIMELINE_OPTIONS}
            touched={Boolean(touched.timeline)}
            error={errors.timeline}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Context */}
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
          Context
        </p>
        <textarea
          id={fieldId("problemSummary")}
          name="problemSummary"
          rows={4}
          value={values.problemSummary}
          placeholder="Describe the problem, the outcome you want, and anything already in motion."
          onChange={(event) =>
            handleChange("problemSummary", event.target.value)
          }
          onBlur={() => handleBlur("problemSummary")}
          aria-invalid={Boolean(touched.problemSummary && errors.problemSummary)}
          aria-describedby={
            touched.problemSummary && errors.problemSummary
              ? errorId("problemSummary")
              : undefined
          }
          className={`w-full rounded-xl border bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/10 ${
            touched.problemSummary && errors.problemSummary
              ? "border-rose-300 focus:border-rose-500 focus:ring-rose-100"
              : "border-slate-200"
          }`}
        />
        <FieldError
          name="problemSummary"
          error={touched.problemSummary ? errors.problemSummary : undefined}
        />

        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
          <button
            type="button"
            onClick={() => setShowAttachmentPanel((current) => !current)}
            className="flex w-full items-center justify-between gap-4 text-left"
          >
            <div>
              <p className="text-xs font-semibold text-slate-800">
                Add a supporting file
                <span className="ml-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-400">
                  Optional
                </span>
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-600">
                Share a brief, deck, or screenshot if it will help us
                understand the project faster.
              </p>
            </div>
            <span className="shrink-0 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500">
              {showAttachmentPanel ? "Hide" : "Add file"}
            </span>
          </button>

          {showAttachmentPanel ? (
            <div className="mt-4">
              <label
                htmlFor={fieldId("attachment")}
                className="flex min-h-[110px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-center transition-colors hover:border-primary hover:bg-primary/5"
              >
                <span className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M12 16.5V4.5m0 12 4.5-4.5M12 16.5 7.5 12M4.5 19.5h15"
                    />
                  </svg>
                </span>
                <span className="text-xs font-semibold text-slate-800">
                  {attachment
                    ? attachment.name
                    : "Drop your file here or click to upload"}
                </span>
                <span className="mt-1 text-xs text-slate-500">
                  PDF, DOCX, PPTX, JPG, or PNG up to 10 MB
                </span>
              </label>
              <input
                id={fieldId("attachment")}
                name="attachment"
                type="file"
                accept=".pdf,.doc,.docx,.ppt,.pptx,.png,.jpg,.jpeg"
                className="sr-only"
                onChange={(event) =>
                  handleAttachmentChange(event.target.files?.[0] ?? null)
                }
              />
              <FieldError
                name="attachment"
                error={touched.attachment ? errors.attachment : undefined}
              />
            </div>
          ) : null}
        </div>
      </div>

      {submissionState.status === "error" ? (
        <div
          className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-xs font-medium text-rose-700"
          role="alert"
        >
          {submissionState.message}
        </div>
      ) : null}

      <div className="flex items-center justify-between border-t border-slate-200 pt-5">
        <p className="text-xs text-slate-500">
          Required fields are marked with *
        </p>
        <button
          type="submit"
          disabled={submissionState.status === "submitting"}
          className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary-dark px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submissionState.status === "submitting"
            ? "Sending your request..."
            : "Continue to Calendar"}
        </button>
      </div>
    </form>
  );
}

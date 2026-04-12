import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/consultation",
    "/services/generative-ai",
    "/services/web-mobile",
  ];

  return routes.map((route) => ({
    url: `https://emerssive.com${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/consultation" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/consultation" ? 0.9 : 0.8,
  }));
}

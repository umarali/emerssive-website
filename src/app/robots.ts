import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      // Allow crawlers to read the Code3 pages' noindex meta tags.
      allow: "/",
    },
    sitemap: "https://emerssive.com/sitemap.xml",
  };
}

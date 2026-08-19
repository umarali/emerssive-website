import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The Code3Apps working record is reachable by link, not through search.
      disallow: "/code3",
    },
    sitemap: "https://emerssive.com/sitemap.xml",
  };
}

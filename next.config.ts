import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // The Code3Apps working record: static pages exported from the code3 workspace
      // into public/code3 (see that repo's docs/pages-src/site-export.py). Served under
      // extensionless paths so the strip inside the pages can link page to page.
      { source: "/code3", destination: "/code3/index.html" },
      { source: "/code3/:slug", destination: "/code3/:slug.html" },
    ];
  },
};

export default nextConfig;

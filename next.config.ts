import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "re-leaf-strapi.onrender.com",
      "excellent-boat-6d2d23a9d6.media.strapiapp.com",
    ],
  },
  // Force dynamic rendering for all pages
  output: 'standalone' as const,
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);

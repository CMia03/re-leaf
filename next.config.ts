import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"], // Ajoutez localhost ici
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);

/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
    },
  },
  i18n,
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
    },
  },
  // i18n: {
  //   locales: ['en', 'fa'],
  //   defaultLocale: 'en',
  // },
  i18n: {
    localeDetection: true,
    locales: ["en", "fa", "default"],
    defaultLocale: "default",
  }
};

module.exports = nextConfig;

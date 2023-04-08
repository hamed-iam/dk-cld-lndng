/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
    },
  },
  i18n: {
    locales: ['en', 'fa'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;

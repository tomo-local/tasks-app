/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
  },
}

module.exports = nextConfig

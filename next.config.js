 /** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "ru"], // Desteklenen dilleri listeleyin.
    defaultLocale: "en", // Varsayılan dili ayarlayın.
  },
  reactStrictMode: true,
  
}

module.exports = nextConfig



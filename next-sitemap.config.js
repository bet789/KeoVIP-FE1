/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://keovip.tv",
  generateRobotsTxt: true,
  exclude: ["/sitemap/tin-tuc.xml", "/sitemap/soi-keo.xml", "/sitemap/cam-nang.xml", "/sitemap/highlight.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://keovip.tv/sitemap.xml",
      "https://keovip.tv/sitemap/tin-tuc.xml",
      "https://keovip.tv/sitemap/soi-keo.xml",
      "https://keovip.tv/sitemap/cam-nang.xml",
      "https://keovip.tv/sitemap/highlight.xml",
    ],
  },
};

module.exports = config;

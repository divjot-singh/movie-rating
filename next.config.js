const path = require("path");
const withSass = require("@zeit/next-sass");
module.exports = withSass({
  reactStrictMode: true,
  cssModules: true,
});
const {
  LOCALES,
  STREAMING_TYPE,
  LOCALE_SERVICE_DATA,
} = require("./route_constants");
module.exports = {
  async redirects() {
    let paths = [],
      firstStreamingType = STREAMING_TYPE.movie;
    Object.keys(LOCALES).forEach((locale) => {
      const firstService = LOCALE_SERVICE_DATA[locale][0];
      paths.push({
        source: `/${locale}`,
        destination: `/${locale}/${firstService}/${firstStreamingType}`,
        permanent: true,
      });
      Object.keys(STREAMING_TYPE).forEach((streamingType) => {
        paths.push({
          source: `/${locale}/${streamingType}`,
          destination: `/${locale}/${streamingType}/${firstService}`,
          permanent: true,
        });
      });
    });
    return paths;
  },
  images: {
    domains: ["m.media-amazon.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

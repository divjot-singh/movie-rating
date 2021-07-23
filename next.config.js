const path = require("path");
const withSass = require("@zeit/next-sass");
module.exports = withSass({
  reactStrictMode: true,
  cssModules: true,
});
module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: `/popular_movies`,
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["m.media-amazon.com", "imdb-api.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

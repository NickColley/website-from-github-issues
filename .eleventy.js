const { GITHUB_REPOSITORY_NAME } = require("./lib/constants.js");
const markdown = require("./lib/markdown.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.setLibrary("md", {
    render: (content) => markdown(content),
  });
  return {
    dir: {
      data: "../data",
      layouts: "../layouts",
      input: "./pages",
    },
    pathPrefix: `/${GITHUB_REPOSITORY_NAME}/`,
  };
};

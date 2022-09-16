const { GITHUB_REPOSITORY_NAME } = require("./lib/constants.js");

module.exports = function () {
  return {
    dir: {
      data: "../data",
      layouts: "../layouts",
      input: "./pages",
    },
    pathPrefix: `/${GITHUB_REPOSITORY_NAME}/`,
  };
};

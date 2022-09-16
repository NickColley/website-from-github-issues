require("dotenv").config();

const { GITHUB_REPOSITORY } = process.env;
const repoName = GITHUB_REPOSITORY.split("/")[1];

module.exports = function (eleventyConfig) {
  return {
    pathPrefix: `/${repoName}/`,
  };
};

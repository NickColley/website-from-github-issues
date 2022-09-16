require("dotenv").config();
const { GITHUB_TOKEN, GITHUB_REPOSITORY } = process.env;

if (!GITHUB_REPOSITORY) {
  throw new Error(
    "No GITHUB_REPOSITORY environment variable set. If working locally copy the .env.sample file to .env."
  );
}

const [GITHUB_REPOSITORY_OWNER, GITHUB_REPOSITORY_NAME] =
  GITHUB_REPOSITORY.split("/");

module.exports = {
  GITHUB_TOKEN,
  GITHUB_REPOSITORY_OWNER,
  GITHUB_REPOSITORY_NAME,
};

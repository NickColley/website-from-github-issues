const { join } = require("path");
const { access, writeFile } = require("fs/promises");
const { Octokit } = require("@octokit/rest");

const {
  GITHUB_TOKEN,
  GITHUB_REPOSITORY_OWNER,
  GITHUB_REPOSITORY_NAME,
} = require("../lib/constants.js");

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

async function getIssues() {
  const cachedIssuesPath = join(__dirname, "..", ".cached-issues.json");
  try {
    await access(cachedIssuesPath);
    console.log(`Using cached issues...`);
    return require(cachedIssuesPath);
  } catch (error) {
    console.log(`Looking for issues...`);
    const { data } = await octokit.issues.listForRepo({
      owner: GITHUB_REPOSITORY_OWNER,
      repo: GITHUB_REPOSITORY_NAME,
    });
    // Cache posts locally...
    await writeFile(cachedIssuesPath, JSON.stringify(data, null, 2));
    return data;
  }
}

module.exports = async function () {
  const issues = await getIssues();
  return issues
    .filter((issue) => {
      // You can remove this is you want issues from everyone to be rendered.
      return issue.author_association === "OWNER";
    })
    .map((issue) => {
      const id = parseInt(issue.html_url.split("/").at(-1), 10);

      return {
        path: `/issues/${id}`,
        title: issue.title,
        body: issue.body,
      };
    });
};

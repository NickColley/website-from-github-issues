const { Octokit } = require("@octokit/rest");

const {
  GITHUB_TOKEN,
  GITHUB_REPOSITORY_OWNER,
  GITHUB_REPOSITORY_NAME,
} = require("../lib/constants.js");

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

module.exports = async function () {
  try {
    const issuesResponse = await octokit.issues.listForRepo({
      owner: GITHUB_REPOSITORY_OWNER,
      repo: GITHUB_REPOSITORY_NAME,
    });
    const { data: issues } = issuesResponse;

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
  } catch (error) {
    return console.error(error);
  }
};

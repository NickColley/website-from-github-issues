require("dotenv").config();
const { Octokit } = require("@octokit/rest");

const { GITHUB_TOKEN, GITHUB_REPOSITORY } = process.env;

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

const [owner, repoName] = GITHUB_REPOSITORY.split("/");

module.exports = async function () {
  try {
    const issuesResponse = await octokit.issues.listForRepo({
      owner: owner,
      repo: repoName,
    });
    const { data: issues } = issuesResponse;

    return issues
      .filter((issue) => {
        // You can remove this is you want issues from everyone to be rendered.
        return issue.author_association === "OWNER";
      })
      .map((issue) => {
        // Is there a better way to do this?
        const id = parseInt(
          issue.html_url.replace(
            `https://github.com/${GITHUB_REPOSITORY}/issues/`,
            ""
          ),
          10
        );
        return {
          slug: id,
          title: issue.title,
          body: issue.body,
        };
      });
  } catch (error) {
    return console.error(error);
  }
};

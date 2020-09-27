# Eleventy GitHub Issues

## Before you start

Make sure you have Git and Node.js (12.x) installed.

## Installation

### 1. [Fork the project](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo)

### 2. Clone your forked project
```bash
git clone git@github.com:your-username-here/eleventy-github-issues.git
```

### 3. Navigate to the project
```bash
cd eleventy-github-issues
```

### 4. Install the dependencies
```bash
npm install
```

### 5. Set up the environment variables
```bash
mv .env.sample .env
```

1. [Create a personal access](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) token with the 'repo' permissons.
2. Set `GITHUB_TOKEN` to your new token.
3. Set `GITHUB_OWNER` to your username.

### 7. Create an issue on your repository

### 8. Start the project
```bash
npm start -- --serve
```

## Deploying the site with Netlify

### 1. [Setup your project to deploy via Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/).

### 2. Setup environment variables

Copy the environment variables in your `.env` file into your Netlify site configuration.

> In your site dashboard under **Settings > Build & deploy > Environment > Environment variables.** Variable values set under site settings will override the team-level settings.

[Netlify docs: Build environment variables
](https://docs.netlify.com/configure-builds/environment-variables/)

### 3. Set up GitHub webhook

By default Netlify will build every time you deploy code changes.

To deploy on issue changes we can setup a GitHub webhook.

1. Create a [Netlify build hook](https://docs.netlify.com/configure-builds/build-hooks/#parameters).

2. Setup the webhook using the Netlify URL in your GitHub project settings

> To set up a webhook, go to the settings page of your repository or organization. From there, click Webhooks, then Add webhook.


[GitHub docs: Creating webhooks
](https://docs.github.com/en/free-pro-team@latest/developers/webhooks-and-events/creating-webhooks#setting-up-a-webhook)

3. Select **Let me select individual events.**
4. Uncheck 'Pushes' and check 'Issues'.
5. Click add webhook.

# Eleventy GitHub Issues

Prototype demonstration of rendering a GitHub project issues to a website using Eleventy and Netlify.

Could be used for a simple blog on your website or to produce a report on your issues.

You can see this project rendered here: https://nickcolley.github.io/eleventy-github-issues/

Note that only issues created by the owner will show up, but you could configure this to be based on labels or something else.

## Before you start

Make sure you have Git and Node.js (16.x) installed.

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
3. Set `GITHUB_REPOSITORY` to your repository.

### 7. Create an issue on your repository

### 8. Start the project
```bash
npm start -- --serve
```

## Deploying the site with GitHub Actions

The [deploy GitHub action workflow](./github/workflows/deploy.yml) will automatically deploy changes.
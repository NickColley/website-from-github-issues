# Website from GitHub Issues

Create a website generated from your GitHub issues.

Could be used for a simple blog on your website or to produce a report on your issues.

[View the deployed website](../../deployments)

## Installing

Create a [new project with this repository as the template](https://github.com/NickColley/website-from-github-issues/generate).

GitHub will deploy your own website and you can create an issue to see it show up.

## Developing locally

### Before you start

Make sure you:
- have made your own project from this template repository.
- have Git and Node.js (16.x) installed.

### Installation

#### 1. Clone your forked project
```bash
git clone git@github.com:your-username-here/website-from-github-issues.git
```

#### 2. Navigate to the project
```bash
cd website-from-github-issues
```

#### 3. Install the dependencies
```bash
npm install
```

#### 4. Set up the environment variables
```bash
mv .env.sample .env
```

1. [Create a personal access](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) token with the 'repo' permissons.
2. Set `GITHUB_TOKEN` to your new token.
3. Set `GITHUB_REPOSITORY` to your repository.

### 5. Create an issue on your repository

### 6. Start the project
```bash
npm start -- --serve
```

## Deploying the site with GitHub Actions

The [deploy GitHub action workflow](./github/workflows/deploy.yml) will automatically deploy changes.

# Create a JavaScript Action Using Deno

[![CI](https://github.com/Kesin11/deno-action-template/actions/workflows/ci.yml/badge.svg)](https://github.com/Kesin11/deno-action-template/actions/workflows/ci.yml)

TypeScript Action with Deno template inspire by [actions/typescript-action](https://github.com/actions/typescript-action).

This template includes compilation TypeScript(deno) to JavaScript support, tests, a validation workflow, publishing, and versioning guidance.

## Create Your Own Action

To create your own action, you can use this repository as a template! Just follow the below instructions:

1. Click the **Use this template** button at the top of the repository
2. Select **Create a new repository**
3. Select an owner and name for your new repository
4. Click **Create repository**
5. Clone your new repository

## Initial Setup

You'll need to install [Deno](https://deno.land/) and [Node.js](https://nodejs.org) to develop your action.

After `git clone` this repository, you'll need to perform some initial setup steps before you can develop your action.

```bash
# Setup githooks that check dist/ before git push
deno task setup:githooks
```

## Update the Action Metadata

When you copy this repository, update [`action.yml`](./action.yml) with the name, description, author, inputs, and outputs for your action.

## Update the Action Code

The [`src/`](./src/) directory contains the entrypoint scripts and libraries. `main.ts` and `post.ts` are the entrypoints that will be executed when your action is invoked, others are library code. The [`tests/`](./tests/) directory contains test code.

You can run tests with `deno test -A` command, or you can run `deno task dev` to run tests automatically when you change codes.

After changing `src/` or some dependencies, you need to run `deno task bundle` to bundle your code into `dist/` directory. Since GitHub Actions requires JavaScript, `deno task bundle` will compile deno TypeScript to JavaScript using [dnt](https://github.com/denoland/dnt) and then bundle it with dependencies using [esbuild](https://esbuild.github.io/).

Finally, you need to commit `dist/` directory and push it to GitHub.

## Validate the Action

You can validate format, lint, test, and bundle with GitHub Actions. See [ci.yml](./.github/workflows/ci.yml) for details.

## Publish the Action

After editing codes, you can publish your action to GitHub Releases.

When you push to 'main' branch [`release-drafter`](https://github.com/release-drafter/release-drafter) will automatically make the draft release and also the changelog by pull-requests label. You can change pull-requests category in the changelog by editing the pull-request label directly if you want.

When it is time to publish new version, you can do it by dispatch relese.yml from GitHub. `release-drafter` will choose the next version by semantic versioning then tag and publish Github Releases.

See [release.yml](./.github/workflows/release.yml) and [release-drafter.yml](./.github/release-drafter.yml) for details.

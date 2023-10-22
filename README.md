# Create a JavaScript Action Using Deno

[![CI](https://github.com/Kesin11/deno-action-template/actions/workflows/ci.yml/badge.svg)](https://github.com/Kesin11/deno-action-template/actions/workflows/ci.yml)

TypeScript Action with Deno template inspire by [actions/typescript-action](https://github.com/actions/typescript-action).

This template includes compilation TypeScript(deno) to javascript support, tests, a validation workflow, publishing, and versioning guidance.

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

The [`src/`](./src/) directory has entrypoint script and library. `main.ts` and `post.ts` are entrypoint that will be run when your actions is invoked, others are library codes. The [`tests/`](./tests/) directory has test codes.

You can run tests with `deno test -A` command, also you can run `deno task dev` to run tests automatically when you change codes.

After change [`src/`] or some dependencies, you need to run `deno task bundle` to bundle your code to `dist/` directory. Since GitHub Actions need to javascript, `deno task bundle` will compile deno TypeScript to javascript using [dnt](https://github.com/denoland/dnt) then bundle it with dependencies using [esbuild](https://esbuild.github.io/).

Finally, you have to commit `dist/` directory and push it to GitHub.

## Validate the Action

You can check format, lint, test, and bundle with GitHub Actions. See [ci.yml](./.github/workflows/ci.yml) for details.

## Publish the Action

After edit codes, you can publish your action to GitHub Releases.

When push 'main' branch [`release-drafter`](https://github.com/release-drafter/release-drafter) will make draft release and also changelog automatically by pull-requests label. You can change ull-requests category in changelog by editing pull-request label directly If you want.

When time to publish new version, you can do it by workflow_dispatch relese.yml from GitHub. `release-drafter` will chose next version by Semantic Versioning then tagging and publish Releases.

See [release.yml](./.github/workflows/release.yml) and [release-drafter.yml](./.github/release-drafter.yml) for details.

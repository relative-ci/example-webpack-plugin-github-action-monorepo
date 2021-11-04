# example-webpack-plugin-github-action-monorepo

[![ci](https://github.com/relative-ci/example-webpack-plugin-github-action-monorepo/workflows/ci/badge.svg)](https://github.com/relative-ci/example-webpack-plugin-github-action-monorepo/actions?query=workflow%3Aci)
[![RelativeCI](https://badges.relative-ci.com/badges/GYnRkwf55sjSprt5rTVK?branch=master)](https://app.relative-ci.com/projects/GYnRkwf55sjSprt5rTVK)

> [@relative-ci/agent](https://github.com/relative-ci/agent) webpack plugin setup example for [Github Action](https://github.com/features/actions) on a monorepo


## Example app

Basic webpack setup:
- `Javascript`: babel with `@babel/preset-env` and `@babel/preset-react`
- `CSS`: `postcss`(`autoprefixer`, `cssnano`), `css-modules`, `mini-css-extract`
- assets:
  - `public`: `copy-webpack-plugin`
  - `src`: `file-loader`
  - `inline.svg`: - `svgr`

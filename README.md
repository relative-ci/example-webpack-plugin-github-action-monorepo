# example-webpack-plugin-github-action

[![ci](https://github.com/relative-ci/example-webpack-plugin-github-action/workflows/ci/badge.svg)](https://github.com/relative-ci/example-webpack-plugin-github-action/actions?query=workflow%3Aci)
[![RelativeCI](https://badges.relative-ci.com/badges/7OUGcZsX5e4QBYcecng1?branch=master)](https://app.relative-ci.com/projects/7OUGcZsX5e4QBYcecng1)

> @relative-ci/agent webpack plugin setup example for Github Action

## Example webpack

Basic webpack setup:
- `Javascript`: babel with `@babel/preset-env` and `@babel/preset-react`
- `CSS`: postcss(autoprefixer, cssnano), css-modules, mini-css-extract
- assets:
  - `public` - copy-webpack-plugin
  - `src` - file-loader
  - `inline.svg` - svgr

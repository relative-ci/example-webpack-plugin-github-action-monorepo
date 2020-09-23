# example-react-webpack

[![ci](https://github.com/relative-ci/example-react-webpack/workflows/ci/badge.svg)](https://github.com/relative-ci/example-react-webpack/actions?query=workflow%3Aci)
[![RelativeCI](https://badges.relative-ci.com/badges/7OUGcZsX5e4QBYcecng1?branch=master)](https://app.relative-ci.com/projects/7OUGcZsX5e4QBYcecng1)

## Setup

Basic webpack setup:
- `Javascript`: babel with `@babel/preset-env` and `@babel/preset-react`
- `CSS`: postcss(autoprefixer, nano), css-modules, mini-css-extract
- assets:
  - `public` - copy-webpack-plugin
  - `src` - file-loader
  - `inline.svg` - svgr

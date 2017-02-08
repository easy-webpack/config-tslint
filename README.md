# @easy-webpack/config-tslint

[![Greenkeeper badge](https://badges.greenkeeper.io/easy-webpack/config-tslint.svg)](https://greenkeeper.io/)
Lint TypeScript file using [tslint](https://palantir.github.io/tslint/) and [tslint-loader](https://github.com/wbuchwalter/tslint-loader).

# Installation
```
npm install --save-dev @easy-webpack/config-tslint
```
[easy-webpack](https://github.com/easy-webpack/core) is also required.

# Usage
```js
// webpack.config.js
const generateConfig = require('@easy-webpack/core').generateConfig;

const baseConfig = { ... }; // project-specific config like the entry file

module.exports = generateConfig(
  baseConfig,

  require('@easy-webpack/config-tslint')
    ({ /* Options object */ exclude: /(node_modules|bower_components)/ })
);

// tslint.json
{
  "extends": "tslint-config-standard"
}

// This config will lint TypeScript files before compiling
```

Remember to add a `tslint.json` file on the root of your repository (where `webpack.config.js` is located). 

# Options
### exclude
Type: `(Array of) webpack exclude object` Default: `node_modules`

Files to be excluded from tslint linting. Check [webpack documentation](https://webpack.js.org/configuration/module/#condition) on how to exclude files.

# Related tutorials
 - [tslint.json format](https://palantir.github.io/tslint/usage/tslint-json/)
 - [tslint rules list](https://palantir.github.io/tslint/rules/)

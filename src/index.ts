import {WebpackConfig, get} from '@easy-webpack/core'
import * as path from 'path'

/**
 * Tslint loader support for *.ts files
 * See: https://github.com/wbuchwalter/tslint-loader
 */
export = function tslint({options = undefined, exclude = null} = {}) {
  return function tslint(this: WebpackConfig): WebpackConfig {
    return {
      module: {
        preLoaders: get(this, 'module.preLoaders', []).concat([
          { test: /\.tsx?$/, loader: 'tslint', exclude: exclude || (this.metadata.root ? [path.join(this.metadata.root, 'node_modules')] : []) }
        ])
      },
      tslint: options
    }
  }
}
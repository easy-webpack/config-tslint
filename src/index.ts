import {WebpackConfigWithMetadata, get} from '@easy-webpack/core'
import * as path from 'path'

/**
 * Tslint loader support for *.ts files
 * See: https://github.com/wbuchwalter/tslint-loader
 */
export = function tslint({exclude = null} = {}) {
  return function tslint(this: WebpackConfigWithMetadata): WebpackConfigWithMetadata {
    return {
      module: {
        rules: get(this, 'module.rules', []).concat([
          { test: /\.tsx?$/, loader: 'tslint-loader', enforce: 'pre', exclude: exclude || (this.metadata.root ? [path.join(this.metadata.root, 'node_modules')] : []) }
        ])
      }
    }
  }
}
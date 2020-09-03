import webpackMerge from 'webpack-merge'
import { Configuration } from 'webpack'
import { resolve } from 'path'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import SpeedMeasureWebpackPlugin from 'speed-measure-webpack-plugin'

import commonConfig from './webpack.common'
import { PROJECT_ROOT } from '../constant/env'

const prodConfig: Configuration = {
  mode: 'production',
  entry: {
    app: resolve(PROJECT_ROOT, 'src', 'index.tsx'),
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        memoryLimit: 1024 * 2,
        configFile: resolve(PROJECT_ROOT, 'tsconfig.json'),
      },
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: { test: /node_modules/, priority: -10, name: 'vendors' },
        default: { minChunks: 2, priority: -20, reuseExistingChunk: true, minSize: 20 },
      },
    },
  },
}

const mergeConfig = webpackMerge(commonConfig, prodConfig)
const smp = new SpeedMeasureWebpackPlugin()
export default smp.wrap(mergeConfig)

/* eslint-disable @typescript-eslint/explicit-function-return-type */
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const dotenv = require('dotenv')
const fs = require('fs-extra')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('node:path')
const TerserPlugin = require('terser-webpack-plugin')
const { DefinePlugin } = require('webpack')

const tsConfig = require('./tsconfig.json')

const isDev = process.argv.includes('serve')
const tsConfigPaths = Object.entries(tsConfig.compilerOptions.paths)

/* ================================================================================================================== */

class PublicCopyPlugin {
  constructor() {}

  /** @type import('webpack').WebpackPluginInstance['apply'] */
  apply(compiler) {
    compiler.hooks.afterEmit.tap('PublicCopyPlugin', () => {
      const publicPath = path.resolve(__dirname, 'public')
      const outputPath = compiler.outputPath

      if (fs.existsSync(publicPath)) {
        const publicFiles = fs.readdirSync(publicPath)

        for (const files of publicFiles) {
          if (files !== 'index.html') {
            fs.copySync(path.resolve(publicPath, files), path.resolve(outputPath, files))
          }
        }
      }
    })
  }
}

/* ================================================================================================================== */

/** @type import('webpack').Configuration */
module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  devtool: 'source-map',
  devServer: {
    open: true,
    port: 8084,
    hot: true
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      ...tsConfigPaths.reduce((prev, [key, paths]) => {
        return {
          ...prev,
          [key.replace('/*', '')]: path.resolve(__dirname, paths[0].replace('/*', ''))
        }
      }, {})
    }
  },
  module: {
    rules: [
      {
        test: /\.([t|j]sx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        }
      },
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(s[c|a]ss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader'
      }
    ]
  },
  optimization: {
    minimize: !isDev,
    minimizer: isDev ? [] : [new TerserPlugin(), new CssMinimizerPlugin()]
  },
  plugins: [
    new PublicCopyPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'index.html',
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new DefinePlugin({
      'process.env': dotenv.config({ path: path.join(__dirname, '.env') }).parsed,
      'process.env.NODE_ENV': JSON.stringify(isDev ? 'development' : 'production')
    }),
    new MiniCssExtractPlugin({ filename: 'static/css/[name].css', chunkFilename: 'static/css/[id].css' })
  ]
}

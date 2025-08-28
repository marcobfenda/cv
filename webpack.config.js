const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  return {
    entry: "./src/assets/js/index.js",
    output: {
      filename: "js/bundle.[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
          ],
        },
      ],
    },
    resolve: {
      alias: {
        vue: isProduction ? "vue/dist/vue.esm-bundler.js" : "vue/dist/vue.esm-bundler.js",
      },
      extensions: ["*", ".js", ".vue", ".json"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: "src/assets/img", to: "images" },
          { from: "src/assets/*.pdf", to: "[name][ext]" }
        ],
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      }),
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: JSON.stringify(true),
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
        __VUE_PROD_TIPS__: JSON.stringify(false),
        'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
      }),
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: "css/style.[contenthash].css",
      }),
    ],
    stats: 'errors-only',
    devServer: {
      static: "./dist",
      hot: true,
    },
    devtool: isProduction ? false : "source-map",
    optimization: {
      minimize: isProduction,
    },
  };
};

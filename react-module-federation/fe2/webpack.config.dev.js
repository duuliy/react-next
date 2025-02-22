const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { dependencies } = require("./package.json");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 8882,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "fe2",
      filename: "remoteEntryB.js",
      remotes: {
        "fe1": "fe1@http://localhost:8881/remoteEntryA.js",
      },
      exposes: {
        "./Header2": "./src/pages/header2",
      },
      shared: {
        react: { // react
          singleton: true,
          requiredVersion: dependencies["react"],
          eager: true,
        },
        "react-dom": { // react-dom
          singleton: true,
          requiredVersion: dependencies["react-dom"],
          eager: true,
        },
      },
    }),
  ],
});

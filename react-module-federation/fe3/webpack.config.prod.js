const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { dependencies } = require("./package.json");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = merge(common, {
  mode: 'production',
  devServer: {
    port: 8083,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "fe3",
      filename: "remoteEntryC.js",
      remotes: {
        "fe2": "fe1@http://localhost:8081/remoteEntryB.js",
      },
      shared: {
        // some other dependencies
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

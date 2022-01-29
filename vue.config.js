const { defineConfig } = require("@vue/cli-service");
const { ModuleFederationPlugin } =
require("webpack").container;

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    host: "0.0.0.0",
    port: 9002,
  },
});

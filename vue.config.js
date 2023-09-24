const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/board-game/',

  devServer: {
    host: "0.0.0.0",
    port: 9002,
  },
});

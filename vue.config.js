module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        //内部配置
        "@": "./src",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        assets: "@/assets",
        views: "@/views",
      },
    },
  },
};

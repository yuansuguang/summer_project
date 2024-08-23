const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // port: 8080,
    // host: '192.168.43.86',
    proxy: {
      "/proxy_url": {
        target: 'http://172.17.0.3:8000',
        changeOrigin: true,
        pathRewrite: {
          '^/proxy_url': '/'
        }
      }
    }
  }
})

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy:{
      '/api':{
        target:'https://cprint.unifound.net/api',// 开发中跨域处理
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }

})

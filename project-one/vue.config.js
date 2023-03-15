const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    //npm run serve 启动后自动打开页面
    devServer: {
        open: true,
        host: 'localhost',
        proxy: {  //配置测试时的跨域代理规则
            '/api': {
                target: 'http://127.0.0.1:8086',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
    //关闭组件命名规则
    //根据官方风格指南，除了根组件（App.vue）外，自定义组件名称应该由多单词组成，防止和html标签冲突
    // lintOnSave: false
})

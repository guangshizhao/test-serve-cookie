//配置开发中的跨域环境

module.exports = {
    //outputDir: 'dist',
    // baseUrl: './',
    productionSourceMap: false,
    devServer: {
        proxy: { // 配置跨域
            '/api':{
                target: 'http://localhost:8888',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            },
            '/kuaidi': {
                target: 'http://www.kuaidi100.com/', // 你要访问的地址
                ws: true, // 是否启用websockets
                changeOrigin: true, // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {
                  '^/kuaidi': '/kuaidi' // 路径重写
                }
              }
    }
}
}

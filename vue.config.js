module.exports = {
    configureWebpack: {
        resolve: {
            extensions: [],
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views'
            }
        }
    },
    devServer: {
        open: true, //是否自动弹出浏览器页面
        host: "localhost", 
        port: '8081',
        https: false,
        hotOnly: false, 
        proxy: {
            '/suza': {
                target: 'http://49.235.69.94/suza', //API服务器的地址
                changeOrigin: true,
                pathRewrite: {
                    '^/suza': ''
                }
            }
        },
    }
}
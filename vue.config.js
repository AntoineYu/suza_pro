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
        open: true, 
        host: "localhost", 
        port: '8081',
        https: false,
        hotOnly: false, 
        proxy: {
            '/suza': {
                target: 'http://49.235.69.94/suza', 
                changeOrigin: true,
                pathRewrite: {
                    '^/suza': ''
                }
            }
        },
    }
}
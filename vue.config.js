module.exports = {
    configueWebpack: {
        resolve: {
            extension: [],
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views'
            }
        }
    }
}
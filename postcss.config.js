module.exports = {
    plugins: {
        "postcss-px-to-viewport": {
            viewportWidth: 375,
            viewportHeight: 667,
            unitPrecision: 5,
            viewportUnit: 'vw',
            selectorBlacklist: ['ignore', 'tab-bar'],
            minPixelValue: 1,  //小于多少的像素不替换
            mediaQuery: false,
            exclude: [/TabBar/]
        }
    }
}
const mode = process.env.NODE_ENV;

module.exports = {
    productionSourceMap: true,

    configureWebpack: config => {
        if (mode === "production") {
            // 正式发布时移除console语句
            // config.optimization.minimizer[0].options.terserOptions.compress.dropConsole = true;
        }
    },
    css: {
        sourceMap: true, // 开启 CSS source maps
        loaderOptions: {
            less: {
                lessOptions: {
                    javascriptEnabled: true,
                },
            },
        },
    },
};

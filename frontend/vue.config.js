module.exports = {
    // Change build paths to make them Maven compatible
    // see https://cli.vuejs.org/config/
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8088',
                ws: true,
                changeOrigin: true
            }
        }
    },

    outputDir: 'target/dist',
    assetsDir: 'static',

    pluginOptions: {
      quasar: {
        theme: 'mat',
        rtlSupport: true,
        importAll: true
      }
    },

    transpileDependencies: [
      /[\\\/]node_modules[\\\/]quasar-framework[\\\/]/
    ]
}

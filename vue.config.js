const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/atlas=vue/'
    : '/',
  configureWebpack: {
    module: {
      rules: [
        {       
         test: /\.txt/,
         type: 'asset/source',
        }
      ]
    },
}
}
)

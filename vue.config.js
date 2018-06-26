const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://yuanxiao.boxuegu.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' } // 重写路径
      }
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('src'),
        com: resolve('src/components'),
        util: resolve('src/utils'),
        api: resolve('src/api'),
        styl: resolve('src/stylus'),
        views: resolve('src/views'),
        assets: resolve('src/assets'),
        img: resolve('src/assets/img')
      }
    }
  }
};

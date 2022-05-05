// webpack.config.js

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8000,
    open: false,
    hot: true,
    // 代理配置
    proxy: {
      '/todolist': {
        target: 'http://localhost:3000/todolist',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/todolist': ''
        }
      }
    }
  },
} 
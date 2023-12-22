module.exports = {
  devServer: {
    proxy: {
      '/api': { // Предполагается, что запросы к бэкенду начинаются с '/api'
        target: 'http://localhost:3000', // URL бэкенда
        ws: true,
        changeOrigin: true
      }
    }
  }
};

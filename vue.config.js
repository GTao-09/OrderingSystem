const express = require('express')
const app = express()
// var appData = require('./static/mock/data.json')

var apiRoutes = express.Router()

app.use('/api', apiRoutes)

module.exports = {
  devServer: {
    open: false, // 启动项目后自动开启浏览器
    host: '0.0.0.0', // 对应的主机名
    port: 8080, // 端口号
    https: false, // 是否开启协议名,如果开启会发出警告
    proxy: {
      // 配置跨域
      '/api': { // 配置跨域的名字
        target: 'http//localhost:8080/api', // 跨域的地址
        ws: true,
        changOrigin: true, // 是否跨域
        pathRewrite: { // 当前的名字
          '^/api': ''
        }
      }
    }
    // before: function (app) {
    //   // 可请求   api/data
    //   app.get('/api/data', function (req, res) {
    //     console.log(appData)
    //     res.json({ code: 0, data: appData })
    //   })
    // }
  }
}

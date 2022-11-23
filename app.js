const express = require('express')
const router = require('./router')
const cors = require('cors')
// const mw1 = require('./middleware')
// 创建web服务器
const app = express()
app.use(cors())
// 注册路由模块
app.use(router)
// 启动服务器
app.listen(3000, () => {
    console.log('run: http://127.0.0.1:3000')
})

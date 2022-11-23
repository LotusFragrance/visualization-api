// const qs = require('querystring')
// 解析表单数据的中间件
const mw1 = function(req, res, next) {
    let str = ''
    req.on('data', (chunk) => {
        str += chunk
    })
    req.on('end', () => {
        let body = JSON.parse(str)
        req.body = body
        next()
    })
}

module.exports = mw1
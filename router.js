// 路由模块
const express = require('express')
const overviewData = require('./data/overview')
const monitorDataError = require('./data/monitorError')
const monitorDataAbnormal = require('./data/monitorAbnormal')
const pointSumData = require('./data/pointSum')
const pointData = require('./data/point')
const mapData = require('./data/map')
const userData = require('./data/user')
const regionData = require('./data/region')
const orderData = require('./data/order')
const salesData = require('./data/sales')
const sceneData = require('./data/scene')
const hotData = require('./data/hot')
// 创建路由对象
const router = express.Router()
// // 解析body 中JSON格式数据
router.use(express.json())
// // 解析body 中对象格式数据
// router.use(express.urlencoded({ extended: false }))

// 挂载路由
// 概览区域overview
router.get('/api/overview', (req, res) => {
    res.send({
        status: 400,
        msg: '请求成功',
        data: overviewData
    })
})

// 监控区域(故障设备)
router.get('/api/monitor', (req, res) => {
    const query = req.query
    if (query.code == 1) {
        res.send({
            status: 400,
            msg: '请求成功',
            data: monitorDataError
        })
    } else if (query.code == 2) {
        res.send({
            status: 400,
            msg: '请求成功',
            data: monitorDataAbnormal
        })
    }

})

// 点位区域point
router.get('/api/point', (req, res) => {
    res.send({
        status: 400,
        msg: '请求成功',
        data: pointData
    })
})
router.get('/api/point/sum', (req, res) => {
    res.send({
        status: 400,
        msg: '请求成功',
        data: pointSumData
    })
})

// 地图区域
router.get('/api/map', (req, res) => {
    res.send({
        status: 400,
        msg: '请求成功',
        data: mapData
    })
})

//用户统计
router.get('/api/user', (req, res) => {
    res.send({
        status: 400,
        msg: '请求成功',
        data: userData
    })
})

router.get('/api/user/region', (req, res) => {
    res.send({
        status: 400,
        msg: '请求成功',
        data: regionData
    })
})

// 订单区域
router.get('/api/order', (req, res) => {
    res.send({
        status: 400,
        msg: '请求成功',
        data: orderData
    })
})

// 销售统计
router.get('/api/sales', (req, res) => {
    res.send({
        status: 400,
        msg: '请求成功',
        data: salesData
    })
})

// 使用场景
router.get('/api/scene', (req, res) => {
    res.send({
        status: 400,
        msg: '请求成功',
        data: sceneData
    })
})

// 设备热销排行
router.get('/api/hot', (req, res) => {
    res.send({
        status: 400,
        msg: '请求成功',
        data: hotData
    })
})
// 导出路由对象
module.exports = router
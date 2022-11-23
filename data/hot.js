module.exports = [
    {
        city: '北京',  // 城市
        sales: '25, 179',  // 销售额
        flag: true, //  上升还是下降
        brands: [   //  品牌种类数据
            { name: '设备1', num: '9,086', flag: true },
            { name: '设备2', num: '8,341', flag: true },
            { name: '设备3', num: '7,407', flag: false },
            { name: '设备4', num: '6,080', flag: false },
            { name: '设备5', num: '6,724', flag: false },
            { name: '设备6', num: '2,170', flag: true },
        ]
    },
    {
        city: '河北',
        sales: '23,252',
        flag: false,
        brands: [
            { name: '设备1', num: '3,457', flag: false },
            { name: '设备2', num: '2,124', flag: true },
            { name: '设备3', num: '8,907', flag: false },
            { name: '设备4', num: '6,080', flag: true },
            { name: '设备5', num: '1,724', flag: false },
            { name: '设备6', num: '1,170', flag: false },
        ]
    },
    {
        city: '上海',
        sales: '20,760',
        flag: true,
        brands: [
            { name: '设备1', num: '2,345', flag: true },
            { name: '设备2', num: '7,109', flag: true },
            { name: '设备3', num: '3,701', flag: false },
            { name: '设备4', num: '6,080', flag: false },
            { name: '设备5', num: '2,724', flag: false },
            { name: '设备6', num: '2,998', flag: true },
        ]
    },
    {
        city: '江苏',
        sales: '23,252',
        flag: false,
        brands: [
            { name: '设备1', num: '2,156', flag: false },
            { name: '设备2', num: '2,456', flag: true },
            { name: '设备3', num: '9,737', flag: true },
            { name: '设备4', num: '2,080', flag: true },
            { name: '设备5', num: '8,724', flag: true },
            { name: '设备6', num: '1,770', flag: false },
        ]
    },
    {
        city: '山东',
        sales: '20,760',
        flag: true,
        brands: [
            { name: '设备1', num: '9,567', flag: true },
            { name: '设备2', num: '2,345', flag: false },
            { name: '设备3', num: '9,037', flag: false },
            { name: '设备4', num: '1,080', flag: true },
            { name: '设备5', num: '4,724', flag: false },
            { name: '设备6', num: '9,999', flag: true },
        ]
    }
]
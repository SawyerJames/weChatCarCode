Page({
    data: {
        // 信息
        msgContent: {
            price: 20.00,
            business: '长春大巴',
            route: '机场',
            time: '2018-01-17',
            type: '余额',
            order: '12003495'
        },
        // 支付不成功
        payFail: false
    },
    onLoad: function (options) {
        // 通过id，拉取此次信息
    },
    
    // 支付接口
    onPay: function () {
        // 调用微信支付接口
        this.setData({
            payFail: true
        });
    },

    // 跳转个人中心页
    goCenter: function () {
        wx.navigateTo({
            url: '../center/center'
        });
    },

    // 跳转开通线路页
    goLine: function () {
        wx.navigateTo({
            url: '../line/line'
        });
    }
})
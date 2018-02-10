Page({
    data: {
        // 日期
        startTime: '',
        endTime: '',
        date: '',
        // 消费
        price: '336',
        // 乘车记录
        cardList: [
            {
                name: '长春地铁',
                price: '3.00',
                month: '03-12',
                time: '12:12'
            },
            {
                name: '长春地铁',
                price: '3.00',
                month: '03-12',
                time: '12:12',
                payType: 0
            },
        ]
    },

    // 生命周期函数--监听页面加载
    onLoad: function (options) {
        // 获取Uid
        var uid = wx.getStorageSync('user');
        // 获取当前日期
        var date = new Date;
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        month = (month < 10 ? "0" + month : month);
        // 当前日期格式化
        var mydate = (year.toString() + '-' + month.toString());
        // 赋值日期
        this.setData({
            startTime: '2017-01-01',
            endTime: mydate,
            date: mydate
        });
        // 获取乘车记录信息，赋值在cadrdList中
        wx.request({
            url: "https://card.jltengfang.com/small/index/order",
            data: {
                date: this.data.date,
                uid: uid
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded',
            },
            method: 'GET',
            dataType: 'json',
            success: function (res) {
                console.log(res);
            }
        })
    },

    // 日期选择器
    bindDateChange: function (e) {
        // 获取Uid
        var uid = wx.getStorageSync('user');
        // 更改后发送当前日期，调取乘车记录
        this.setData({
            date: e.detail.value
        });
        wx.request({
            url: "https://card.jltengfang.com/small/index/order",
            data: {
                date: this.data.date,
                uid: uid
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded',
            },
            method: 'GET',
            dataType: 'json',
            success: function (res) {
                console.log(res);
            }
        })
    },

    // 跳转到支付页: 是否支付
    goPayPages: function (event) {
        // 获取到自定义数据，payType: 是否支付
        var payType = event.currentTarget.dataset.paytype;
        // 如果未支付，则跳转到支付页面
        if (payType == 0) {
            wx.navigateTo({
                url: '../pay/pay',
            })
        }
    }
})
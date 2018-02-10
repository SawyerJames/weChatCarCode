var app = getApp();
Page({
    data: {
        // 通知公告相关
        noticeList: [],
        indicatorDots: false,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        // 二维码
        qr: '/images/qr.png'
    },

    // 页面加载时  
    onLoad: function (options) {
        var that = this;
        // 获取通知公告列表
        wx.request({
            url: 'https://card.jltengfang.com/small/index/notice',
            data: {},
            header: {
                'content-type': 'application/x-www-form-urlencoded',
            },
            method: 'GET',
            success: function (res) {
                var resData = res.data;
                console.log(resData);
                that.setData({
                    noticeList: resData
                });
            }
        });
        // 每分钟重新拉取一次二维码信息，定时器存在全局变量中，使其可以跨函数请求
        app.globalData.qrSerInterval = setInterval(function () {
            // 拉取信息
            wx.request({
                url: 'https://card.jltengfang.com/small/index/notice',
                data: {},
                header: {
                    'content-type': 'application/x-www-form-urlencoded',
                },
                method: 'GET',
                success: function (res) {
                    console.log(res);
                }
            });
        }, 1000);
    }, 

    // 手动刷新二维码
    onRefresh:function (){
        // 清除二维码定时器
        clearInterval(app.globalData.qrSerInterval);
        // 拉取请求，请求成功则再次使用全局变量赋值一个定时器
        wx.request({
            url: 'https://card.jltengfang.com/small/index/notice',
            data: {},
            header: {
                'content-type': 'application/x-www-form-urlencoded',
            },
            method: 'GET',
            dataType: 'json',
            success: function(res) {
                // 拉取信息后继续定时器拉取信息
                app.globalData.qrSerInterval = setInterval(function () {
                    // 拉取信息
                    wx.request({
                        url: 'https://card.jltengfang.com/small/index/notice',
                        data: {},
                        header: {
                            'content-type': 'application/x-www-form-urlencoded',
                        },
                        method: 'GET',
                        success: function (res) {
                            console.log(res);
                        }
                    });
                }, 1000);
            }
        })
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
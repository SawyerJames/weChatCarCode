// 调用APP全局方法
var app = getApp();

Page({
    data: {
        // 用户信息
        userInfo: {},
        // 通知公告相关
        noticeList: [],
        indicatorDots: false,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        // 广告位
        advertList: [
            { 'advertisement_image':'/images/banner1.jpg'},
            { 'advertisement_image':'/images/banner2.jpg'},
            { 'advertisement_image':'/images/banner3.jpg'}
        ],
        // 问候语标志
        greeting: ''
    },

    // 页面加载
    onLoad: function () {
        var that = this;
        // 更新用户数据: 从缓存中读取
        this.setData({
            userInfo: wx.getStorageSync('userInfo')
        });
        // 获取通知公告列表
        wx.request({
            url: 'https://card.jltengfang.com/small/index/notice',
            data: {},
            header: {
                'content-type': 'application/x-www-form-urlencoded',
            },
            method: 'GET',
            success: function(res) {
                var resData = res.data;
                that.setData({
                    noticeList: resData
                });
            }
        });
        // 获取广告
        wx.request({
            url: 'https://card.jltengfang.com/small/index/advert',
            data: {},
            header: {
                'content-type': 'application/x-www-form-urlencoded',
            },
            method: 'GET',
            success: function(res) {
                var resData = res.data;
                // that.setData({
                //     advertList: resData
                // });
            }
        });
        // 判断日期问候语
        var date = new Date();
        var currentDate = date.getHours();
        if (currentDate >= 0 && currentDate <= 12){
            this.setData({
                greeting: 'morning'
            });
        }
        if (currentDate == 12){
            this.setData({
                greeting: 'noon'
            });
        }
        if (currentDate > 12 && currentDate < 18) {
            this.setData({
                greeting: 'afternoon'
            });
        }
        if (currentDate > 18 && currentDate <= 23) {
            this.setData({
                greeting: 'night'
            });
        };
    },

    // 跳转快速乘车页
    goRideCar: function () {
        // 判断用户是否已经对快速乘车进行过授权，如果没授权，跳转到开通页
        // 否则跳转到二维码页
        wx.navigateTo({
            url: '../goRideCar/goRideCar'
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
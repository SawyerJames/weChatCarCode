Page({
    data: {
    },

    // 页面加载
    onLoad: function (options) {
        // 获取金额
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
    },

    // 查看乘车记录
    goIndex: function () {
        wx.navigateTo({
            url: '../busCard/busCard'
        });
    }
})
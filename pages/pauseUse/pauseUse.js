Page({
    data: {

    },
    onLoad: function (options) {
        // 通过id，拉取开启时间状态
    },

    // 乘车记录
    onRecard: function () {
        wx.navigateTo({
            url: '../busCard/busCard'
        });
    },

    // 暂停使用按钮
    onPauseUse: function () {
        // 发起取消授权请求
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
Page({
    // 跳转乘车记录页
    goBusCard: function () {
        wx.navigateTo({
            url: '../busCard/busCard'
        });
    },
    // 跳转常见问题页
    goQuestion: function () {
        wx.navigateTo({
            url: '../question/question'
        });
    },
    // 跳转暂停使用页
    goPauseUse: function () {
        wx.navigateTo({
            url: '../pauseUse/pauseUse'
        });
    }
})
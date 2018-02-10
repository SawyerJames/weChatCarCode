Page({
    data: {},

    onLoad: function (options) {
        
    },

    // 生命周期函数--监听页面初次渲染完成
    onReady: function () {

    },

    // 同意协议并开通
    onPassRide: function (){
        // 拉取小程序授权，免密支付
    },

    // 出行码使用协议
    goAgreement: function (){
        wx.navigateTo({
            url: '../agreement/agreement'
        })
    }
})
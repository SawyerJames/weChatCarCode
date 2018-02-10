Page({
    data: {
        // 问题列表
        questionList: [
            {
                question: "如何支付车费?",
                id: 0
            },
            {
                question: "每日乘车次数是否有限制?",
                id: 1
            },
            {
                question: "车费计算规则?",
                id: 2
            },
            {
                question: "如何查看行车记录?",
                id: 3
            }
        ]
    },

    // 生命周期函数--监听页面加载
    onLoad: function (options) {
        // 请求问题列表
        wx.request({
            url: "",
            data: {},
            header: {},
            method: 'GET',
            dataType: 'json',
            success: function(res) {},
            fail: function(res) {},
        })
    },
})
Page({
    data: {
        // 问题类型
        id: null,
        // 详细答案
        detail: {
            title: '',
            content: ''
        }
    },

    // 生命周期函数--监听页面加载
    onLoad: function (options) {
        // 问题类型：继承上一页的id
        this.setData({
            id: options.id
        })
        // 传递问题类型，返回详细答案
        wx.request({
            url: "",
            data: {id:this.data.id},
            header: {},
            method: 'GET',
            dataType: 'json',
            success: function(res) {},
            fail: function(res) {}
        })
    },
})
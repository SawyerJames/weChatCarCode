Page({
    data: {
        //   tab切换表单
        tabBtn: 0,
        // 机场大巴数据
        busRoute:[
            {
                route:'长春机场巴士1号线',
                routeDetail: '长春龙嘉国际机场-东方广场-民丰路-和顺街-南关城市候机楼-人民广场'
            },
            {
                route: '长春机场巴士2号线',
                routeDetail: '长春龙嘉国际机场-南关城市候机楼-文化广场-正阳广场-汽贸城-一汽花园酒店'
            },
            {
                route: '长春机场巴士3号线',
                routeDetail: '长春龙嘉国际机场-高速客运站'
            }
        ]
    },

    onLoad: function (options) {
        // 以后可能有的需求：获取大巴数据
    },

    // tab切换: 切换tab表单数据
    tabChoose(event){
        // 拿取自定义参数
        var tabType = event.currentTarget.dataset.tabtype;
        // 存入data切换样式
        this.setData({
            tabBtn: tabType
        });
        // 判断tabType，加载数据
        if(this.data.tabBtn == 0){
            // 加载数据
        }
    },

    // 跳转个人中心页
    goCenter: function () {
        wx.navigateTo({
            url: '../center/center'
        });
    },

    // 跳转开通线路页
    goLine: function () {
        return;
    }
})
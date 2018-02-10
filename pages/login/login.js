Page({
    onLoad: function (options) {
        // 调用API从本地缓存中获取数据
        var Uid = wx.getStorageSync('user') || '';
        var userInfo = wx.getStorageSync('userInfo') || {};
        // 判断Uid是否非空，如果为空则说明登录态过期，重新获取登录态
        if (Uid == '') {
            this.login();
        }
        else {
            // 如果缓存机制中有Uid，证明登录态没有失效，即1.5s后跳转至首页
            var goIndexSetTimeout = setTimeout(function () {
                wx.redirectTo({
                    url: '/pages/index/index'
                })
            }, 2500);
        }
    },
    // 登录方法
    login:function (){
        var that = this;
        wx.login({
            success: function (res) {
                console.log("登录态请求");
                // 如果请求的状态码不为空，则获取用户登录态成功
                if (res.code) {
                    wx.getUserInfo({
                        success: function (data) {
                            // 定义空对象，用来存储用户基本信息
                            var userInfo = {};
                            userInfo.avatarUrl = data.userInfo.avatarUrl;
                            userInfo.nickName = data.userInfo.nickName;
                            //存储userInfo
                            wx.setStorageSync('userInfo', userInfo);
                            //发起网络请求
                            wx.request({
                                url: 'https://card.jltengfang.com/small/index/index',
                                method: 'POST',
                                header: {
                                    'content-type': 'application/x-www-form-urlencoded',
                                },
                                data: {
                                    code: res.code,
                                    encryptedData: data.encryptedData,
                                    iv: data.iv, data
                                },
                                dataType: 'json',
                                success: function (ssdata) {
                                    // 获取到Uid,添加至缓存中
                                    wx.setStorageSync('user', ssdata.data);
                                    wx.redirectTo({
                                        url: '/pages/index/index'
                                    })
                                },
                                fail: function (err) {
                                    return;
                                }
                            })
                        },
                        // 授权登录被拒绝，尝试再次登录
                        fail: function (err) {
                            if (wx.openSetting) {
                                wx.openSetting({
                                    success: function (res) {
                                        //尝试再次登录
                                        that.login();
                                    }
                                })
                            } else {
                                wx.showModal({
                                    title: '授权提示',
                                    content: '小程序需要您的微信授权才能使用'
                                })
                            }
                        }
                    });
                }
                // 如果请求的状态码为空，则获取用户登录态失败
                else {
                    return
                }
            }
        });
    }
})
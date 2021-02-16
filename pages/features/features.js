// pages/features/features.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    uid: '',
    pwd: '',
    cores: [
      [
        {
          id: 'xl',
          name: '校历',
          url: '/pages/calendar/calendar',
          needLogin: true
        },
        {
          id: 'cjcx',
          name: '成绩查询',
          url: '/pages/score/score',
          needLogin: true
        },

      ],
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var uid = wx.getStorageSync('uid');
    var pwd = wx.getStorageSync('newpwd');
    wx.showToast({
      title: "loading",
      icon: "loading",
      duration: 5000
    })
      that.setData({
        uid: uid,
        pwd: pwd,
      });
    },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    that.onLoad();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
    }
    return {
      title: '还没用过 “小雪同学”😱还不快来试试？',
      path: '/pages/features/features',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  //账户注销登录
  logout: function () {
    try {
      wx.clearStorageSync()
    } catch (e) {
      // Do something when catch error
    }
    app.globalData.uid = "";
    app.globalData.pwd = "";
    app.globalData.newpwd = "";
    wx.setStorageSync('uid', '');
    wx.setStorageSync('newpwd', '');
    wx.setStorageSync('netPassword', '');
    wx.setStorageSync('building', '');
    wx.setStorageSync('roomNo', '');
    wx.redirectTo({
      url: '/pages/index/index'
    })
  }

    })

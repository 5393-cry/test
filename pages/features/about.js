// pages/features/about.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: '100%',
    height: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.setData({
      width: wx.getSystemInfoSync().windowWidth * 0.9 + 'px',
      height: wx.getSystemInfoSync().windowWidth * 0.9 * 0.5625 + 'px'
    })
    wx.pageScrollTo({
      scrollTop: 1600,
      duration: 4000,
    })
    setTimeout(function() {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300,
      })
    }, 4000);
  },
  copyID: function() {
    wx.setClipboardData({
      data: 'wxf0ba93e3faff4eda'
    })
    wx.showToast({
      title: '已复制到粘贴版',
      duration: 1000
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  showAppCode: function() {
  },
  goOtherApps: function(e) {
    var appid = e.currentTarget.dataset.appid;
    wx.navigateToMiniProgram({
      appId: appid,
      success(res) {
        // 打开成功
      }
    })
  },
  checkUpdate:function(){
    app.appUpdate('userclick');
  }
})
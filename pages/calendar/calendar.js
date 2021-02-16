// pages/2/2.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    jsonContent: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(res) {
    return {
      title: '内蒙古工业大学校历',
      path: 'pages/calendar/calendar',
    }
  },
  showPic: function() {
  }
})
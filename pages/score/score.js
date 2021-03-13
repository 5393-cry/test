var app = getApp()
Page({
  data: {
    uid: '',
    pwd: '',
    jsonContent: {},
    jsonStr: "",
    help_status: false,
    reset_status: false,
    userid_focus: false,
    passwd_focus: false,
    vcode_focus: false,
    resetUid_focus: false,
    idCardNO_focus: false,
    angle: 0,
    PreInfo: {}
  },
  onLoad: function() {
   
  },
  checkHasLogin: function() {
    
  },
  copyResetURL:function(){
    wx.setClipboardData({
      data: 'http://jwch.imut.edu.cn/jwzx/index.do',
      success(res) {
        wx.showToast({
          title: '内容已复制，请粘贴到浏览器访问',
          icon:'none'
        })
      }
    })
  },
  onReady: function () {
    
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
  onShareAppMessage: function () {
    
  }
})
// pages/index3/index3.js
Page({
  // 页面初始数据 
 data:{ 
     indicatorDots: true,
     autoplay: true,
     interval: 3000,
     duration: 600,
 search: { searchValue: '', 
 showClearBtn: false 
 }, 
 searchResult: [] 
 }, 
 onLoad: function (options) { 
 // 页面初始化 options为页面跳转所带来的参数 
 },
  onReady: function () { 
 // 页面渲染完成
  },
    onShow: function () {
    
   },
  
  // 页面显示 
 
  onHide: function () { 
 // 页面隐藏
  }, 
 onUnload: function () { 
 // 页面关闭 
 },
  //输入内容时
  searchActiveChangeinput: function (e) { 
 const val = e.detail.value;
  this.setData({ 
    'search.showClearBtn': val != '' ? true : false, 
    'search.searchValue': val 
 })
  }, 
 //点击清除搜索内容 
 searchActiveChangeclear: function (e) {
    this.setData({ 
      'search.showClearBtn': false, 
    'search.searchValue': '' 
 })
  }, 
 //点击聚集时 
 focusSearch: function () {
  if (this.data.search.searchValue) { 
 this.setData({ 
   'search.showClearBtn': true
   }) 
 } 
 }, 
 //搜索提交 
 searchSubmit: function () { 
 const val = this.data.search.searchValue; 
 if (val) { 
 const that = this, 
 app = getApp(); 
 // 搜索中提示 
 wx.showToast({
  title: '搜索中',
   icon: 'loading' 
 }); 
 // 搜索请求路径 
 // 请根据自己实际情况填写路径，具体请看注意事项 
 wx.request({ 
 url: app.globalData.API_URL + 'searchTeam', 
 data: { 
   keywords: val, user_id: app.globalData.myInfo.user_id 
 },
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT 
  // header: {},// 设置请求的 header 
  success: function (res) { 
 // success 成功返回方法 
 let searchResult = res.data.data; 
 const len = searchResult.length;
  for (let i = 0; i < len; i++) {
  searchResult[i]['team_avator'] = app.globalData.STATIC_SOURCE + searchResult[i]['team_avator']; 
 }
  that.setData({ 
 searchResult: searchResult,
  'search.showClearBtn': false,
  }) 
 }, 
 fail: function () {
  // fail 失败返回方法
  },
  complete: function () { 
 // complete
  wx.hideToast();
  } 
 })
  }
  } 
 })

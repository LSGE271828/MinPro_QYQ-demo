// pages/movie/movie.js
Page({
data:{
  currentIndex:0,
  winHeight:0,
  hotMovie:[{na:'asd',id:'11'},{nad:'adsd',id:'22'}]
},

changeCurrentIndex:function(e){
  this.setData(
    {
      currentIndex:e.currentTarget.id
    }
  )


},
gotoPage1: function(){ wx.navigateTo({ url: '/pages/index/out1', }) },
gotoPage2: function(){ wx.navigateTo({ url: '/pages/index/index', }) },

 /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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
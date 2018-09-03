// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classifyIndex:0,
    active:0,
    goodsList: [
      {
        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535784222202&di=57a27f1365b1b38b88178c66c685ea67&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-11-30%2F024907802.jpg",
        name: "金木研杰弗里看送反抗螺丝钉机福克",
        desc: "古纳拉黑暗之神",
        isHot: true,
        isNew: true,
        price: "32.2"
      },
      {
        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535784222202&di=57a27f1365b1b38b88178c66c685ea67&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-11-30%2F024907802.jpg",
        name: "金木研",
        isHot: true,
        desc: "古纳拉黑暗之神",
        isNew: true,
        price: "32.2"
      },
      {
        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535784222202&di=57a27f1365b1b38b88178c66c685ea67&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-11-30%2F024907802.jpg",
        name: "金木研",
        desc: "古纳拉黑暗之神",
        isHot: true,
        isNew: true,
        price: "32.2"
      }
    ]
  },
  onChange:function(event){
    this.setData({
      active:event.detail
    })
  },
  classifyChange:function(event){
    console.log(parseInt(event.currentTarget.dataset.index))
    
    this.setData({
      classifyIndex:parseInt(event.currentTarget.dataset.index)
    })
  },
  chooseType:function(){
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function(res) {
        console.log(res.tapIndex)
      },
      fail: function(res) {
        console.log(res.errMsg)
      }
    })
  },
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
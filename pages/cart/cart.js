// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSelectAll: false,

    goodsList: [
      {
        goodsName: "饼干放假快乐圣诞节反抗螺丝钉机卡分离送到解放军第四快乐",
        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535784222202&di=57a27f1365b1b38b88178c66c685ea67&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-11-30%2F024907802.jpg",
        price: "13.5",
        count: 5,
        totail: "67.5",
        isSelected:false
      },
      {
        goodsName: "饼干放假快乐圣诞节反抗螺丝钉机卡分离送到解放军第四快乐",
        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535784222202&di=57a27f1365b1b38b88178c66c685ea67&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-11-30%2F024907802.jpg",
        price: "13.5",
        count: 5,
        totail: "67.5",
        isSelected:false
      }

    ]
  },
  selectChange: function (e) {
    let isSelectAll = this.data.isSelectAll

    // 取消全选
    if (isSelectAll) {

    } else {
      // 全选
    }
    this.setData({
      isSelectAll: !isSelectAll
    })
  },
  selectCart: function (e) {
    let index = e.currentTarget.dataset.cartindex
    let goodsList = this.data.goodsList
    goodsList[index].isSelected = !goodsList[index].isSelected
    this.setData({
      goodsList: goodsList
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
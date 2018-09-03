//index.js
//获取应用实例
const app = getApp()
import {logoImgUrl,indexCaptionBgImg} from '../../asserts/config.js'
Page({
  data: {
    logoImg:"",
    captionBgImg:"",
    swiperImgs: [{
        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536370379&di=56034ec3308023e3d6886afc8fbe4027&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ffe958aba384a801219c77ee2079.jpg",
        href: ""
      },
      {
        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536370379&di=56034ec3308023e3d6886afc8fbe4027&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ffe958aba384a801219c77ee2079.jpg",
        href: ""
      },
      {
        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536370379&di=56034ec3308023e3d6886afc8fbe4027&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ffe958aba384a801219c77ee2079.jpg",
        href: ""
      }
    ],

    goodsList: [
      {
        img: "http://www.heiyexing.cn/resume/images/profileImages/profileMedium.jpg",
        name: "金木研杰弗里看送反抗螺丝钉机福克斯的李开复空手道",
        desc: "古纳拉黑暗之神",
        isHot: true,
        isNew: true,
        price: "32.2"
      },
      {
        img: "http://www.heiyexing.cn/resume/images/profileImages/profileMedium.jpg",
        name: "金木研",
        isHot: true,
        desc: "古纳拉黑暗之神",
        isNew: true,
        price: "32.2"
      },
      {
        img: "http://www.heiyexing.cn/resume/images/profileImages/profileMedium.jpg",
        name: "金木研",
        desc: "古纳拉黑暗之神",
        isHot: true,
        isNew: true,
        price: "32.2"
      }
    ]
  },
  onLoad: function() {
    this.setData({
      logoImg:logoImgUrl,
      captionBgImg:indexCaptionBgImg
    })
  },
  getUserInfo: function(e) {

  }
})
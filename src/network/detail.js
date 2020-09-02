import {
  request
} from "./request"

export function getdetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  })
}
export function getRecommend() {
  return request({
    url: "recommend"
  })
}
export class Goods {
  constructor(itemInfo, colums, services) {
    console.log(itemInfo);

    this.title = itemInfo.title,
      this.desc = itemInfo.desc,
      this.newPrice = itemInfo.newPrice,
      this.oldPrice = itemInfo.oldPrice,
      this.discount = itemInfo.discount,
      this.columns = colums,
      this.iid = itemInfo.iid,
      this.services = services,
      this.realPrice = itemInfo.lowNowPrice
  }
}
export class Shop {
  constructor(shioInfo) {
    this.logo = shioInfo.shioLogo;
    this.name = shioInfo.name;
    this.fans = shioInfo.cFans;
    this.sells = shioInfo.cSells;
    this.score = shioInfo.score;
    this.goodCount = shioInfo.cGoods
    this.realPrice = shioInfo.lowNowPrice
  }
}
export class GoodsParam {
  constructor(info, rule) {
    //image可能没用值
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

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
export class Goods {
  constructor(itemInfo, colums, services) {
    console.log(itemInfo);

    this.title = itemInfo.title,
      this.desc = itemInfo.desc,
      this.newPrice = itemInfo.newPrice,
      this.oldPrice = itemInfo.oldPrice,
      this.discount = itemInfo.discount,
      this.columns = colums,
      this.services = services,
      this.realPrice = itemInfo.realPrice
  }
}

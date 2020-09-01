import {
  request
} from "./request"

export function getdetail(iid) {
  console.log("asdsadsd");
  return request({
    url: "/detail",
    params: {
      iid
    }
  })
}

export function getHomeMultidata() {
  return request({
    url: "home/multidata"
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: "home/data",
    params: {
      type,
      page
    }
  })
}

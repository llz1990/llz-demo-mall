import { request } from '../network/request';

function getMultiData() {
  return request({
    url: '/home/multidata'
  })
}

function getGoodsData(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}

export { getMultiData, getGoodsData }
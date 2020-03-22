import request from '../network/request';

export function getMultiData () {
    return request({
      url: '/home/multidata'
    })
  }
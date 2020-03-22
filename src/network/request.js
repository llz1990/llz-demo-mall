import axios from 'axios'


/**
 * 封装 http 请求的方法
 * @param {*} options 表示传入的路由路径
 */
export default function (options) {
  return new Promise((resolve, reject) => {
    // 1.创建axios的实例对象
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000/api/wh',
      timeout: 5000
    })

    /**
     * 请求拦截器
     */
    instance.interceptors.request.use(req => {
      return req    // 请求拦截器的返回
    })

    /**
     * 返回拦截器
     */
    instance.interceptors.response.use(res => {
      return res.data
    })

    // 通过实例发送网络请求
    instance(options).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
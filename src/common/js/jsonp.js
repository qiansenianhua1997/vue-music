import originJsonp from 'jsonp'

export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
    // jsonp(url, opts, fn) opts--》string类型 fn---》回调函数
  })
}

export function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
    // encodeURIComponent 将字符串作为url组件进行编码
  }
  return url ? url.substring(1) : ''
  // substring 字符串的截取，从当前位置向后截取
}

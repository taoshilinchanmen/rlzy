import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/sys/login',
    method: 'POST',
    // post传参用data
    data
  })
}

export function getInfo(token) {

}

export function logout() {

}

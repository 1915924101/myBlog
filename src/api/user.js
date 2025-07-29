import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/users/login',
    method: 'post',
    data
  })
}

export function getInfo(data) {
  return request({
    url: '/users/info',
    method: 'get',
    params:data
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

export function register(data) {
  return request({
    url: '/users/register',
    method: 'post',
    data
  })
}
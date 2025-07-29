import request from '@/utils/request'

export function upload(data) {
  return request({
    url: '/article/upload',
    method: 'post',
    data
  })
}
export function getArticleList(data) {
  return request({
    url: '/article/list',
    method: 'post',
    data
  })
}
export function getClassifyList(data) {
  return request({
    url: '/classify/list',
    method: 'get',
    params:data
  })
}
export function getTagsList(data) {
  return request({
    url: '/tag/list',
    method: 'get',
    params:data
  })
}
export function addArticle(data) {
  return request({
    url: '/article/add',
    method: 'post',
    data
  })
}
export function editArticle(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}
export function addView(data) {
  return request({
    url: '/article/view',
    method: 'post',
    data
  })
}
export function addLike(data) {
  return request({
    url: '/article/like',
    method: 'post',
    data
  })
}
export function delArticle(data) {
  return request({
    url: '/article/delete',
    method: 'post',
    data
  })
}
export function articleDetail(data) {
  return request({
    url: '/article/detail',
    method: 'post',
    data
  })
}
export function delClass(data) {
  return request({
    url: '/classify/delete',
    method: 'post',
    data
  })
}
export function addClass(data) {
  return request({
    url: '/classify/add',
    method: 'post',
    data
  })
}
export function editClass(data) {
  return request({
    url: '/classify/update',
    method: 'post',
    data
  })
}
export function addTag(data) {
  return request({
    url: '/tag/add',
    method: 'post',
    data
  })
}
export function editTag(data) {
  return request({
    url: '/tag/update',
    method: 'post',
    data
  })
}
export function delTag(data) {
  return request({
    url: '/tag/delete',
    method: 'post',
    data
  })
}
import request from '@/utils/request'

export function search (keyword, sortType, page) {
  return request({
    url: '/api/search/magnet',
    method: 'get',
    params: {
      keyword: keyword,
      sort: sortType,
      page: page
    }
  })
}
export function detail (hash) {
  return request({
    url: '/api/search/magnet/' + hash,
    method: 'get'
  })
}

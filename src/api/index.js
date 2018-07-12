import request from '@/utils/request'

export function search (keyword, page) {
  return request({
    url: '/api/search/magnet',
    method: 'get',
    params: {
      keyword: keyword,
      page: 1
    }
  })
}

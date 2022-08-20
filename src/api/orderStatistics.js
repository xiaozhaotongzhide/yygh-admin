import request from '@/utils/request'

const api_name = '/admin/sta'

export default {

  getCountMap(searchObj) {
    return request({
      url: `${api_name}/getCountMap`,
      method: 'get',
      params: searchObj
    })
  },
  getAmount(searchObj) {
    return request({
      url: `${api_name}/getAmount`,
      method: 'get',
      params: searchObj
    })
  },
  getCpu() {
    return request({
      url: `${api_name}/getCpu`,
      method: 'get'
    })
  },
  getRam() {
    return request({
      url: `${api_name}/getRam`,
      method: 'get'
    })
  }
}

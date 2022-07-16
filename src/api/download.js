import request from '@/utils/request'

const api_name = '/admin/oss'

export default {

  postDownload(searchObj) {
    return request({
      url: `${api_name}/postDownload`,
      method: 'post',
      params: searchObj
    })
  },
  getAmount(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  }
}

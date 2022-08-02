import request from '@/utils/request'

export default {

  chatList(page, limit, serchObj) {
    return request({
      url: `admin/chat/list/${page}/${limit}`,
      method: 'get',
      params: serchObj
    })
  }
}

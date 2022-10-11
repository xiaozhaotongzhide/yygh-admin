import request from '@/utils/request'

export default {

  actList() {
    return request({
      url: `admin/act/list`,
      method: 'get'
    })
  },
  getCoupon(id) {
    return request({
      url: `admin/act/getCoupon/${id}`,
      method: 'get'
    })
  },
  saveCouponAdmin(couponAdmin) {
    return request({
      url: `admin/act/saveCouponAdmin`,
      method: 'post',
      data: couponAdmin
    })
  },
  updateCouponAdmin(couponAdmin) {
    return request({
      url: `admin/act/updateCouponAdmin`,
      method: 'post',
      data: couponAdmin
    })
  },
  createTask(signTaskAdmin) {
    return request({
      url: `admin/act/createTask`,
      method: 'post',
      data: signTaskAdmin
    })
  },
  updateTask(signTaskAdmin) {
    return request({
      url: `admin/act/updateTask`,
      method: 'post',
      data: signTaskAdmin
    })
  },
  getList() {
    return request({
      url: `admin/act/getList`,
      method: 'get'
    })
  },
  getListUser() {
    return request({
      url: `api/act/getListUser`,
      method: 'get'
    })
  }
}

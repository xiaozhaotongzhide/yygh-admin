import request from '@/utils/request'

export default {
  //医院设置列表方法
  getList(current, limit, searchObj) {
    return request({
      url: `/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`,
      method: 'post',
      data: searchObj // 使用json形式进行传递
    })
  },
  //删除医院设置方法
  deleteHospSet(id) {
    return request({
      url: `/admin/hosp/hospitalSet/${id}`,
      method: 'delete',
    })
  },
  //批量删除
  batchHospSet(idList) {
    return request({
      url: `/admin/hosp/hospitalSet/batchRemoveHospitalSet`,
      method: 'delete',
      data: idList //使用json形式进行传递
    })
  },

  //锁定和解锁
  lockHospSet(id, staus) {
    return request({
      url: `/admin/hosp/hospitalSet/lockHospitalSet/${id}/${staus}`,
      method: 'put',
    })
  },

  //添加医院设置
  saveHospSet(hospSet) {
    return request({
      url: `/admin/hosp/hospitalSet/saveHospitalSet`,
      method: 'post',
      data: hospSet
    })
  },
  //院设置id查询
  getHospSet(id) {
    return request({
      url: `/admin/hosp/hospitalSet/getHospitalSet/${id}`,
      method: 'get'
    })
  },
  //修改医院设置
  updateHospSet(hospitalSet) {
    return request({
      url: `/admin/hosp/hospitalSet/updateHospitalSet`,
      method: 'post',
      data: hospitalSet
    })
  }


}


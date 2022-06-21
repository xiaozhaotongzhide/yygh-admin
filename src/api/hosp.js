import request from '@/utils/request'

export default {
  //医院设置列表方法
  getList(page, limit, searchObj) {
    return request({
      url: `/admin/hosp/hospital/list/${page}/${limit}`,
      method: 'get',
      params: searchObj // 使用json形式进行传递
    })
  },
  //根据dictcode查询相关子结点(所有省)
  findByDictCode(dictCode) {
    return request({
      url: `/admin/cmn/dict/findDictCode/${dictCode}`,
      method: 'get'
    })
  },
  findChildId(id) {
    return request({
      url: `/admin/cmn/dict/findChildData/${id}`,
      method: 'get'
    })
  },
  //更新状态
  updateStatus(id, status) {
    return request({
      url: `/admin/hosp/hospital/updateHospSttatus/${id}/${status}`,
      method: 'get'
    })
  },
  //查看医院详情
  getHospById(id) {
    return request({
      url: `/admin/hosp/hospital/showHospDetail/${id}`,
      method: 'get'
    })
  },
  //查看科室详情
  getschedule(hoscode) {
    return request({
      //GET /admin/hosp/department/getDeptList/{hoscode}
      url: `/admin/hosp/department/getDeptList/${hoscode}`,
      method: 'get'
    })
  },
  //查询预约规则
  getScheduleRule(page, limit, hoscode, depcode){
    return request({
      url: `/admin/hosp/schedule/getScheduleRule/${page}/${limit}/${hoscode}/${depcode}`,
      method: 'get'
    })
  },
  //查询排班详情
  getScheduleDetail(hoscode,depcode,workDate){
    return request({
      url: `/admin/hosp/schedule/getScheduleDetail/${hoscode}/${depcode}/${workDate}`,
      method: 'get'
    })
  }

}


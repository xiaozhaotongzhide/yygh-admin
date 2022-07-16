<template>
  <div class="app-container">
    <!--表单-->
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="searchObj.hosname" placeholder="点击输入医院名称"/>
      </el-form-item>

      <el-form-item>
        <el-date-picker
          v-model="searchObj.downloadDateBegin"
          type="date"
          placeholder="选择开始日期"
          value-format="yyyy-MM-dd"/>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="searchObj.downloadDateEnd"
          type="date"
          placeholder="选择截止日期"
          value-format="yyyy-MM-dd"/>
      </el-form-item>
      <el-button
        :disabled="btnDisabled"
        type="primary"
        icon="el-icon-search"
        @click="showChart()">下载</el-button>
    </el-form>

  </div>
</template>

<script>

import downloadApi from '@/api/download'

export default {

  data() {
    return {
      searchObj: {
        hosname: '',
        downloadDateBegin: '',
        downloadDateEnd: ''
      },
      btnDisabled: false,
      chart: null,
      title: '',
      xData: [], // x轴数据
      yData: [] // y轴数据
    }
  },

  methods: {
    showChart() {
      downloadApi.postDownload(this.searchObj)
    }
  }
}
</script>

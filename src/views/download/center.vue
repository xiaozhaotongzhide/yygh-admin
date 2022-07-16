<template>
  <div class="app-container">
    <!--查询表单-->
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="searchObj.keyword" placeholder="医院名称"/>
      </el-form-item>

      <el-form-item label="创建时间">
        <el-date-picker
          v-model="searchObj.createTimeBegin"
          type="datetime"
          placeholder="选择开始时间"
          value-format="yyyy-MM-dd HH:mm:ss"
          default-time="00:00:00"
        />
      </el-form-item>
      至
      <el-form-item>
        <el-date-picker
          v-model="searchObj.createTimeEnd"
          type="datetime"
          placeholder="选择截止时间"
          value-format="yyyy-MM-dd HH:mm:ss"
          default-time="00:00:00"
        />
      </el-form-item>

      <el-button type="primary" icon="el-icon-search" @click="fetchData()">查询</el-button>
      <el-button type="default" @click="resetData()">清空</el-button>
    </el-form>

    <!-- 列表 -->
    <el-table
      v-loading="listLoading"
      :data="list"
      stripe
      style="width: 100%">

      <el-table-column
        label="序号"
        width="70"
        align="center">
        <template slot-scope="scope">
          {{ (page - 1) * limit + scope.$index + 1 }}
        </template>
      </el-table-column>

      <el-table-column prop="hosname" label="医院名称"/>
      <el-table-column prop="downloadDateBegin" label="下载开始时间"/>
      <el-table-column prop="downloadDateEnd" label="下载结束时间"/>
      <el-table-column prop="fileUrl" label="文件连接">
        <template slot-scope="scope">
          <a link :href="scope.row.fileUrl" target="_blank">
            <el-button type="primary" size="mini">下载文件</el-button>
          </a>
        </template>
      </el-table-column>
      <el-table-column :formatter="Formatter" prop="status" label="下载状态"/>
    </el-table>

    <!-- 分页组件 -->
    <el-pagination
      :current-page="page"
      :total="total"
      :page-size="limit"
      :page-sizes="[5, 10, 20, 30, 40, 50, 100]"
      style="padding: 30px 0; text-align: center;"
      layout="sizes, prev, pager, next, jumper, ->, total, slot"
      @current-change="fetchData"
      @size-change="changeSize"
    />
  </div>
</template>
<script>

import downloadApi from '@/api/download'

export default {
  // 定义数据
  data() {
    return {
      listLoading: true, // 数据是否正在加载
      list: null, // banner列表
      total: 0, // 数据库中的总记录数
      page: 1, // 默认页码
      limit: 10, // 每页记录数
      searchObj: {} // 查询表单对象
    }
  },
  // 当页面加载时获取数据
  created() {
    this.fetchData()
  },
  methods: {
    Formatter(row) {
      if (row.status === 0) {
        return '没有上传'
      } else if (row.status === 1) {
        return '上传成功'
      } else if (row.status === 2) {
        return '上传失败'
      }
    },
    // 调用api层获取数据库中的数据
    fetchData(page = 1) {
      console.log('翻页。。。' + page)
      // 异步获取远程数据（ajax）
      this.page = page
      downloadApi.getAmount(this.page, this.limit, this.searchObj).then(
        response => {
          this.list = response.data.records
          this.total = response.data.total
          // 数据加载并绑定成功
          this.listLoading = false
        }
      )
    },
    // 当页码发生改变的时候
    changeSize(size) {
      console.log(size)
      this.limit = size
      this.fetchData(1)
    },
    // 重置查询表单
    resetData() {
      console.log('重置查询表单')
      this.searchObj = {}
      this.fetchData()
    }
  }
}
</script>

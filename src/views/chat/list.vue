<template>
  <div class="app-container">
    聊天记录
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="serchObj.userName" placeholder="用户名称"/>
      </el-form-item>
      <el-button type="primary" icon="el-icon-search" @click="getList()">查询</el-button>
    </el-form>

    <el-table :data="list" stripe style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column prop="userName" label="用户名称"/>
      <el-table-column prop="msg" label="聊天内容" width="1000"/>
      <el-table-column prop="createTime" label="聊天时间"/>
    </el-table>
    <el-pagination
      :current-page="page"
      :page-size="limit"
      :total="total"
      style="padding: 30px 0; text-align: center"
      layout="total, prev, pager, next, jumper"
      @current-change="getList"/>
  </div>
</template>

<script>
// 引入接口定义的js文件
import chatApi from '@/api/chat'

export default {
  data() {
    return {
      current: 1, // 当前页
      limit: 3, // 一个页显示的记录数
      serchObj: {}, // 条件封装对象
      list: [], // 每页数据集合
      total: 0,
      multipleSelection: [] // 批量选择中选择的记录列表
    }
  },

  methods: {

    handleSelectionChange(selection) {
      this.multipleSelection = selection
    },
    getList(page = 1) {
      this.current = page
      chatApi.chatList(this.current, this.limit, this.serchObj)
        .then((Response) => {
          this.list = Response.data.content
          this.total = Response.data.total
        }) //请求成功
        .catch((error) => {
          console.log(error)
        })
    }

  }
}
</script>

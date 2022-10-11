<template>
  <div class="app-container">
    购物券设置列表

    <el-table :data="list" stripe style="width: 100%">
      <el-table-column type="index" width="50" label="序号"/>
      <el-table-column prop="id" label="任务id"/>
      <el-table-column prop="couponId" label="购物券id"/>
      <el-table-column prop="inventory" label="库存"/>
      <el-table-column prop="details" label="详情"/>
      <el-table-column type="date" prop="startTime" label="优惠券开始时间"/>
      <el-table-column type="date" prop="endTime" label="优惠券结束时间"/>

      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <router-link :to="'/act/sign/'+scope.row.id">
            <el-button type="primary" size="mini" icon="el-icon-edit"/>
          </router-link>
        </template>
      </el-table-column>
      <el-pagination
        :current-page="page"
        :page-size="limit"
        :total="total"
        style="padding: 30px 0; text-align: center"
        layout="total, prev, pager, next, jumper"
        @current-change="getList"
      />
    </el-table>
  </div>
</template>

<script>
// 引入接口定义的js文件
import act from '@/api/act'

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
  created() {
    this.getList()
  },
  methods: {
    lockHostSet(id, status) {
      act.lockHospSet(id, status).then((response) => {
        this.getList()
      })
    },

    handleSelectionChange(selection) {
      this.multipleSelection = selection
    },
    getList(page = 1) {
      this.current = page
      act.getList()
        .then((Response) => {
          this.list = Response.data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>


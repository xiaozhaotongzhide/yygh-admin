<template>
  <div class="app-container">
    购物券设置列表

    <el-table :data="list" stripe style="width: 100%">
      <el-table-column type="index" width="50" label="序号"/>
      <el-table-column prop="id" label="购物券id"/>
      <el-table-column prop="inventory" label="库存"/>
      <el-table-column prop="details" label="详情"/>
      <el-table-column type="date" prop="startTime" label="优惠券开始时间"/>
      <el-table-column type="date" prop="endTime" label="优惠券结束时间"/>

      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <router-link :to="'/act/edit/'+scope.row.id">
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
    //定义方法进行请求接口调用
    getList(page = 1) {
      this.current = page
      act.actList()
        .then((Response) => {
          //response是接口返回数据
          //返回值赋值给list
          this.list = Response.data.records
          //总记录数
          this.total = Response.data.total
        }) //请求成功
        .catch((error) => {
          console.log(error)
        }) //请求失败
    },

    //删除医院设置的方法
    removeDataById(id) {
      this.$confirm('此操作将永久删除医院是设置信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        //确定执行then方法
        //调用接口
        hospset.deleteHospSet(id).then((response) => {
          //提示
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          //刷新页面
          this.getList(1)
        })
      })
    },

    //批量删除
    removeRows() {
      this.$confirm('此操作将永久删除医院是设置信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var idList = []
        for (var i = 0; i < this.multipleSelection.length; i++) {
          var obj = this.multipleSelection[i]
          var id = obj.id
          idList.push(id)
        }
        act.batchHospSet(idList)
          .then((response) => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.getList(1)
          })
          .catch((err) => {
            console.log(err)
          })
      })
    }
  }
}
</script>


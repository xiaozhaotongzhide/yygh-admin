<template>
  <div class="app-container">购物券设置添加
    <el-form label-width="120px">
      <el-form-item label="库存">
        <el-input v-model="CouponAdmin.inventory"/>
      </el-form-item>

      <el-form-item label="详情">
        <el-input v-model="CouponAdmin.details"/>
      </el-form-item>

      <el-form-item label="优惠券开始时间">
        <el-input v-model="CouponAdmin.startTime" type="date"/>
      </el-form-item>
      <el-form-item label="优惠券结束时间">
        <el-input v-model="CouponAdmin.endTime" type="date"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="saveOrUpdate">保存</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>
<script>
import act from '@/api/act'

export default {
  data() {
    return {
      CouponAdmin: {}
    }
  },
  created() { // 页面渲染之前执行
    // 获取路由id值
    // 调用接口得到医院设置信息
    if (this.$route.params && this.$route.params.id) {
      const id = this.$route.params.id
      this.getHostSet(id)
    } else {
      // 表单数据清空
      this.CouponAdmin = {}
    }
  },
  methods: {
    // 根据id查询
    getHostSet(id) {
      act.getCoupon(id)
        .then(response => {
          this.CouponAdmin = response.data
        })
    },
    // 添加
    save() {
      act.saveCouponAdmin(this.CouponAdmin)
        .then(response => {
          // 提示
          this.$message({
            type: 'success',
            message: '添加成功!'
          })
          // 跳转列表页面，使用路由跳转方式实现
          this.$router.push({ path: '/act/coupon' })
        })
    },
    // 修改
    update() {
      act.updateCouponAdmin(this.CouponAdmin)
        .then(response => {
          // 提示
          this.$message({
            type: 'success',
            message: '修改成功!'
          })
          // 跳转列表页面，使用路由跳转方式实现
          this.$router.push({ path: '/act/coupon' })
        })
    },
    saveOrUpdate() {
      // 判断添加还是修改
      if (!this.CouponAdmin.id) { // 没有id，做添加
        this.save()
      } else { // 修改
        this.update()
      }
    }
  }
}
</script>

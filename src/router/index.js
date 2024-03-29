import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/hospSet',
    component: Layout,
    redirect: '/example/table',
    name: '医院设置管理',
    meta: { title: '医院设置管理', icon: 'example' },
    children: [
      {
        path: 'list',
        name: '医院设置列表',
        component: () => import('@/views/hospset/list'),
        meta: { title: '医院设置列表', icon: 'table' }
      },
      {
        path: 'add',
        name: '医院设置添加',
        component: () => import('@/views/hospset/add'),
        meta: { title: '医院设置添加', icon: 'tree' }
      },
      {
        path: 'edit/:id',
        name: 'EduTeacherEdit',
        component: () => import('@/views/hospset/add'),
        meta: { title: '编辑', noCache: true },
        hidden: true
      },
      {
        path: 'hosp/list',
        name: '医院列表',
        component: () => import('@/views/hosp/list'),
        meta: { title: '医院列表', icon: 'table' }
      },
      {
        path: 'hospital/show/:id',
        name: '查看',
        component: () => import('@/views/hosp/show'),
        meta: { title: '查看', noCache: true },
        hidden: true
      },
      {
        path: 'hospital/schedule/:hoscode',
        name: '排班',
        component: () => import('@/views/hosp/schedule'),
        meta: { title: '排班', noCache: true },
        hidden: true
      }
    ]
  },

  {
    path: '/cmn',
    component: Layout,
    redirect: '/cmn/list',
    name: '数据管理',
    alwaysShow: true,
    meta: { title: '数据管理', icon: 'example' },
    children: [
      {
        path: 'list',
        name: '数据字典',
        component: () => import('@/views/dict/list'),
        meta: { title: '数据字典', icon: 'table' }
      }
    ]
  },

  {
    path: '/user',
    component: Layout,
    redirect: '/user/userInfo/list',
    name: 'userInfo',
    meta: { title: '用户管理', icon: 'table' },
    alwaysShow: true,
    children: [
      {
        path: 'userInfo/list',
        name: '用户列表',
        component: () => import('@/views/user/userInfo/list'),
        meta: { title: '用户列表', icon: 'table' }
      },
      {
        path: 'userInfo/show/:id',
        name: '用户查看',
        component: () => import('@/views/user/userInfo/show'),
        meta: { title: '用户查看' },
        hidden: true
      },
      {
        path: 'userInfo/authList',
        name: '认证审批列表',
        component: () => import('@/views/user/userInfo/authList'),
        meta: { title: '认证审批列表', icon: 'table' }
      }

    ]
  },
  {
    path: '/statistics',
    component: Layout,
    redirect: '/statistics/order/index',
    name: 'BasesInfo',
    meta: { title: '统计管理', icon: 'table' },
    alwaysShow: true,
    children: [
      {
        path: 'order/index',
        name: '预约统计',
        component: () => import('@/views/statistics/order/index'),
        meta: { title: '预约统计' }
      },
      {
        path: 'order/pay',
        name: '支付统计',
        component: () => import('@/views/statistics/order/amount'),
        meta: { title: '支付统计' }
      }
    ]
  },
  {
    path: '/download',
    component: Layout,
    redirect: '/download',
    name: 'BasesInfo',
    meta: { title: '查询下载', icon: 'table' },
    alwaysShow: true,
    children: [
      {
        path: 'index',
        name: '查询日报',
        component: () => import('@/views/download/index'),
        meta: { title: '查询日报' }
      },
      {
        path: 'center',
        name: '下载中心',
        component: () => import('@/views/download/center'),
        meta: { title: '下载中心' }
      }
    ]
  },
  {
    path: '/chat',
    component: Layout,
    redirect: '/chat',
    name: 'BasesInfo',
    meta: { title: '客服中心', icon: 'table' },
    alwaysShow: true,
    children: [
      {
        path: 'index',
        name: '客服管理',
        component: () => import('@/views/chat/index'),
        meta: { title: '客服管理' }
      },
      {
        path: 'center',
        name: '聊天记录',
        component: () => import('@/views/chat/list'),
        meta: { title: '聊天记录' }
      }
    ]
  },
  {
    path: '/actuator',
    component: Layout,
    redirect: '/actuator',
    name: 'BasesInfo',
    meta: { title: '监测中心', icon: 'table' },
    alwaysShow: true,
    children: [
      {
        path: 'cpu',
        name: 'CPU监测',
        component: () => import('@/views/statistics/actuator/cpu'),
        meta: { title: 'CPU监测' }
      },
      {
        path: 'ram',
        name: '内存监测',
        component: () => import('@/views/statistics/actuator/ram'),
        meta: { title: '内存监测' }
      }
    ]
  },
  {
    path: '/act',
    component: Layout,
    redirect: '/act',
    name: 'BasesInfo',
    meta: { title: '活动中心', icon: 'table' },
    alwaysShow: true,
    children: [
      {
        path: 'coupon',
        name: '购物券管理',
        component: () => import('@/views/act/coupon/list'),
        meta: { title: '购物券管理' }
      },
      {
        path: 'add',
        name: '购物券添加',
        component: () => import('@/views/act/coupon/add'),
        meta: { title: '购物券添加' }
      },
      {
        path: 'task',
        name: '任务管理',
        component: () => import('@/views/act/sign/list'),
        meta: { title: '任务管理' }
      },
      {
        path: 'signAdd',
        name: '签到添加',
        component: () => import('@/views/act/sign/add'),
        meta: { title: '签到添加' }
      },
      {
        path: 'userList',
        name: '活动订单列表',
        component: () => import('@/views/act/user/list'),
        meta: { title: '活动订单列表' }
      },
      {
        path: 'edit/:id',
        name: 'EduTeacherEdit',
        component: () => import('@/views/act/coupon/add'),
        meta: { title: '编辑', noCache: true },
        hidden: true
      },
      {
        path: 'sign/:id',
        name: 'EduTeacherEdit',
        component: () => import('@/views/act/sign/add'),
        meta: { title: '编辑', noCache: true },
        hidden: true
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

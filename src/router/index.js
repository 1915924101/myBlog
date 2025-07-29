import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: the official documentation for router and nav
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/',
    redirect:'/main',
    component: () => import('@/views/index/index'),
    hidden: true,
    children:[
      {
        path: 'main',
        name: 'Main',
        component: () => import('@/views/index/main')
      },
      {
        path: 'searchList',
        name: 'SearchList',
        component: () => import('@/views/index/searchList')
      },
      {
        path: 'detail',
        name: 'Detail',
        component: () => import('@/views/index/detail')
      },
      {
        path: 'goChess',
        name: 'GoChess',
        component: () => import('@/views/index/goChess')
      },
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/index',
    component: Layout,
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/article',
    component: Layout,
    redirect: '/article/list',
    name: 'Article',
    meta: { title: '文章管理', icon: 'el-icon-notebook-2' },
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/article/index'),
        meta: { title: '文章', icon: 'el-icon-notebook-2' }
      }
    ]
  },
  {
    path: '/classify',
    component: Layout,
    redirect: '/classify/list',
    name: 'Classify',
    meta: { title: '分类管理', icon: 'el-icon-menu' },
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/classify/index'),
        meta: { title: '分类管理', icon: 'el-icon-menu' }
      }
    ]
  },
  {
    path: '/tags',
    component: Layout,
    redirect: '/tags/list',
    name: 'Tags',
    meta: { title: '标签管理', icon: 'el-icon-price-tag' },
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/tags/index'),
        meta: { title: '标签管理', icon: 'el-icon-price-tag' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

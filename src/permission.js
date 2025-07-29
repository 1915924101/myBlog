import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login','/','/main','/searchList','/detail','/goChess'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  if (to.path === from.path) {
    // 如果目标路由和当前路由相同，不进行跳转
    return;
  }
  next();
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()
  if (hasToken) {
    // console.log('走得1111111111');
    if (to.path === '/login') {
      // console.log('redirect to the home page');
      // if is logged in, redirect to the home page
      next({ path: '/index' })
      NProgress.done()
    } else {
      // console.log('redirect to the getInfo');
      const hasGetUserInfo = store.getters.name
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          // get user info
          await store.dispatch('user/getInfo')

          next('/index')
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/
    // console.log('走得222222');
    if (whiteList.indexOf(to.path) !== -1) {
      // console.log('走得白名单');
      // in the free login whitelist, go directly
      next()
      NProgress.done()
    } else {
      // console.log('*****************');
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})

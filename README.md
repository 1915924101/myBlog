

## 项目简介

Vue Admin Template 是一个基于 Vue.js 和 Element UI 的轻量级后台管理系统模板。它提供了基本的权限控制、路由管理、网络请求封装等功能，适合作为中后台系统的基础框架进行二次开发。

**主要特性：**
- 基于 Vue.js 和 Element UI 构建
- 响应式布局，适配各种屏幕尺寸
- 完善的权限控制体系
- 简洁的路由配置
- 网络请求封装
- 代码规范与格式化


#后端代码地址
https://github.com/1915924101/myBlog-nest-serve.git

# 安装依赖
npm install

# 开发环境运行
npm run dev
```

运行后会自动打开 http://localhost:9528

## 构建生产环境

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 高级用法

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```

## 使用示例

### 基本布局

系统采用经典的后台布局，包含侧边栏、顶部导航栏和主内容区。

### 路由配置

路由配置位于 `src/router/index.js` 文件中，支持嵌套路由、动态路由和权限控制。

```javascript
// src/router/index.js
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index'
import Dashboard from '@/views/dashboard/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login,
      hidden: true
    },
    {
      path: '/',
      redirect: '/dashboard',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
          meta: { title: '首页', icon: 'dashboard' }
        }
      ]
    }
  ]
})
```

### 网络请求

使用封装后的 axios 进行网络请求，位于 `src/utils/request.js`。

```javascript
// src/utils/request.js
import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 可以在这里添加token等信息
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service
```

### 权限控制

权限控制通过路由元信息和全局导航守卫实现。

```javascript
// src/permission.js
import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('user/getInfo').then(res => {
          const roles = res.roles
          store.dispatch('permission/generateRoutes', { roles }).then(accessRoutes => {
            router.addRoutes(accessRoutes)
            next({ ...to, replace: true })
          })
        }).catch(err => {
          store.dispatch('user/resetToken').then(() => {
            Message.error(err || 'Has Error')
            next(`/login?redirect=${to.path}`)
            NProgress.done()
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
```

Refer to the official documentation for more information

## Demo

![demo](https://example.com/demo.gif)

## Extra

If you want router permission && generate menu by user roles, you can use the permission-control branch

For `typescript` version, you can use [vue-typescript-admin-template](https://github.com/Armour/vue-typescript-admin-template) (Credits: [@Armour](https://github.com/Armour))

## Related Project

- vue-element-admin
- electron-vue-admin
- vue-typescript-admin-template
- awesome-project

## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions

## 贡献指南

欢迎对本项目进行贡献！如果你有任何建议或发现了bug，请通过以下方式参与贡献：

1. 提交 Issue：报告bug或提出功能建议
2. 提交 Pull Request：修复bug或实现新功能

### 提交 Issue

- 请确保 Issue 描述清晰，包含必要的信息（如环境、复现步骤等）
- 请搜索现有 Issue，避免重复提交

### 提交 Pull Request

1. Fork 本仓库
2. 创建新分支（`git checkout -b feature/your-feature`）
3. 提交修改（`git commit -am 'Add some feature'`）
4. 推送到分支（`git push origin feature/your-feature`）
5. 创建新的 Pull Request

### 代码规范

- 遵循项目中的代码风格
- 使用 ESLint 进行代码检查
- 确保代码注释清晰


<template>
  <div class="content">
    <!-- <canvas ref="canvas" class="canvas"></canvas> -->
    <!-- <img
      src="@/assets/flower.png"
      style="display: none"
      id="images"
      alt=""
      srcset=""
    /> -->
    <header class="head flex justify-between" v-if="$route.name!=='GoChess'">
     
        <div class="flex align-center">
          <img src="@/assets/head.png" class="logo" alt="" />
          <span class="site-name">小 珂 的博客</span>
        </div>
        <div class="links flex align-center"  v-if="windowWidth> 768">
          <nav class="nav-links can-hide">
            <div class="nav-item">
              <a
                href="/"
                aria-current="page"
                class="nav-link router-link-exact-active router-link-active"
                >
                首页
              </a>
            </div>
            <div class="nav-item">
              <div class="dropdown-wrapper" @mouseleave="showBlog=false">
                <a class="dropdown-title" @mouseenter="showBlog=true"
                  ><span class="title"
                    ><i class="iconfont el-icon-menu"></i>
                    博客
                  </span>
                  <i class="iconfont el-icon-caret-bottom"></i
                ></a>
                <ul class="nav-dropdown" v-show="showBlog">
                  <li class="dropdown-item" v-for="item in classList" :key="item.id" @click="goSearch(item,1)">
                    <!---->
                    <a class="nav-link"
                      ><i class="undefined"></i>
                      {{item.label}}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="nav-item">
              <div class="dropdown-wrapper" @mouseleave="showMy=false">
                <a class="dropdown-title"  @mouseenter="showMy=true"
                  ><span class="title"
                    ><i class="undefined"></i>
                    我的
                  </span>
                  <i class="iconfont el-icon-caret-bottom"></i
                ></a>
                <ul class="nav-dropdown"  v-show="showMy">
                  <li class="dropdown-item">
                    <!---->
                    <a
                      href="https://juejin.cn/user/1530981210663342"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="nav-link external"
                      ><i class="undefined"></i>
                      掘金
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          focusable="false"
                          x="0px"
                          y="0px"
                          viewBox="0 0 100 100"
                          width="15"
                          height="15"
                          class="icon outbound"
                        >
                          <path
                            fill="currentColor"
                            d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                          ></path>
                          <polygon
                            fill="currentColor"
                            points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                          ></polygon>
                        </svg>
                        </span
                      ></a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="nav-item">
              <a class="nav-link" @click="goTag"
                ><i class="iconfont el-icon-price-tag"></i>
                Tag
              </a>
            </div>
            <div class="nav-item">
              <a
                href="https://www.baidu.com"
                target="_blank"
                rel="noopener noreferrer"
                class="nav-link external"
                ><i class="undefined"></i>
                百度
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    width="15"
                    height="15"
                    class="icon outbound"
                  >
                    <path
                      fill="currentColor"
                      d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                    ></path>
                    <polygon
                      fill="currentColor"
                      points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                    ></polygon>
                  </svg> </span
              ></a>
            </div>
            <div class="nav-item" @click="goChess">
              <a>围棋测试</a>
            </div>
            <div class="nav-item">
              <a
                href="https://meiriyiwen.com"
                target="_blank"
                rel="noopener noreferrer"
                class="nav-link external"
                ><i class="undefined"></i>
                每日一文
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    width="15"
                    height="15"
                    class="icon outbound"
                  >
                    <path
                      fill="currentColor"
                      d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                    ></path>
                    <polygon
                      fill="currentColor"
                      points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                    ></polygon>
                  </svg> </span
              ></a>
            </div>
            <div class="nav-item" @click="goLogin">
              <a>admin</a>
            </div>
            <!---->
          </nav>
        </div>
        <img src="@/assets/menu.png" v-else style="width:30px;height: 30px;" @click="drawer=true" alt="">
    </header>
    <router-view />
    <footer class="foot">
      <a href="https://beian.miit.gov.cn/" target="_blank">鲁ICP备2023014123号</a>
      <a style="margin-left: 20px;">©2023 小珂</a>
      <div>商务合作请联系邮箱:cd_lik@163.com</div>
    </footer>
    <!-- 遮罩层 -->
    <div v-show="drawer" @touchmove.prevent class="drawer-mask"></div>
    <el-drawer
      :modal="false"
      :visible.sync="drawer"
      :append-to-body="false"
      :withHeader="false"
      :show-close="false"
      size='75%'
      direction="rtl">
      <div class="aside">
        <img
            src="@/assets/head.png"
            style="width: 100px; height: 100px; border-radius: 50%"
            alt=""
          />
          <div class="num">
            <div class="nav-right">
              <div style="font-weight: 550; line-height: 1.25">{{total}}</div>
              <div style="font-size: 14px; margin-top: 10px">文章</div>
            </div>
            <div class="nav-right">
              <div style="font-weight: 550; line-height: 1.25">{{classList.length}}</div>
              <div style="font-size: 14px; margin-top: 10px">分类</div>
            </div>
            <!-- <el-divider direction="vertical"></el-divider> -->
            <div class="nav-right">
              <div style="font-weight: 550; line-height: 1.25">{{viewtotal>10000?(viewtotal/10000).toFixed(2)+'w':viewtotal}}</div>
              <div style="font-size: 14px; margin-top: 10px">浏览量</div>
            </div>
          </div>
          <el-divider content-position="center">小珂的博客</el-divider>
          <el-menu
            @select="selectMenu"
            style="width:72vw;background-color: #f6f8fa;"
            class="el-menu-vertical-demo">
            <el-menu-item index="1">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-order"></i>
                <span>博客</span>
              </template>
              <el-menu-item v-for="item in classList" :key="item.value || item.id" :index="(item.value || '').toString()">{{item.label}}</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span>我的</span>
              </template>
              <el-menu-item index="3-1">
                掘金
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="4">
              <i class="el-icon-price-tag"></i>
              <span slot="title">Tag</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-s-opportunity"></i>
              <span slot="title">每日一文</span>
            </el-menu-item>
          </el-menu>
      </div>
    </el-drawer>
  </div>
</template>
<script>
import {getClassifyList,getArticleList} from '@/api/index'
export default {
  data() {
    return {
      drawer: false,
      showBlog:false,
      showMy:false,
      classList:[],
      // 窗口宽度
      windowWidth: 0,
      total:'',
      viewtotal:'',
      route:''
    };
  },
  mounted() {
    this.route=this.$route
    // // 获取 canvas DOM 对象和 2D 上下文对象
    // const canvas = this.$refs.canvas;
    // const ctx = canvas.getContext("2d");
    // const imageUrl=document.getElementById("images")
    // // 异步加载樱花图片
    // this.sakuraImage = imageUrl;
    // this.sakuraImage.onload = () => {
    //   // 设置画布大小为窗口大小
    //   canvas.width = window.innerWidth - 5;
    //   canvas.height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);

    //   // 创建樱花对象
    //   class Sakura {
    //     constructor(x, y, size, speed) {
    //       this.x = x;
    //       this.y = y;
    //       this.size = size;
    //       this.speed = speed;
    //       this.imageUrl=document.getElementById("images")
    //       this.angle = Math.random() * Math.PI * 2; // 随机起始角度
    //       this.spin = (Math.random() - 0.5) * 0.1; // 随机旋转速度
    //     }

    //     // 更新樱花位置
    //     update() {
    //       this.y += this.speed;
    //       this.x -= this.speed;;
    //       this.angle += this.spin;

    //       // 检测是否超出画布范围
    //       if (this.y - this.size > canvas.height) {
    //         this.y = -this.size;
    //         this.x = Math.random() * canvas.width;
    //       }
    //     }

    //     // 在画布中绘制樱花
    //     draw() {
    //       ctx.save(); // 保存当前画布状态
    //       ctx.translate(this.x, this.y); // 平移到樱花位置
    //       ctx.rotate(this.angle); // 旋转樱花
    //       ctx.drawImage(
    //         this.imageUrl,
    //         -this.size / 2,
    //         -this.size / 2,
    //         this.size,
    //         this.size,
    //       ); // 绘制樱花图片
    //       ctx.restore(); // 恢复之前保存的画布状态
    //     }
    //   }

    //   // 创建多个樱花对象
    //   const sakuras = [];
    //   for (let i = 0; i < 50; i++) {
    //     sakuras.push(
    //       new Sakura(
    //         Math.random() * canvas.width,
    //         Math.random() * canvas.height,
    //         Math.random() * 30 + 20, // 随机大小
    //         1
    //       )
    //     );
    //   }

    //   // 动画循环
    //   function loop() {
    //     // 清空画布
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);

    //     // 更新并绘制所有樱花
    //     sakuras.forEach((sakura) => {
    //       sakura.update();
    //       sakura.draw();
    //     });

    //     // 请求下一帧动画
    //     requestAnimationFrame(loop);
    //   }

    //   // 开始动画
    //   loop();
    // };
    window.onscroll = () =>{
      // 处理滚动事件
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var pageHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      var windowHeight = window.innerHeight;
      if (scrollTop + windowHeight === pageHeight) {
        // 已经滚动到页面底部，需要加载新的内容
        // console.log('触底',this.nextPage);
        if(this.nextPage){
          this.page++
          this.fetchData();
        }else{
          // console.log('加载结束');
        }
        
      }
    };
  },
  created() {
     // 监听窗口宽度变化
     window.addEventListener('resize', this.handleResize);
    // 初始化窗口宽度
    this.handleResize();
  },
  mounted(){
    this.fetchData()
    setTimeout(() => {
      this.classData()
    }, 1000);
  },
  destroyed() {
    // 取消监听窗口宽度变化
    window.removeEventListener('resize', this.handleResize);
  },
  methods:{
    goChess(){
      this.$router.push({
            path:'/goChess',
        })
    },
    selectMenu(index,path){
      // console.log(index,path);
      this.drawer=false
      if(path[0]=='1'){
        this.$router.push({
            path:'/main',
        })
      }else if(path[0]=='2'){
        this.$router.push({
            path:'/searchList',
            query:{
                id:path[1]*1,
                type:1
            }
        })
      }else if(path[0]=='3'){
        location.href='https://juejin.cn/user/1530981210663342'
      }else if(path[0]=='4'){
        this.goTag()
      }else if(path[0]=='5'){
        location.href='https://meiriyiwen.com'
      }
    },
    fetchData() {
        let data={
          page:1,
          size:10,
          tagId:null,
          classId:null
        }
        getArticleList(data).then((res) => {
          // console.log(res, "文章列表");
          this.total=res.total
          this.viewtotal=res.viewtotal
        });
      },
    // 窗口宽度变化回调函数
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    goLogin(){
      this.$router.push('/login')
    },
    classData() {
      getClassifyList().then((res) => {
        // console.log(res, "分类列表7777777777");
        this.classList = res.data;
      });
    },
    goSearch(item,type){
        this.$router.push({
            path:'/searchList',
            query:{
                id:item.value,
                type:type
            }
        })
      },
      goTag(){
        this.$router.push({
            path:'/searchList',
            query:{
                id:'',
                type:2
            }
        })
      },
  }
};
</script>
<style scoped>
.content{
  background: #f7f9fe;
}
/* .canvas {
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
} */
.flex {
  display: flex;
  justify-content: center;
}

.justify-center {
  justify-content: center;
}

.justify-around {
  justify-content: space-around;
}

.justify-between {
  justify-content: space-between;
}

.align-center {
  align-items: center;
}

.head {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  right: 0;
  height: 3.6rem;
  box-sizing: border-box;
  padding: 0.7rem 1.5rem;
  line-height: 2.2rem;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  background: #ffffff;
}

.head .logo {
  height: 2.2rem;
  min-width: 2.2rem;
  margin-right: 0.8rem;
  border-radius: 50%;
}

.side-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: #242424;
}

.navbar .links {
  padding-left: 1.5rem;
  box-sizing: border-box;
  white-space: nowrap;
  font-size: 0.9rem;
  position: absolute;
  right: 1.5rem;
  top: 0.7rem;
  display: flex;
  background-color: #ffffff;
  color: #242424;
}

.search-box {
  display: inline-block;
  position: relative;
  margin-right: 1rem;
}

.search-box input:focus {
  cursor: auto;
  border-color: #3178c6;
}

.search-box .iconfont {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 0;
  left: 0.6rem;
  margin: auto;
  color: #7f7f7f;
  font-size: 13px;
  line-height: 34px;
}

.search-box input {
  cursor: text;
  width: 10rem;
  height: 2rem;
  color: #4e6e8e;
  display: inline-block;
  border: 1px solid #eaecef;
  border-radius: 0.25rem;
  font-size: 0.9rem;
  line-height: 2rem;
  padding: 0 0.5rem 0 2rem;
  outline: none;
  transition: all 0.2s ease;
  background: transparent;
  background-size: 1rem;
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-links .nav-item {
  position: relative;
  display: inline-block;
  margin-left: 1.5rem;
  line-height: 2rem;
}

.nav-links .nav-item:first-child {
  margin-left: 0;
}

.nav-links a.router-link-active,
.nav-links a.router-link-active .iconfont,
.nav-links a:hover,
.nav-links a:hover .iconfont {
  color: #3178c6;
}
ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
.dropdown-wrapper {
    height: 1.8rem;
    cursor: pointer;
}
.nav-dropdown{
  height: auto!important;
  box-sizing: border-box;
  max-height: calc(100vh - 2.7rem);
  overflow-y: auto;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #ffffff;
  padding: 0.6rem 0;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);;
  text-align: left;
  border-radius: 0.25rem;
  white-space: nowrap;
  margin: 0;
}
.dropdown-wrapper .nav-dropdown .dropdown-item a {
    display: block;
    line-height: 1.7rem;
    position: relative;
    border-bottom: none;
    font-weight: 400;
    margin-bottom: 0;
    padding: 0 1.5rem 0 1.25rem;
}
.foot{
  width: 100%;
  height: 80px;
  background: #f5f8fa;
  text-align: center;
  font-size: 12px;
  line-height: 14px;
  color: #999;
}
.foot a{
  display: inline-block;
  vertical-align: middle;
  margin-right: 15px;
  font-size: 12px;
  line-height: 14px;
  color: #999;
  white-space: nowrap;
  max-width: 1180px;
  margin: 20px auto;
}
.aside{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f8fa;
  padding: 50px 20px;
  box-sizing: border-box;
}
.num {
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .nav-right {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .drawer-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
</style>
<style>
@font-face {
    font-family: 'tzy';
    src:  url('https://npm.elemecdn.com/ethan4116-blog/lib/font/ZhuZiAWan.ttf');
    font-display: swap;
}
html,body{
  font-family: tzy !important;
}
.el-drawer__body {
   overflow-y: auto;
 }
</style>
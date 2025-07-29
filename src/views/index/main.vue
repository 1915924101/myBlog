<template>
  <div class="">
    <div class="home-blog">
      <div
        class="hero"
        :style="{ backgroundImage: `url(${require('@/assets/bg.svg')})` }"
        style="
          text-align: center;
          overflow: hidden;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        "
      >
        <div>
          <img
            src="@/assets/live.jpg"
            alt="hero"
            class="hero-img"
            style="
              max-height: 288px;
              display: block;
              border-radius: 19% 81% 23% 77% / 44% 57% 43% 56%;
              box-shadow: rgba(0, 0, 0, 0.2) 0px 15px 18px;
              transition: transform 0.25s ease-in-out 0s,
                opacity 0.25s ease-in-out 0s;
              transform: translateY(0px);
              opacity: 1;
            "
          />
          <h1
            style="
              transition: transform 0.25s ease-in-out 0.04s,
                opacity 0.25s ease-in-out 0.04s;
              transform: translateY(0px);
              opacity: 1;
            "
          >
            Xiao Ke
          </h1>
          <p
            class="description"
            style="
              transition: transform 0.25s ease-in-out 0.08s,
                opacity 0.25s ease-in-out 0.08s;
              transform: translateY(0px);
              opacity: 1;
            "
          >
            没有伞的孩子必须努力奔跑 —— 永远清醒 永远温柔 永远知进退
          </p>
        </div>
      </div>
      <div class="menuBox" v-show="windowWidth > 768">
        <div class="scrollBox">
          <div class="other-item"  :style="{ backgroundColor: getRandomColor() }" :class="'other'+item" v-for="item in 22" :key="item">

          </div>
          <div class="list">
            <div class="list-item" data-order="0">
              <img
                src="https://gw.alicdn.com/imgextra/i1/O1CN01MC8tJw1ajfwYvJOtw_!!6000000003366-2-tps-160-160.png"
                style="width: 80px; height: 80px; border-radius: 10px"
                alt=""
              />
            </div>
            <div class="list-item" data-order="1">
              <img
                src="https://gw.alicdn.com/imgextra/i1/O1CN01MC8tJw1ajfwYvJOtw_!!6000000003366-2-tps-160-160.png"
                style="width: 80px; height: 80px; border-radius: 10px"
                alt=""
              />
            </div>
            <div class="list-item" data-order="2">
              <img
                src="https://gw.alicdn.com/imgextra/i1/O1CN01MC8tJw1ajfwYvJOtw_!!6000000003366-2-tps-160-160.png"
                style="width: 80px; height: 80px; border-radius: 10px"
                alt=""
              />
            </div>
            <div class="list-item" data-order="3">
              <img
                src="https://gw.alicdn.com/imgextra/i1/O1CN01MC8tJw1ajfwYvJOtw_!!6000000003366-2-tps-160-160.png"
                style="width: 80px; height: 80px; border-radius: 10px"
                alt=""
              />
            </div>
            <div class="list-item" data-order="2">
              <img
                src="https://gw.alicdn.com/imgextra/i1/O1CN01MC8tJw1ajfwYvJOtw_!!6000000003366-2-tps-160-160.png"
                style="width: 80px; height: 80px; border-radius: 10px"
                alt=""
              />
            </div>
            <div class="list-item" data-order="1">
              <img
                src="https://gw.alicdn.com/imgextra/i1/O1CN01MC8tJw1ajfwYvJOtw_!!6000000003366-2-tps-160-160.png"
                style="width: 80px; height: 80px; border-radius: 10px"
                alt=""
              />
            </div>
            <div class="list-item" data-order="0">
              <img
                src="https://gw.alicdn.com/imgextra/i1/O1CN01MC8tJw1ajfwYvJOtw_!!6000000003366-2-tps-160-160.png"
                style="width: 80px; height: 80px; border-radius: 10px"
                alt=""
              />
            </div>
            <div class="list-item" data-order="0">
              <img
                src="https://gw.alicdn.com/imgextra/i1/O1CN01MC8tJw1ajfwYvJOtw_!!6000000003366-2-tps-160-160.png"
                style="width: 80px; height: 80px; border-radius: 10px"
                alt=""
              />
            </div>
            <div class="list-item" data-order="1">
              <img
                src="https://gw.alicdn.com/imgextra/i1/O1CN01MC8tJw1ajfwYvJOtw_!!6000000003366-2-tps-160-160.png"
                style="width: 80px; height: 80px; border-radius: 10px"
                alt=""
              />
            </div>
            <div class="list-item" data-order="2">
              <img
                src="https://gw.alicdn.com/imgextra/i1/O1CN01MC8tJw1ajfwYvJOtw_!!6000000003366-2-tps-160-160.png"
                style="width: 80px; height: 80px; border-radius: 10px"
                alt=""
              />
            </div>
            <div class="list-item" data-order="3">
              <img
                src="https://gw.alicdn.com/imgextra/i1/O1CN01MC8tJw1ajfwYvJOtw_!!6000000003366-2-tps-160-160.png"
                style="width: 80px; height: 80px; border-radius: 10px"
                alt=""
              />
            </div>
            <div class="list-item" data-order="2">
              <img
                src="https://gw.alicdn.com/imgextra/i1/O1CN01MC8tJw1ajfwYvJOtw_!!6000000003366-2-tps-160-160.png"
                style="width: 80px; height: 80px; border-radius: 10px"
                alt=""
              />
            </div>
            <div class="list-item" data-order="1">
              <img
                src="https://gw.alicdn.com/imgextra/i1/O1CN01MC8tJw1ajfwYvJOtw_!!6000000003366-2-tps-160-160.png"
                style="width: 80px; height: 80px; border-radius: 10px"
                alt=""
              />
            </div>
            <div class="list-item" data-order="0">
              <img
                src="https://gw.alicdn.com/imgextra/i1/O1CN01MC8tJw1ajfwYvJOtw_!!6000000003366-2-tps-160-160.png"
                style="width: 80px; height: 80px; border-radius: 10px"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="layout">
        <div class="left" :class="{ mobileSty: windowWidth <= 768 }">
          <div
            class="left-card"
            :style="`flex-direction:${
              windowWidth <= 768
                ? 'column'
                : index % 2 === 0
                ? 'row'
                : 'row-reverse'
            }`"
            @click="goDetail(item)"
            v-for="(item, index) in list"
            :key="item.id"
          >
            <div
              class="img"
              :class="{ mobileSty: windowWidth <= 768 }"
              style="width: 44%; height: 100%; overflow: hidden"
            >
              <img
                :src="item.coverUrl"
                class="coverImg"
                v-if="item.coverUrl"
                alt=""
              />
            </div>
            <div
              :class="{ mobileSty: windowWidth <= 768 }"
              style="padding: 0 40px; width: 57%; box-sizing: border-box"
            >
              <div class="title">
                <h3>{{ item.title }}</h3>
              </div>
              <div class="contentText">
                {{ item.title }}
              </div>
              <div class="foot">
                <!-- <div style="margin-right: 1rem;">
                  <i class="el-icon-user-solid"></i>
                  小珂
                </div> -->
                <div style="margin-right: 1rem">
                  发表于
                  <i class="el-icon-time"></i>
                  {{ item.createTime ? item.createTime.substr(0, 10) : '' }}
                </div>
                <div style="margin-right: 1rem">
                  <i class="el-icon-notebook-2"></i>
                  {{ item.className }}
                </div>
                <div style="margin-right: 1rem">
                  <i class="el-icon-price-tag"></i>
                  {{ item.tagName }}
                </div>
                <!-- <div @click="setLike(item)" :class="{activeColor:item.isLike}">
                  <i class="el-icon-star-on"></i>
                  {{item.likeCount}}
                </div> -->
              </div>
            </div>
          </div>
        </div>
        <div class="right" v-if="windowWidth > 768">
          <el-card class="right-card">
            <div class="userInfo">
              <div class="headImg">
                <img
                  src="@/assets/head.png"
                  style="width: 100px; height: 100px; border-radius: 50%"
                  alt=""
                />
              </div>
              <div class="username" @click="send">li~ke</div>
              <div class="username" style="font-size: 14px; text-align: center">
                2023年的理想开始实现了吗？
              </div>
              <div class="num">
                <div class="nav-right">
                  <div style="font-weight: 550; line-height: 1.25">
                    {{ total }}
                  </div>
                  <div style="font-size: 14px; margin-top: 10px">文章</div>
                </div>
                <div class="nav-right">
                  <div style="font-weight: 550; line-height: 1.25">
                    {{ classList.length }}
                  </div>
                  <div style="font-size: 14px; margin-top: 10px">分类</div>
                </div>
                <!-- <el-divider direction="vertical"></el-divider> -->
                <div class="nav-right">
                  <div style="font-weight: 550; line-height: 1.25">
                    {{
                      viewtotal > 10000
                        ? (viewtotal / 10000).toFixed(2) + "w"
                        : viewtotal
                    }}
                  </div>
                  <div style="font-size: 14px; margin-top: 10px">浏览量</div>
                </div>
              </div>
            </div>
            <div class="calendar">
              <div class="header">
                <!-- <button @click="prevYear"><<</button>
                    <button @click="prevMonth"><</button> -->
                <el-button
                  type="primary"
                  size="info"
                  @click="prevMonth"
                  icon="el-icon-arrow-left"
                ></el-button>
                {{ year }} 年 {{ month + 1 }} 月
                <el-button
                  type="primary"
                  size="info"
                  @click="nextMonth"
                  icon="el-icon-arrow-right"
                ></el-button>
                <!-- <button @click="nextMonth">></button> -->
                <!-- <button @click="nextYear">>></button> -->
              </div>
              <table border="0">
                <thead>
                  <tr>
                    <th>日</th>
                    <th>一</th>
                    <th>二</th>
                    <th>三</th>
                    <th>四</th>
                    <th>五</th>
                    <th>六</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(week, index) in weeks" :key="index">
                    <td
                      v-for="(day, i) in week"
                      :key="i"
                      :class="{ today: isToday(day) }"
                    >
                      {{ day }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <el-divider></el-divider>
            <div class="classify">
              <div class="rigTitle">
                <i class="el-icon-menu"></i>
                <span style="margin-left: 10px">分类</span>
              </div>
              <div
                class="classList"
                v-for="item in classList"
                :key="item.id"
                @click="goSearch(item, 1)"
              >
                <el-card shadow="hover" :body-style="cardSty">
                  <div
                    style="
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                    "
                  >
                    <span>{{ item.label }}</span>
                    <el-tag
                      type="danger"
                      size="mini"
                      effect="dark"
                      v-show="item.count > 0"
                      >{{ item.count }}</el-tag
                    >
                  </div>
                </el-card>
              </div>
            </div>
            <div class="tags">
              <div class="rigTitle">
                <i class="el-icon-price-tag"></i>
                <span style="margin-left: 10px">标签</span>
              </div>
              <div>
                <el-tag
                  v-for="item in tags"
                  :key="item.label"
                  :type="item.type"
                  size="mini"
                  @click="goSearch(item, 2)"
                  style="margin-right: 5px; margin-bottom: 5px; cursor: pointer"
                  effect="dark"
                >
                  {{ item.label }}
                </el-tag>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getArticleList,
  getClassifyList,
  getTagsList,
  addLike,
} from "@/api/index";
import MyWebSocket from "@/utils/websocket";
import { initAnimation } from "./scroll";
export default {
  data() {
    return {
      viewtotal: 0,
      value: "",
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      days: ["日", "一", "二", "三", "四", "五", "六"],
      weeks: [],
      cardSty: {
        padding: "0 30px",
        height: "40px",
        lineHeight: "40px",
      },
      tags: [],
      list: [],
      classList: [],
      page: 1,
      size: 20,
      total: 0,
      nextPage: true,
      ws: null,
      windowWidth: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.classData();
      this.tagsData();
    }, 500);
    initAnimation();
    this.generateWeeks();
    window.onscroll = () => {
      // 处理滚动事件
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      var pageHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      var windowHeight = window.innerHeight;
      if (scrollTop + windowHeight === pageHeight) {
        // 已经滚动到页面底部，需要加载新的内容
        // console.log("触底", this.nextPage);
        if (this.nextPage) {
          this.page++;
          this.fetchData();
        } else {
          // console.log("加载结束");
        }
      }
    };
  },
  created() {
    this.fetchData();
    // 监听窗口宽度变化
    window.addEventListener("resize", this.handleResize);
    // 初始化窗口宽度
    this.handleResize();
    // console.log(this.MyWebSocket,6666666666666);
  },
  destroyed() {
    // 取消监听窗口宽度变化
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    getRandomColor() {
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      return `#${randomColor}`;
    },
    // 窗口宽度变化回调函数
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    initChat() {
      // 测试ws用，无实际作用
      this.ws = new MyWebSocket("ws://**************");
      // console.log(this.ws, "wsssssssssss");
      this.ws.on("message", (data) => {
        // console.log(data, "接收消息");
      });
    },
    send() {
      let data = {
        uuid: "1",
        touuid: "2",
        username: "张三",
        content: "你好,我是张三",
        type: "text",
      };
      this.ws.send(data);
    },
    setLike(item) {
      if (item?.isLike) {
        return;
      }
      let data = {
        id: item.id,
        likeCount: item.likeCount,
      };
      addLike(data)
        .then((res) => {
          // console.log("点赞成功");
          item.likeCount++;
          item.isLike = true;
        })
        .catch((err) => {});
    },
    goDetail(item) {
      // console.log(item, "点击");
      this.$router.push({
        path: "/detail",
        query: {
          id: item.id,
        },
      });
    },
    goSearch(item, type) {
      this.$router.push({
        path: "/searchList",
        query: {
          id: item.value,
          type: type,
        },
      });
    },
    load() {
      // console.log("触底");
    },
    fetchData() {
      this.listLoading = true;
      let data = {
        page: this.page,
        size: this.size,
        tagId: null,
        classId: null,
      };
      getArticleList(data).then((res) => {
        // console.log(res, "文章列表");
        let arr = res.data;
        this.total = res.total;
        this.viewtotal = res.viewtotal;
        if (this.page == 1) {
          this.list = arr;
        } else {
          if (arr.length === 0) {
            this.nextPage = false;
          } else {
            this.nextPage = true;
            this.list = this.list.concat(arr);
          }
        }
      });
    },
    classData() {
      getClassifyList().then((res) => {
        // console.log(res, "分类列表");
        this.classList = res.data;
      });
    },
    tagsData() {
      getTagsList().then((res) => {
        // console.log(res, "标签列表");
        this.tags = res.data;
        this.tags.forEach((el, index) => {
          el.type = index % 2 === 0 ? "success" : "danger";
        });
        // console.log(this.tags);
      });
    },
    getDaysInMonth(year, month) {
      return new Date(year, month + 1, 0).getDate();
    },
    getFirstDayOfMonth(year, month) {
      return new Date(year, month, 1).getDay();
    },
    generateWeeks() {
      const daysInMonth = this.getDaysInMonth(this.year, this.month);
      const firstDayOfMonth = this.getFirstDayOfMonth(this.year, this.month);
      let day = 1;
      let week = [];
      for (let i = 0; i < firstDayOfMonth; i++) {
        week.push("");
      }
      for (let i = 1; i <= daysInMonth; i++) {
        week.push(i);
        if (week.length === 7) {
          this.weeks.push(week);
          week = [];
        }
      }
      if (week.length > 0) {
        for (let i = week.length; i < 7; i++) {
          week.push("");
        }
        this.weeks.push(week);
      }
    },
    isToday(day) {
      const today = new Date();
      return (
        this.year === today.getFullYear() &&
        this.month === today.getMonth() &&
        day === today.getDate()
      );
    },
    prevYear() {
      this.year--;
      this.refresh();
    },
    nextYear() {
      this.year++;
      this.refresh();
    },
    prevMonth() {
      if (this.month === 0) {
        this.year--;
        this.month = 11;
      } else {
        this.month--;
      }
      this.refresh();
    },
    nextMonth() {
      if (this.month === 11) {
        this.year++;
        this.month = 0;
      } else {
        this.month++;
      }
      this.refresh();
    },
    refresh() {
      this.weeks = [];
      this.generateWeeks();
    },
  },
};
</script>
<style scoped>
.menuBox {
  background: radial-gradient(
      circle at 27% 100%,
      rgba(0, 127, 255, 0.15) 0px,
      rgba(143, 53, 255, 0) 30%
    )
    rgb(4, 5, 6);
  min-width: 750px;
  width: 100%;
  height: 450vh;
}
.scrollBox {
  position: sticky;
  top: 60px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  line-height: 0;
  user-select: none;
  user-select: none;
  transform-style: preserve-3d;
  perspective: 800px;
  /* position: relative; */
  overflow: hidden;
  /* background: #6f42c1; */
}
.list {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 1204px;
  height: 560px;
  background-color: rgba(23, 26, 29, 0.9);
  border-radius: 10px;
  padding: 83px 43px;
  box-sizing: border-box;
  /* transform-origin: 50% 50%; */
}
.other-item{
  position: absolute;
  transform-origin: 50% 50%;
  /* background-image: linear-gradient(133deg,rgba(255,186,0,0),rgba(255,207,0,.6) 68%),linear-gradient(170deg,#ffc400,#ff9200),linear-gradient(170deg,#ffc400,#ff9200); */
  border-radius: 0.13em;
  transition: 0.3s;
  z-index: 2;
}
.other1{
  width: 160px;
  height: 160px;
  left: calc(50% - 756px);
  top: calc(50% - 421px);
}
.other2{
  width: 80px;
  height: 80px;
  left: calc(50% - 487px);
  top: calc(50% - 192px);
}
.other3{
  width: 96px;
  height: 96px;
  left: calc(50% - 624px);
  top: calc(50% - 141px);
}
.other4{
  width: 40px;
  height: 40px;
  left: calc(50% - 316px);
  top: calc(50% - 67px);
}
.other5{
  width: 46px;
  height: 46px;
  left: calc(50% - 259px);
  top: calc(50% - 28px);
}
.other6{
  width: 72px;
  height: 72px;
  left: calc(50% - 579px);
  bottom: calc(50% - 175px);
}
.other7{
  width: 160px;
  height: 160px;
  left: calc(50% - 701px);
  bottom: calc(50% - 412px);
}
.other8{
  width: 24px;
  height: 24px;
  left: calc(50% - 165px);
  top: calc(50% + 85px);
}
.other9{
  width: 96px;
  height: 96px;
  left: calc(50% - 154px);
  top: calc(50% - 473px);
}
.other10{
  width: 46px;
  height: 46px;
  left: calc(50% - 362px);
  bottom: calc(50% - 98px);
}
.other11{
  width: 96px;
  height: 96px;
  left: calc(50% - 165px);
  bottom: calc(50% - 498px);
}
.other12{
  width: 40px;
  height: 40px;
  left: calc(50% - 26px);
  top: calc(50% - 352px);
}
.other13{
  width: 64px;
  height: 64px;
  right: calc(50% - 102px);
  top: calc(50% - 395px);
}
.other14{
  width: 24px;
  height: 24px;
  right: calc(50% - 38px);
  top: calc(50% - 206px);
}
.other15{
  width: 130px;
  height: 130px;
  right: calc(50% - 704px);
  top: calc(50% - 363px);
}
.other16{
  width: 64px;
  height: 64px;
  right: calc(50% - 505px);
  top: calc(50% - 226px);
}
.other17{
  width: 24px;
  height: 24px;
  right: calc(50% - 218px);
  top: calc(50% - 52px);
}
.other18{
  width: 24px;
  height: 24px;
  right: calc(50% - 300px);
  bottom: calc(50% - 49px);
}
.other19{
  width: 64px;
  height: 64px;
  right: calc(50% - 453px);
  bottom: calc(50% - 170px);
}
.other20{
  width: 96px;
  height: 96px;
  right: calc(50% - 657px);
  bottom: calc(50% - 133px);
}
.other21{
  width: 160px;
  height: 160px;
  right: calc(50% - 8px);
  bottom: calc(50% - 345px);
}
.other22{
  width: 96px;
  height: 96px;
  right: calc(50% - 213px);
  bottom: calc(50% - 532px);
}
.list-item {
  cursor: pointer;
  width: 14.28571%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  transition: 0.3s;
}
.list-item img:hover{
  opacity: 0.4;
}
.layout {
  display: flex;
  flex: 1 auto;
  margin: 0 auto;
  padding: 40px 15px;
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;
}
.canvas {
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none; /* 将鼠标事件传递给下面的元素 */
}
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

.home-blog {
  padding: 0;
  margin: 0 auto;
}

.home-blog .hero {
  margin: 3.6rem auto 0;
  position: relative;
  box-sizing: border-box;
  padding: 0 20px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}

.home-blog .hero .hero-img {
  max-width: 300px;
  margin: 0 auto 1.5rem;
}

img {
  overflow-clip-margin: content-box;
  overflow: clip;
}

.home-blog .hero h1 {
  display: block;
  margin: 0 auto 1.8rem;
  font-size: 2.5rem;
}

.home-blog .hero .description {
  margin: 1.8rem auto;
  font-size: 1.6rem;
  line-height: 1.3;
}
.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.left {
  width: 74%;
  min-height: 1000px;
}
.left-card {
  width: 100%;
  height: 18em;
  border-radius: 8px;
  background: #fff;
  transition: all 0.3s;
  border: 1px solid #e3e3e3;
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  overflow: hidden;
}
.left-card:hover {
  border: 1px solid #6f42c1 !important;
}
.right {
  width: 26%;
  margin-left: 30px;
}
.right-card {
  width: 100%;
  height: auto;
}
.userInfo {
  color: #242424;
}
.headImg {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.username {
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
}
.num {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
.nav-right {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.calendar {
  margin-top: 20px;
  font-size: 16px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  background-color: #909399;
  min-height: 270px;
  color: #fff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

table {
  width: 100%;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
}

th,
td {
  text-align: center;
  border: 1px solid #ccc;
  padding: 5px;
  font-weight: 400;
}

.today {
  background-color: #e6a23c;
  color: #fff;
}
td:hover {
  background-color: #c0c4cc;
}
table,
td,
th {
  border: none;
}
td {
  border-radius: 8px;
}
.rigTitle {
  margin-bottom: 10px;
}
.classList {
  width: 100%;
  margin-bottom: 10px;
  cursor: pointer;
}
.tags {
  margin-top: 20px;
}
.foot {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #7f7f7f;
}
.contentText {
  width: 100%;
  height: 32px;
  font-size: 13px;
  color: #8a919f;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.activeColor {
  color: #3178c6;
}
.coverImg {
  width: 100%;
  height: 100%;
  transition: filter 375ms ease-in 0.2s, transform 0.6s;
  object-fit: cover;
}
.coverImg:hover {
  transform: scale(1.1);
}
.mobileSty {
  width: 100% !important;
}
</style>

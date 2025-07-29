<template>
  <div>
    <div class="content" v-loading="!isShow">
      <div class="left" :class="{mobileSty:windowWidth<=768}">
        <!-- <h2 class="title">
          {{ detail.title }}
        </h2> -->
        <div class="autor">
          <img
            src="@/assets/head.png"
            style="width: 2.5rem; height: 2.5rem; border-radius: 50%"
            alt=""
          />
          <div style="margin-left: 10px">
            <div class="username">小珂</div>
            <div class="time">
              <span v-if="windowWidth> 768">{{ detail.createTime }} . </span> 阅读 {{ detail.viewCount }} . 点赞 {{detail.likeCount}}
            </div>
          </div>
        </div>
        <!-- <div class="coverImg">
          <img
            :src="detail.coverUrl"
            style="width: 100%; height: auto"
            alt=""
            srcset=""
          />
        </div> -->
        <div class="richText" v-html="content" v-highlight></div>
        <div style="display: flex;justify-content: center;margin-top: 20px;flex-direction: column;align-items: center;cursor: pointer;">
          <img src="@/assets/like.png" @click="cancleLike" width="200" v-if="detail.isLike" height="200" style="width: 80px;height: 80px;" alt="">
          <img src="@/assets/noLike.png" @click="setLike(detail.id,detail.likeCount)" width="200" v-if="!detail.isLike" height="200" style="width: 80px;height: 80px;" alt="">
          <div style="margin-top: 4px;font-size: 13px;color: #333333;">赞一下</div>
        </div>
      </div>
      <div class="right" v-if="windowWidth> 768">
        <el-card class="right-card">
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
                  <el-tag type="danger" v-show="item.count>0" size="mini" effect="dark">{{item.count}}</el-tag>
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
</template>
<script>
import {marked} from 'marked';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { articleDetail, getClassifyList, getTagsList,addView,addLike } from "@/api/index";
import Vue from 'vue'
export default {
  data() {
    return {
      isShow:false,
      detail: "",
      content:'',
      cardSty: {
        padding: "0 30px",
        height: "40px",
        lineHeight: "40px",
      },
      tags: [],
      classList: [],
      // 窗口宽度
      windowWidth: 0,
    };
  },
  destroyed() {
    // 取消监听窗口宽度变化
    window.removeEventListener('resize', this.handleResize);
  },
  created() {
    this.getDetail();
    this.classData();
    this.tagsData();
    // 监听窗口宽度变化
    window.addEventListener('resize', this.handleResize);
    // 初始化窗口宽度
    this.handleResize();
  },
  mounted(){
    Vue.directive('highlight', function (el) {
      // 查找code标签
      let blocks = el.querySelectorAll('code');
      // console.log(blocks,'所有元素');
      // 遍历所有的code标签
      blocks.forEach((block)=>{
        // 让prism对当前的code标签进行高亮处理
        Prism.highlightElement(block);
      })
    })
  },
  methods: {
    // 窗口宽度变化回调函数
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    loadMarkdownContent(url) {
      fetch(url)
        .then(res => res.text())
        .then(text => {
          this.content = marked(text);
          this.content=this.content.replace(/<pre>/g, '<pre style="padding: 15px 12px; margin: 0; word-break: normal; display: block; overflow-x: auto; border-radius: 2px;background:#f8f8f8;">');
          // console.log(this.content,'富文本');
          this.isShow=true
        })
        .catch(err => console.error(err));
    },
    cancleLike(){
      if(this.detail.isLike){
        this.detail.isLike=false
        // this.$set(this.detail,'is_like',false)
        // console.log(this.detail.isLike,'取消点赞');
        this.$forceUpdate()
      }
    },
    setLike(id,count){
      let data={
        id:id,
        likeCount:count
      }
      addLike(data).then((res) => {
        // console.log('点赞成功');
        this.detail.likeCount++
        this.detail.isLike=true
        this.$forceUpdate()
      }).catch((err) => {
        
      });
    },
    setView(id,count){
        let data={
            id:id,
            viewCount:count
        }
        addView(data).then((re) => {
            // console.log('浏览成功');
            this.detail.viewCount++
        }).catch((err) => {
            
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
    getDetail() {
      articleDetail({ id: this.$route.query.id })
        .then((res) => {
          // console.log(res, "文章详情");
          this.detail = res.data;
          this.loadMarkdownContent(res.data.content)
          this.setView(this.detail.id,this.detail.viewCount)
        })
        .catch((err) => {});
    },
  },
};
</script>
<style scoped>
.content {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
}
.left {
  width: 60%;
  padding: 30px;
  box-sizing: border-box;
  background: #fff;
}
.title {
  margin: 0 0 1.667rem;
  font-size: 2rem !important;
  font-weight: 600 !important;
  line-height: 1.31 !important;
  color: #252933 !important;
}
.autor {
  display: flex;
  align-items: center;
}
.username {
  max-width: 128px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 500;
  color: #515767;
  line-height: 1rem;
}
.time {
  font-size: 1rem;
  color: #8a919f;
  margin-top: 2px;
  line-height: 22px;
}
.coverImg {
  width: 100%;
  height: auto;
  margin-top: 3rem;
}
.richText {
  width: 100%;
  margin-top: 1rem;
  word-break: break-word;
  line-height: 1.75;
  font-weight: 400;
  font-size: 16px;
  overflow-x: hidden;
  color: #252933;
}
.right {
  width: 20%;
  margin-left: 30px;
}
.right-card {
  width: 100%;
  height: auto;
}
.nav-right {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
.mobileSty{
  width: 100%;
}
</style>

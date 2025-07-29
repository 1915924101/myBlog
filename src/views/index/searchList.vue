<template>
    <div>
        <div class="content" :class="{mobileSty:windowWidth<=768}">
            <div class="tabs">
                <div class="tabs-card" :class="{active:current==item.value}" @click="change(item)"  shadow="hover" v-for="item in classList" :key="item.id">
                    <div style="display:flex;align-items:center;justify-content:center">
                        <span style="margin-right: 10px;">{{ item.label }}</span>
                        <el-tag :type="item.type" size="mini" effect="dark" v-show="item.count>0">{{ item.count }}</el-tag>
                    </div>
                </div>
            </div>
            <div>
              <el-card class="left-card" shadow="hover" style="cursor: pointer;margin-bottom: 10px;" v-for="item in list" :key="item.id">
                  <div style="display:flex;align-items: center;justify-content: space-between;" @click="goDetail(item)">
                      <div style="width: 70%;">
                      <div class="title">
                          <h3>{{item.title}}</h3>
                      </div>
                      <div class="contentText">
                        {{item.title}}
                      </div>
                      </div>
                      <img :src="item.coverUrl" v-if="item.coverUrl" style="width:120px;height: auto;" alt="">
                  </div>
                  <div class="foot"  @click="goDetail(item)">
                      <!-- <div style="margin-right: 1rem;">
                      <i class="el-icon-user-solid"></i>
                      小珂
                      </div> -->
                      <div style="margin-right: 1rem;">
                      <i class="el-icon-time"></i>
                      {{item.createTime}}
                      </div>
                      <div style="margin-right: 1rem;">
                      <i class="el-icon-notebook-2"></i>
                      {{item.className}}
                      </div>
                      <div>
                      <i class="el-icon-price-tag"></i>
                      {{item.tagName}}
                      </div>
                  </div>
              </el-card>
            </div>
            
        </div>

    </div>
</template>
<script>
import {
    getArticleList,
    getClassifyList,
    getTagsList
} from "@/api/index";
export default {
    data(){
        return{
            tags: [],
            list:[],
            classList:[],
            page:1,
            size:20,
            nextPage:true,
            current:''
        }
    },
    created(){
        // 监听窗口宽度变化
        window.addEventListener('resize', this.handleResize);
        // 初始化窗口宽度
        this.handleResize();
        if(this.$route.query.id){
            this.current=this.$route.query.id*1
        }
        if(this.$route.query.type==1){
            this.classData();
        }else{
            this.tagsData();
        }
        
    },
    mounted(){
        window.onscroll = () =>{
        // 处理滚动事件
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var pageHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        var windowHeight = window.innerHeight;
        if (scrollTop + windowHeight === pageHeight) {
          // 已经滚动到页面底部，需要加载新的内容
          // console.log('触底',this.nextPage);
          if(this.nextPage && this.list.length>=this.size){
            this.page++
            this.fetchData();
          }else{
            // console.log('加载结束');
          }

        }
      };
    },
    destroyed() {
      // 取消监听窗口宽度变化
      window.removeEventListener('resize', this.handleResize);
    },
    methods:{
      goDetail(item){
        // console.log(item,'点击');
        this.$router.push({
            path:'/detail',
            query:{
                id:item.id
            }
        })
      },
      // 窗口宽度变化回调函数
        handleResize() {
          this.windowWidth = window.innerWidth;
        }, 
        change(item){
            this.page=1
            this.current=item.value
            this.fetchData()
        },
        fetchData() {
        this.listLoading = true;
        let data={
          page:this.page,
          size:this.size,
          tagId:this.$route.query.type==2?this.current:null,
          classId:this.$route.query.type==1?this.current:null
        }
        getArticleList(data).then((res) => {
          // console.log(res, "文章列表");
          let arr=res.data;
          if(this.page==1){
            this.list = arr;
          }else{
            if(arr.length===0){
              this.list=this.list.concat(arr)
              this.nextPage=false
            }else{
              this.nextPage=true
              this.list=this.list.concat(arr)
            }

          }
        });
      },
      classData() {
        getClassifyList().then((res) => {
          // console.log(res, "分类列表");
          this.classList = res.data;
          this.classList.forEach((el,index) =>{
            el.type=(index%2===0?'success':'danger')
          })
          this.fetchData();
        });
      },
      tagsData() {
        getTagsList().then((res) => {
          // console.log(res, "标签列表");
          this.classList = res.data;
          this.classList.forEach((el,index) =>{
            el.type=(index%2===0?'success':'danger')
          })
          if(this.$route.query.id===''){
            this.current=this.classList[0].value
          }
          this.fetchData();
        });
      },
    }
}
</script>
<style scoped>
.content{
    width: 60%;
    margin: 5rem auto 0;
}
.tabs{
    display: flex;
    align-items: center;
    justify-items: center;
    font-size: 13px;
    flex-wrap: wrap;
    padding: 0 15px;
    box-sizing: border-box;
}
.tabs-card{
    min-width: 100px;
    padding: 8px 14px;
    box-sizing: border-box;
    cursor: pointer;
    margin-bottom: 10px;
    margin-right: 10px;
    font-size: 13px;
    border: 1px solid #EBEEF5;
    background-color: #FFF;
    color: #666;
    -webkit-transition: .3s;
    transition: .3s;
    border-radius: 0.25rem;
    overflow: hidden;
}
.tabs-card:hover{
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.left-card {
    width: 100%;
    height: auto;
  }
  .foot{
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 13px;
    color:#7F7F7F
  }
  .active{
    background-color: #409EFF;
    color: #FFF;
  }
  .contentText{
    width: 100%;
    height: 32px;
    font-size: 13px;
    color: #8a919f;
    line-height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .mobileSty{
    width: 100% !important;
    margin-left: 0;
    margin-right: 0;
  }
</style>

<template>
  <div class="app-container">
    <el-button
      type="primary"
      icon="el-icon-circle-plus"
      style="margin-bottom: 30px"
      @click="handleAdd"
      >新增</el-button
    >
    <el-table
      v-loading="listLoading"
      :data="list"
      max-height="480"
      stripe
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column type="index" label="序号" align="center" width="95">
      </el-table-column>
      <el-table-column label="标题" show-overflow-tooltip align="center">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="封面" show-overflow-tooltip align="center">
        <template slot-scope="scope">
          <img :src="scope.row.coverUrl" style="width: 80px;height: auto;" alt="">
        </template>
      </el-table-column>
      <el-table-column label="分类" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.className }}</span>
        </template>
      </el-table-column>
      <el-table-column label="标签" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.tagName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="文章内容文件" show-overflow-tooltip align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.content }}</span>
        </template>
      </el-table-column>
      <el-table-column label="浏览量" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.viewCount }}
        </template>
      </el-table-column>
      <el-table-column label="点赞量" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.likeCount }}
        </template>
      </el-table-column>
      <!-- <el-table-column
        class-name="status-col"
        label="状态"
        width="110"
        align="center"
      >
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{
            scope.row.status == 1 ? "展示" : "下架"
          }}</el-tag>
        </template>
      </el-table-column> -->
      <el-table-column
        align="center"
        prop="createTime"
        label="创建时间"
        width="200"
      >
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.createTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
    style="margin-top: 20px;"
      background
      layout="prev, pager, next"
      :page-size="size"
      :current-page="page"
      @size-change="sizeChange"
      @current-change="pageChange"
      :total="total">
</el-pagination>
    <el-dialog :title="title" width="90%" :visible.sync="dialogFormVisible" @close="close">
      <el-form :model="form">
        <el-form-item label="文章标题" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="文章封面" :label-width="formLabelWidth">
          <el-upload
          class="upload-demo"
          ref="upload"
          :limit="1"
          action="https://www.996work.online:31008/article/upload"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-success="handleSuccess"
          :file-list="fileList"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        </el-form-item>
        <el-form-item label="分类" :label-width="formLabelWidth">
          <el-select v-model="form.classId" clearable placeholder="请选择">
            <el-option
              v-for="item in classList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标签" :label-width="formLabelWidth">
          <el-select v-model="form.tagId" clearable placeholder="请选择">
            <el-option
              v-for="item in tagsList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文章内容" :label-width="formLabelWidth">
          <el-upload
            class="upload-demo"
            ref="upload"
            :limit="1"
            :before-upload="beforeUpload"
            action="https://www.996work.online:31008/article/upload"
            :on-success="handleSuccess1"
            :file-list="fileList1">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传md文件，且不超过500kb</div>
          </el-upload>
          <!-- <quill-editor
            ref="text"
            v-model="form.content"
            class="myQuillEditor"
            :options="editorOption"
          /> -->
        </el-form-item>
        <el-form-item label="浏览量" :label-width="formLabelWidth">
          <el-input v-model="form.viewCount" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="点赞量" :label-width="formLabelWidth">
          <el-input v-model="form.likeCount" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  getArticleList,
  addArticle,
  delArticle,
  editArticle,
  getClassifyList,
  getTagsList,
  upload
} from "@/api/index";
import { quillEditor } from "vue-quill-editor";
export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger",
      };
      return statusMap[status];
    },
  },
  components: {
    quillEditor,
  },
  data() {
    return {
      editorOption: {}, //this.$refs.text.value
      list: null,
      listLoading: true,
      dialogFormVisible: false,
      form: {
        title: "",
        content: "",
        viewCount: "",
        likeCount: "",
        coverUrl:"",
        imgName:""
      },
      title:'',
      formLabelWidth: "120px",
      classList:[],
      tagsList:[],
      page:1,
      size:20,
      total:0,
      fileList: [],
      fileList1: [],
    };
  },
  created() {
    this.fetchData();
    this.classData();
    this.tagsData();
  },
  methods: {
    beforeUpload(file) {
      // console.log(file,'类型');
      const isMd = file.name.endsWith('md');
      if (!isMd) {
        this.$message.error('上传md格式文件!');
      }
      return isMd;
    },
    close(){
      this.fileList=[]
      this.fileList1=[]
      this.form= {
        title: "",
        content: "",
        viewCount: "",
        likeCount: "",
        coverUrl:"",
        imgName:""
      }
    },
    handleSuccess(res, file, fileList){
      // console.log(res,fileList,'上传成功');
      this.fileList=[res.data]
    },
    handleSuccess1(res, file, fileList){
      console.log(res,fileList,'上传成功');
      this.fileList1=[res.data]
      // console.log(this.fileList1,'上传md');
    },
    handleRemove(file, fileList) {
      // console.log(file, fileList);
    },
    handlePreview(file) {
      // console.log(file);
    },
    sizeChange(e){
      this.size=e
      this.fetchData()
    },
    pageChange(e){
      this.page=e
      this.fetchData()
    },
    confirm() {
      if(this.fileList1.length===0){
        this.$message.warning('请先上传Markdown内容文件')
        return
      }
      let data = { ...this.form };
      // console.log(this.fileList1);
      data.content=this.fileList1[0].url
      data.coverUrl=this.fileList.length>0?this.fileList[0].url:null
      data.imgName=this.fileList.length>0?this.fileList[0].name:null
      if(data.id){
        editArticle(data).then((res) => {
          // console.log(res, "编辑文章");
          this.fetchData();
          this.form= {
            title: "",
            content: "",
            viewCount: "",
            likeCount: "",
            cover_url:"",
            imgName:""
          }
          this.dialogFormVisible = false;
          this.$message.success("修改成功");
        });
      }else{
        addArticle(data).then((res) => {
          // console.log(res, "新增文章");
          this.form= {
            title: "",
            content: "",
            viewCount: "",
            likeCount: "",
            cover_url:"",
            imgName:""
          }
          this.fetchData();
          this.dialogFormVisible = false;
          this.$message.success("新增成功");
        });
      }
    },
    fetchData() {
      this.listLoading = true;
      let data={
          page:this.page,
          size:this.size,
          tagId:null,
          classId:null
        }
      getArticleList(data).then((res) => {
        // console.log(res, "文章列表");
        this.list = res.data;
        this.total=res.total || 0;
        this.listLoading = false;
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
        this.tagsList = res.data;
      });
    },
    handleAdd() {
      this.form= {
        title: "",
        content: "",
        viewCount: "",
    likeCount: "",
    coverUrl:"",
        imgName:""
      }
      this.title='发布文章'
      this.dialogFormVisible=true
    },
    handleEdit(index, row) {
      // console.log(index, row);
      this.form={...row}
      if(this.form.imgName || this.form.coverUrl){
        this.fileList=[{name:this.form.imgName,url:this.form.coverUrl}]
      }
      this.fileList1=[{name:'content.md',url:this.form.content}]
      this.title='编辑文章'
      this.dialogFormVisible=true
    },
    handleDelete(index, row) {
      console.log(index, row);
      delArticle({ id: row.id }).then((res) => {
        // console.log(res, "删除");
        this.fetchData();
        this.$message.success(res.message);
      });
    },
  },
};
</script>

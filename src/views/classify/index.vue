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
        :data="classList"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
      >
        <el-table-column align="center" prop="value" label="ID" width="95">
        </el-table-column>
        <el-table-column label="分类名">
          <template slot-scope="scope">
            {{ scope.row.label }}
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
      <el-dialog :title="title" width="90%" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="分类名称" :label-width="formLabelWidth">
            <el-input v-model="form.label" autocomplete="off"></el-input>
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
    getClassifyList,
    getTagsList,
    delClass,
    addClass,
    editClass
  } from "@/api/index";
  export default {
    data() {
      return {
        editorOption: {}, //this.$refs.text.value
        list: null,
        listLoading: true,
        dialogFormVisible: false,
        form: {
          label: "",
        },
        title:'',
        formLabelWidth: "120px",
        classList:[],
        tagsList:[],
      };
    },
    created() {
      this.classData();
    //   this.tagsData();
    },
    methods: {
      confirm() {
        let data = { ...this.form };
        if(data.value){
            editClass(data).then((res) => {
            // console.log(res, "编辑分类");
            this.classData();
            this.dialogFormVisible = false;
            this.$message.success("修改成功");
          });
        }else{
            addClass(data).then((res) => {
            // console.log(res, "新增分类");
            this.classData();
            this.dialogFormVisible = false;
            this.$message.success("新增成功");
          });
        }
      },
      classData() {
        this.listLoading=true
        getClassifyList().then((res) => {
          // console.log(res, "分类列表");
          this.classList = res.data;
          this.listLoading=false
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
          name: "",
        }
        this.title='新增分类'
        this.dialogFormVisible=true
      },
      handleEdit(index, row) {
        // console.log(index, row);
        this.form={...row}
        this.title='编辑分类'
        this.dialogFormVisible=true
      },
      handleDelete(index, row) {
        console.log(index, row);
        delClass({ id: row.value }).then((res) => {
          // console.log(res, "删除");
          this.classData();
          this.$message.success(res.message);
        });
      },
    },
  };
  </script>
  
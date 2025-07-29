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
        :data="tagsList"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
      >
        <el-table-column align="center" prop="value" label="ID" width="95">
        </el-table-column>
        <el-table-column label="标签名">
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
          <el-form-item label="标签名称" :label-width="formLabelWidth">
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
    getTagsList,
    delTag,
    addTag,
    editTag
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
        tagsList:[],
      };
    },
    created() {
      this.tagsData();
    },
    methods: {
      confirm() {
        let data = { ...this.form };
        if(data.value){
            editTag(data).then((res) => {
            // console.log(res, "编辑标签");
            this.tagsData();
            this.dialogFormVisible = false;
            this.$message.success("修改成功");
          });
        }else{
            addTag(data).then((res) => {
            // console.log(res, "新增标签");
            this.tagsData();
            this.dialogFormVisible = false;
            this.$message.success("新增成功");
          });
        }
      },
      tagsData() {
        this.listLoading=true
        getTagsList().then((res) => {
          // console.log(res, "标签列表");
          this.tagsList = res.data;
          this.listLoading=false
        });
      },
      handleAdd() {
        this.form= {
          name: "",
        }
        this.title='新增标签'
        this.dialogFormVisible=true
      },
      handleEdit(index, row) {
        // console.log(index, row);
        this.form={...row}
        this.title='编辑标签'
        this.dialogFormVisible=true
      },
      handleDelete(index, row) {
        console.log(index, row);
        delTag({ id: row.value }).then((res) => {
          // console.log(res, "删除");
          this.tagsData();
          this.$message.success(res.message);
        });
      },
    },
  };
  </script>
  
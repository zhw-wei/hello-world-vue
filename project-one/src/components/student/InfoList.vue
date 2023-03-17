<template>
  <div class="infoList">
    <!--    查询条件-->
    <el-form :inline="true" class="demo-form-inline" size="small">
      <el-form-item>
        <el-button type="primary" @click="addStudent">新增</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="姓名" align="center"></el-table-column>
      <el-table-column prop="age" label="年龄" align="center"></el-table-column>
      <el-table-column prop="sex" label="性别" align="center">
        <template v-slot="scop">
          <span v-if="scop.row.sex === 0">女</span>
          <span v-if="scop.row.sex === 1">男</span>
        </template>
      </el-table-column>
      <el-table-column prop="score" label="成绩" align="center"></el-table-column>
      <el-table-column prop="classInfo" label="班级" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template v-slot="scop">
          <el-button type="danger" size="mini" icon="el-icon-edit" @click="updateStudent(scop.row)"></el-button>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="delStudent(scop.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
    </el-pagination>

    <!--    弹窗 -->
    <el-dialog :title="state ? '添加学生信息' : '修改学生信息'" :visible.sync="dialogFormVisible" width="500px">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
          <el-radio v-model="form.sex" label='1'>男</el-radio>
          <el-radio v-model="form.sex" label='0'>女</el-radio>
        </el-form-item>
        <el-form-item label="成绩" :label-width="formLabelWidth" prop="score">
          <el-input v-model="form.score" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="班级" :label-width="formLabelWidth" prop="classInfo">
          <el-input v-model="form.classInfo" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveStudent(form)">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import {deleteStudent, studentList, saveStudent, getStudent, updateStudent} from "@/api/api";

export default {
  name: "InfoList",
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pageSize: 10,
      total: 0,
      dialogFormVisible: false,
      formLabelWidth: '60px',
      form: {
        id: '',
        name: '',
        age: '',
        sex: '1',
        score: '',
        classInfo: ''
      },
      rules: {
        name: [{required: true, message: '请输入姓名'}],
        age: [{required: true, message: '年龄'}],
        sex: [{required: true}],
        score: [{required: true, message: '成绩'}],
        classInfo: [{required: true, message: '班级'}],
      },
      state: true
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      let params = {
        pageNo: this.currentPage,
        pageSize: this.pageSize,
      }

      studentList(params).then(result => {
        if (result.status == 200) {
          this.tableData = result.data.data.resultList
          this.total = result.data.data.pageInfo.totalCount
        }
      })
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.currentPage = 1
      this.getData()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.getData()
    },
    delStudent(row) {
      console.log(row)
      this.$alert(`确定删除${row.name}？`, '提示', {
        confirmButtonText: '确定',
        callback: (type) => {
          console.log("type:", type)
          if (type == 'confirm') {
            deleteStudent(row.id).then(result => {
              if (result.status == 200) {
                this.$message({message: '删除成功', type: 'success'})
                this.getData()
              }
            })
          }
        }
      })

    },
    addStudent() {
      this.form = {name: '', age: '', sex: '1', score: '', classInfo: ''}
      this.dialogFormVisible = true
      this.state = true
    },
    saveStudent(form) {

      if (this.state) {
        saveStudent(form).then(res => {
          if (res.status == 200) {
            this.dialogFormVisible = false
            this.$message({message: res.data.message, type: 'success'})
            this.getData()
          }
        })
      } else {
        updateStudent(form).then(res => {
          if (res.status == 200) {
            this.dialogFormVisible = false
            this.$message({message: res.data.message, type: 'success'})
            this.getData()
          }
        })
      }
    },
    updateStudent(row) {
      getStudent(row.id).then(res0 => {
        this.state = false
        console.log(res0)
        this.form = res0.data.data
        console.log(this.form)
        this.form.sex = this.form.sex.toString()
        this.dialogFormVisible = true
      })
    }
  }
}
</script>

<style lang="scss">
.infoList {
  .demo-form-inline {
    text-align: left;
  }

  .el-pagination {
    text-align: left;
    margin-top: 20px;
  }
}

</style>
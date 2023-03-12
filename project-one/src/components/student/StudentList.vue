<template>
  <div class="studentList">
    <!--    查询条件-->
    <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
      <el-form-item label="姓名">
        <el-input v-model="formInline.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="find">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>

    <!--    查询结果-->
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
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="delStudent(scop.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--    分页-->
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
    </el-pagination>
  </div>
</template>

<script>
import {studentList, deleteStudent} from '@/api/api'

export default {
  name: "StudentList",
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pageSize: 10,
      total: 0,
      formInline: {
        name: ''
      }
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
        name: this.formInline.name
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
      deleteStudent(row.id).then(result => {
        if (result.status == 200) {
          this.$message({message: '删除成功', type: 'success'})
          this.getData()
        }
      })
    },
    find(){
      this.getData()
    },
    reset(){
      this.formInline.name = ''
      this.currentPage = 1
      this.getData()
    }
  }
}
</script>

<style lang="scss">
.studentList {
  .demo-form-inline {
    text-align: left;
  }
  .el-pagination {
    text-align: left;
    margin-top: 20px;
  }
}

</style>
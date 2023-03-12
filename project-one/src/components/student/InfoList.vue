<template>
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
</template>

<script>
export default {
  name: "InfoList",
  data() {
    return {
      tableData: []
    }
  }
}
</script>

<style scoped>

</style>
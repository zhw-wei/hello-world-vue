<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>通用后台管理系统</span>
      </div>
      <el-form label-width="80px" :model="form" ref="form">
        <el-form-item label="用户名" prop="username" :rules="[
            {require: true, message: '请输入用户名', trigger: 'blur'},
            {min: 4, max: 10, message: '长度在4-10位字符之间', trigger: 'blur'}
            ]">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" :rules="[
            {require: true, message: '请输入用户名', trigger: 'blur'},
            {min: 4, max: 10, message: '长度在6-12位字符之间', trigger: 'blur'}
            ]">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('form')">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>

export default {
  name: "StartTwo",
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login(form){
      //有些时候，效果没有展示出来有可能是缓存的原因
      this.$refs[form].validate((valid) => {
        if(valid){
          //实现简单的登陆
          this.axios.post('/hello-world/user-info/login', this.form)
              .then(result => {
                console.log(result)
                if(result.status == 200){
                  localStorage.setItem('username', result.data.username)
                  localStorage.setItem('token', result.data.username)
                  this.$message({
                    message: result.data.username,
                    type: 'success'
                  })
                  this.$router.push('/home')
                }
              })
        }else{
          console.error(this.form)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  width: 100%;
  height: 100%;
  position: absolute;
  background: #409eff;
  .box-card{
    width: 450px;
    margin: 200px auto;
    .el-card__header{
      font-size: 30px;
    }
    .el-button{
      width: 100%;
    }
  }
}
</style>
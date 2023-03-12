<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>通用后台管理系统</span>
      </div>
      <el-form label-width="80px" :model="form" ref="form" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
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
import {nameRule, passRule} from '@/utils/validate'
import {setToken, getToken} from "@/utils/setToken";
import {login} from "@/api/api";

export default {
  name: "LoginFour",
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [{validator: nameRule, trigger: 'blur'}],
        password: [{validator: passRule, trigger: 'blur'}],
      }
    }
  },
  methods: {
    login(form){
      //有些时候，效果没有展示出来有可能是缓存的原因
      this.$refs[form].validate((valid) => {
        if(valid){
          //实现简单的登陆
          login(this.form).then(result => {
                console.log(result)
                if(result.status == 200){
                  // localStorage.setItem('username', result.data.username)
                  setToken('token', result.data.username)
                  setToken('username', result.data.username)
                  this.$message({
                    message: result.data.username,
                    type: 'success'
                  })
                  console.log('token username is ', getToken('token'))
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
  .el-card{
    background: #65768557;
  }
  .el-form .el-form-item__label{
    width: 100%;
    color: #fff;
  }
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
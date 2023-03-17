<template>
  <div class="home">
    <Header/><!-- 头 -->
    <el-container class="content">
      <Menu/><!-- 左侧链接 -->
      <el-container>
        <Breadcrumb/><!-- 面包屑 -->
        <el-main><!-- 内容区域 -->
          <div class="cont">
            <router-view/><!-- 设置路由出口，否则路由点击不起作用 -->
          </div>
        </el-main>
        <el-footer>
          <Footer/><!-- 底部-->
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 此处样式来源于element-ui官网
import Header from "@/components/common/CommonHeader.vue";
import Footer from "@/components/common/CommonFooter.vue";
import Menu from "@/components/common/CommonMenu.vue";
import Breadcrumb from "@/components/common/CommonBreadcrumb.vue";

export default {
  name: 'HelloWorld',
  components: {
    Header,
    Footer,
    Menu,
    Breadcrumb
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;

  .content {
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;
    .cont{
      margin: 20px 0;
    }
  }
}
</style>

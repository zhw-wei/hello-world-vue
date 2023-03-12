<template>
  <div class="menu">
    <el-aside width="200px">
      <el-menu
          router
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#2578b5"
          text-color="#fff"
          active-text-color="#ffd04b">
        <template v-for="(item, index) in menus">
          <el-submenu :index="index + ''" :key="index" v-if="!item.hidden">
            <template slot="title">
              <i :class="item.iconClass"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item-group v-for="(child, index) in item.children" :key="index">
              <el-menu-item :index="child.path">
                <i :class="child.iconClass"></i>
                <span>{{child.name}}</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: "CommonMenu",
  methods: {},
  data() {
    return {
      menus: []
    }
  },
  created() {
    //获取路由配置
    // console.log(this.$router.options.routes)
    this.menus = [...this.$router.options.routes]
  }
}
</script>

<style lang="scss" scoped>
.menu {
  .el-aside {
    height: 100%;

    .el-menu {
      height: 100%;
      .fa {
        margin-right: 10px; //定义 item.iconClass 对应的<i>标签，因为此处实际上的class是fa，具体可以查看路由配置
      }

      .el-submenu .el-submenu {
        min-width: 0;
      }
    }
  }
}

</style>
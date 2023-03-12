<template>
  <div class="notFound">
    <div class="wrapper">
      <div class="big">页面不见了！</div>
      <div>首页瞧一瞧，点击<router-link to="/">这里</router-link>进入首页</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  data(){
    return {}
  }
}
</script>

<style scoped>

.notFound{
  height: 100%;
  background-position: right top, center center;
  background-repeat: no-repeat, repeat;
}

</style>
<template>
  <div class="map-view">
    <div id="main">

    </div>
  </div>
</template>

<script>
//testChart可以通过接口请求获取得到
//接口地址：https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json
// import testChart from '@/assets/testChart.json'

import {dataViewMapChina} from "@/api/api";

export default {
  name: "MapView",
  data() {
    return {}
  },
  mounted() {

    dataViewMapChina().then(result => {
      let myChart = this.$echarts.init(document.getElementById('main'))
      this.$echarts.registerMap('china', result.data) //注册可用地图，必须包括geo组件或者map图表类型的时候才可以使用
      //具体配置可以查看官网
      let option = {
        geo: {
          map: 'china',
          aspectScale: 0.75,//地图长宽比
          zoom: 1.1,
          region: [{
            // name: '南海诸岛'
          }]
        },
        series: [{
          //配置地图相关参数，绘制地图，这个对象是关于地图图表的相关设置
          type: 'map',
          zoom: 1.1,
          map: 'china'
        }]
      }

      myChart.setOption(option)
    })
  }
}
</script>

<style lang="scss">
.map-view {
  width: 100%;

  #main {
    width: 100%;
    height: 800px;
  }
}

</style>
<template>
  <div class="data-view">
    <el-card>
      <div id="main1">

      </div>
    </el-card>
    <el-card>
      <div id="main2">

      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "DateView",
  data() {
    return {}
  },
  mounted() {
    let myChart = this.$echarts.init(document.getElementById('main1'))
    myChart.setOption({
      title: {
        text: '学习基础'
      },
      tooltip: {},
      xAxis: {
        data: ['一班', '二班', '三班', '四班', '五班', '六班']
      },
      yAxis: {},
      series: [{
        name: '人数',
        type: 'bar',
        data: [45, 42, 46, 48, 52, 47]
      }]
    })
    this.draw({}, ['一班', '二班', '三班', '四班', '五班', '六班'],
        [{
          name: '会话量',
          type: 'line',
          data: [45, 42, 46, 48, 52, 47]
        }]
    )
  },
  created() {
    //接口调用获取数据
    /*
    this.draw({}, ['一班', '二班', '三班', '四班', '五班', '六班'],
        [{
          name: '人数',
          type: 'bar',
          data: [45, 42, 46, 48, 52, 47]
        }]
    )
     */
  },
  methods: {
    draw(legend, xAxis, series) {

      let myChart = this.$echarts.init(document.getElementById('main2'))
      let option = {
        title: {
          text: '会话量'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: legend
        },
        xAxis: {
          type: 'category',
          data: xAxis
        },
        yAxis: {
          type: 'value'
        },
        series: series
      }
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="scss">
.data-view {
  width: 100%;
  display: flex;
  justify-content: space-between;

  .el-card {
    width: 50%;

    #main1, #main2 {
      height: 500px;
    }
  }
}

</style>
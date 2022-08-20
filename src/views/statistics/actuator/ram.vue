<template>
  <div className="app-container">
    <div className="chart-container">
      <div id="chart" ref="chart" className="chart" style="height:500px;width:100%"/>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import statisticsApi from '@/api/orderStatistics'

export default {

  data() {
    return {
      btnDisabled: false,
      chart: null,
      title: '',
      xData: [], // x轴数据
      yData: [] // y轴数据
    }
  },

  created() {
    this.showChart()
  },
  methods: {
    // 初始化图表数据
    showChart() {
      statisticsApi.getRam().then(response => {
        this.yData = response.data.dataList
        this.xData = response.data.servers
        this.setChartData()
      })
    },

    setChartData() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('chart'))
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: 'CPU性能图'
        },
        tooltip: {},
        legend: {
          data: [this.title]
        },
        xAxis: {
          data: this.xData
        },
        yAxis: {
          minInterval: 1
        },
        series: [{
          name: this.title,
          type: 'line',
          data: this.yData
        }]
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}
</script>

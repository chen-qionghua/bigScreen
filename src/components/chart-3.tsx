import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {baseChartOptions} from '../shared/base-chart-options';
import {createEchartOptions} from '../shared/create-echart-options';
const  px = (n) => n/ 2420 * (window as any).pageWidth

export const Chart3 = () => {
  const divRef = useRef(null)
  const myChart = useRef(null)

  const data1 = [0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10]
  const data2 = [0.13, 0.14, 0.15, 0.16, 0.17, 0.28, 0.29, 0.30, 0.41]
  const data3 = [0.11, 0.14, 0.25, 0.26, 0.11, 0.28, 0.29, 0.34, 0.37]
  const data4 = [0.05, 0.14, 0.15, 0.26, 0.17, 0.18, 0.19, 0.21, 0.32]
  const data5 = [0.31, 0.33, 0.35, 0.36, 0.47, 0.38, 0.49, 0.34, 0.44]
  const data = {data1,data2,data3,data4,data5}

  const x = (data) => {
    myChart.current.setOption(createEchartOptions({
      legend: {
        bottom: px(10),
        textStyle: {color: 'white'},
        itemWidth: px(30),
        itemHeight: px(16)
      },
      grid: {
        x: px(20),
        x2: px(20),
        y: px(20),
        y2: px(70),
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
        splitLine: {show: true, lineStyle: {color: '#073E78'},interval:0},
        axisTick: {show: false},
        axisLine: {show: false},
      },
      yAxis: {
        type: 'value',
        boundaryGap: false,
        splitLine: {lineStyle: {color: '#073E78'},},
        axisLabel: {
          formatter(val) {
            return val * 100 + '%';
          }
        },
      },
      series: [
        {
          name: '抢劫',
          type: 'line',
          data: data.data1
        },
        {
          name: '醉驾',
          type: 'line',
          data:  data.data2
        },
        {
          name: '盗窃',
          type: 'line',
          data:  data.data3
        },
        {
          name: '故意杀人',
          type: 'line',
          data:  data.data4
        },
        {
          name: '故意伤人',
          type: 'line',
          data:  data.data5
        }
      ].map((obj) =>({   //返回值是对象需要用括号包裹
        ...obj,
        symbol:'circle',
        symbolSize:px(12),
        lineStyle:{width:px(2)}
      }))
    }))
  }
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data)

    },[])

  return (
    <div className="bordered 发案趋势">
      <h2>发案趋势分析</h2>
      <div ref={divRef}className="chart"></div>

    </div>
  )
}
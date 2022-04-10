import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {createEchartOptions} from '../shared/create-echart-options';
export const Chart10 =() => {
  const divRef = useRef(null)
  useEffect(() => {  let myChart = echarts.init(divRef.current);
// 绘制图表
    myChart.setOption(createEchartOptions({
      xAxis: {
        data: ['入室抢劫', '当街偷盗', '团伙诈骗', '刑事案件', '民事案件'],
        axisLabel:{
          fontSize:px(12),
          interval:0,
          formatter(val){
            if(val.length > 2){
              const reallyVal = val.substring(0,2) +'\n' + val.substring(2,val.length);
              return reallyVal
            }else{
              return val
            }
          }
        },
        axisTick:{
          show:false
        },
        axisLine:{
          lineStyle:{
            color:"#083b70"
          }
        }
      },
      yAxis: {
        axisLabel:{
          fontSize:px(12),
          interval:0
        },
        axisLine:{
          show:true,
          lineStyle:{
            color:"#083b70"
          }
        },
        splitLine:{
          show:false
        },
      },
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [40, 25, 23, 20, 35],
          barWidth : 20,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              { offset: 0, color: '#2034f9' },
              { offset: 1, color: '#01a2ff' }
            ])
          },
        }
      ],

    }));},[])

  return (
      <div ref={divRef} className="chart"></div>
  )
}
import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {createEchartOptions} from '../shared/create-echart-options';
console.log('ssssss')
export const Chart12 =() => {
  const divRef = useRef(null)
  useEffect(() => {  let myChart = echarts.init(divRef.current);
// 绘制图表
    myChart.setOption(createEchartOptions({
      xAxis: {
        data: ['城关区', '七里河区', '西固区', '安宁区', '红谷区', '永登区','皋兰区','渝中区','兰州新区'],
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
        }
      },
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
        }
      ],

    }));},[])

  return (
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef}className="chart"></div>
    </div>
  )
}
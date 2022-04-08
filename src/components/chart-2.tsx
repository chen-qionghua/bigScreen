import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {baseChartOptions} from '../shared/base-chart-options';
import {createEchartOptions} from '../shared/create-echart-options';
const  px = (n) => n/ 2420 * (window as any).pageWidth

export const Chart2 = () => {
  const divRef = useRef(null)
  useEffect(() => {  let myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartOptions({
      ...baseChartOptions,

      axisLabel:{
        formatter(val){
          if(val.length > 2){
            const reallyVal = val.substring(0,3) +'\n' + val.substring(3,val.length);
            console.log(reallyVal)
            return reallyVal
          }else{
            return val
          }
        }
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine:{
          show:false
        }
      },
      yAxis: {
        type: 'category',
        data: ['公安局新区', '榆中县公安局', '皋兰县公安局', '永登县公安局', '红古区公安局', '安宁区公安局','西固区公安局','七里河区公安局','城关区公安局'],

      },

      series: [
        {
          name: '破案排名1',
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
          name: '破案排名2',
          type: 'bar',
          data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
      ]
    }))},[])

  return (
    <div className="bordered 管辖统计">
      <h2>案件破获排名</h2>
      <div ref={divRef}className="chart"></div>
    </div>
  )
}
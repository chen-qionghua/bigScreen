import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartOptions} from '../shared/create-echart-options';
const  px = (n) => n/ 2420 * (window as any).pageWidth

export const Chart2 = () => {
  const divRef = useRef(null)
  const myChart = useRef(null)
  const data = [
    {name: '城关区公安局', 2011: 2, 2012: 3},
    {name: '七里河区公安局', 2011: 2, 2012: 3},
    {name: '西固区公安局', 2011: 2, 2012: 3},
    {name: '安宁区公安局', 2011: 2, 2012: 3},
    {name: '红古区公安局', 2011: 2, 2012: 3},
    {name: '永登县公安局', 2011: 2, 2012: 3},
    {name: '皋兰县公安局', 2011: 2, 2012: 3},
    {name: '榆中县公安局', 2011: 2, 2012: 3},
    {name: '新区公安局', 2011: 2, 2012: 3},
  ];
  const x = (data) => {
    myChart.current.setOption(createEchartOptions({
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine:{
          show:false
        },
        axisLabel:{
          show:false
        },

      },
      yAxis: {
        axisTick: {show: false},
        type: 'category',
        data:data.map(i => i.name),
        axisLabel: {
          formatter(val) {
            return val.replace('公安局', '\n公安局');
          }
        }


      },

      series: [
        {
          name: '破案排名1',
          type: 'bar',
          data:data.map( i=> i[2011]),
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: '#2034f9' },
              { offset: 1, color: '#01a2ff' }
            ])
          },
        },
        {
          name: '破案排名2',
          type: 'bar',
          data: data.map( i=>i[2012]),
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: '#b92ae8' },
              { offset: 1, color: '#626ede' }
            ])
          },
        }
      ]
    }))
  }

  useEffect(() => {
     myChart.current = echarts.init(divRef.current); //图表注册
     x(data)                         //传入初始值进行渲染
    setInterval(()=>{            //两秒后更新渲染新数据
          const newData = [
            {name: '城关区公安局', 2011: 2, 2012: Math.random()*10},
            {name: '七里河区公安局', 2011: 2, 2012: Math.random()*10},
            {name: '西固区公安局', 2011: 2, 2012: Math.random()*10},
            {name: '安宁区公安局', 2011: 2, 2012: Math.random()*10},
            {name: '红古区公安局', 2011: 2, 2012: Math.random()*10},
            {name: '永登县公安局', 2011: 2, 2012: Math.random()*10},
            {name: '皋兰县公安局', 2011: 2, 2012: Math.random()*10},
            {name: '榆中县公安局', 2011: 2, 2012: Math.random()*10},
            {name: '新区公安局', 2011: 2, 2012: Math.random()*10},
          ]
          x(newData)   //在循环中手动调用渲染函数，实现无限循环更新

        },2000)

    },[])



  return (
    <div className="bordered 破获排名">
      <h2>案件破获排名</h2>
      <div ref={divRef}className="chart"></div>
      <div className="legend">
        <span className="first"/> 破案排名1
        <span className="second"/> 破案排名2
      </div>
    </div>
  )
}
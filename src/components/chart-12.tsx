import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {createEchartOptions} from '../shared/create-echart-options';
export const Chart12 =() => {
  const divRef = useRef(null)
  const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
  const data = [
    {value: 0.08, name: '东岗路'},
    {value: 0.06, name: '段家滩'},
    {value: 0.11, name: '雁北'},
    {value: 0.09, name: '五泉山'},
    {value: 0.12, name: '中山路'},
    {value: 0.06, name: '庆阳路'},
    {value: 0.08, name: '武都路'},
    {value: 0.08, name: '酒泉路'},
    {value: 0.08, name: '天水路'},
  ];
  const myChart = useRef(null)
  const x = (data) => {
    myChart.current.setOption(createEchartOptions({

      xAxis: {show: false},
      yAxis: {show: false},
      grid: {x: 0, x2: 0, y: 0, y2: 0, containLabel: true},
      legend: {
        orient: 'vertical',
        left: 'left',
        top: 'center',
        textStyle: {color: 'white'},
        itemWidth: px(10),
        itemHeight: px(10),
        formatter(name) {
          const value = (data.find(i => i.name === name)?.value * 100).toFixed(0) + '%';
          return name + ' ' + value;
        }
      },
      series: [
        {
          center: ['60%', '50%'],
          type: 'pie',
          radius: '80%',
          label: {show: false},
          labelLine: {show: false},
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }))
  }
  useEffect(() => {
     myChart.current = echarts.init(divRef.current);
     x(data)
    setInterval(() => {
      const newData = [
        {value:  Math.random().toFixed(2), name: '东岗路'},
        {value:  Math.random().toFixed(2), name: '段家滩'},
        {value:  Math.random().toFixed(2), name: '雁北'},
        {value:  Math.random().toFixed(2), name: '五泉山'},
        {value:  Math.random().toFixed(2), name: '中山路'},
        {value:  Math.random().toFixed(2), name: '庆阳路'},
        {value:  Math.random().toFixed(2), name: '武都路'},
        {value:  Math.random().toFixed(2), name: '酒泉路'},
        {value:  Math.random().toFixed(2), name: '天水路'},
      ];
      x(newData)
    },2000)
// 绘制图表
    },[])

  return (
    <div className="chart12">
      <div className="chart">
        <div className="main" ref={divRef}/>
      </div>

    </div>
  )
}
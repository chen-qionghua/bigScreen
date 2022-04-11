import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {createEchartOptions} from '../shared/create-echart-options';
export const Chart11 =() => {
  const divRef = useRef(null)
  const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
  useEffect(() => {  let myChart = echarts.init(divRef.current);
// 绘制图表
    myChart.setOption(createEchartOptions({

      color: colors,
      yAxis:{
        show:false,
      },
      xAxis:{
        show:false,
      },
      series: [
        {
          startAngle: 80,
          name: 'Access From',
          type: 'pie',
          radius: ['20%', '50%'],
          avoidLabelOverlap: false,
          label: {
            show: true, position: 'outside', textStyle: {color: '#62c7ff', fontSize: px(20)},
            distanceToLabelLine: 0,
            formatter(options) {
              return options.value * 100 + '%';
            }
          },
          roseType: 'area',
          itemStyle: {},

          emphasis: {
            label: {
              show: true,
            },
          },
          labelLine: {
            show: true,
            showAbove: true,
            length: 20,
          },
          data: [
            {value: 0.36, name: '刑事案件'},
            {value: 0.20, name: '民事案件'},
            {value: 0.18, name: '经济案件'},
            {value: 0.24, name: '其他案件'},
          ]
        },
        {
          name: 'Access From',
          type: 'pie',
          radius: ['10%', '12%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            scale: false,
          },
          labelLine: {
            show: false,
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: '#00E3FF',
          },
          data: [
            {
              value: 1048,
              name: 'Search Engine',
              //   itemStyle:{
              //     color:'#00E3FF'
              // }
              itemStyle: { normal: { color: '#00E3FF' }, emphasis: { color: '#00E3FF' } },
            },
          ],
        },
        {
          name: 'Access From',
          type: 'pie',
          radius: '5%',
          data: [
            {
              value: 1048,
              name: 'Search Engine',
              itemStyle: { normal: { color: '#01091B' }, emphasis: { color: '#01091B' } },
            },
          ],
          emphasis: {
            scale: false,
          },
          label: {
            show: false,
          },
        },
        {
          name: 'Access From',
          type: 'pie',
          radius: ['52%', '53%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            scale: false,
          },
          labelLine: {
            show: false,
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: '#073A48',
          },
          data: [
            {
              value: 1048,
              name: 'Search Engine',
              //   itemStyle:{
              //     color:'#00E3FF'
              // }
              itemStyle: { normal: { color: '#073A48' }, emphasis: { color: '#073A48' } },
            },
          ],
        },
        {
          name: 'Access From',
          type: 'pie',
          radius: ['66%', '67%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            scale: false,
          },
          labelLine: {
            show: false,
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: '#073A48',
          },
          data: [
            {
              value: 1048,
              name: 'Search Engine',
              //   itemStyle:{
              //     color:'#00E3FF'
              // }
              itemStyle: { normal: { color: '#073A48' }, emphasis: { color: '#073A48' } },
            },
          ],
        },
        {
          name: 'Access From',
          type: 'pie',
          radius: ['80%', '81%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            scale: false,
          },
          labelLine: {
            show: false,
          },
          itemStyle: {
            shadowBlur: 2,
            shadowColor: '#61c5ff',
          },
          data: [
            {
              value: 1048,
              name: 'Search Engine',
              //   itemStyle:{
              //     color:'#00E3FF'
              // }
              itemStyle: { normal: { color: '#0b75c6' }, emphasis: { color: '#073A48' } },
            },
          ],
        },
      ],
    }));},[])

  return (
    <div className="chart11">
      <div className="chart">
        <div className="main" ref={divRef}/>
      </div>
      <div className="legend">
        <span style={{background: colors[0]}} />刑事
        <span style={{background: colors[1]}} />民事
        <span style={{background: colors[2]}} />经济
        <span style={{background: colors[3]}} />其他
      </div>
    </div>
  )
}
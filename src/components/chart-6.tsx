import * as echarts from 'echarts';
// @ts-ignore
import {createEchartOptions} from '../shared/create-echart-options';
import {px} from '../shared/px';
// @ts-ignore
import china from '../geo/china.json';
import {useEffect, useRef} from 'react';
import React from 'react';
let tempData = [
  {
    name: '甘肃省',
    value: [231,421],
  },
  {
    name: '青海省',
    value: [23,42],
  },
  {
    name: '四川省',
    value:[23,42],
  },

];
export const Chart6 = () => {

  const divRef = useRef(null);
  const colors = {'青海省': '#BB31F7', '甘肃省': '#15B8FD', '四川省': '#06E1EE'};
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    // @ts-ignore
    echarts.registerMap('CN', china);
    myChart.setOption(createEchartOptions({
      xAxis: {show: false},
      yAxis: {show: false},
      // geo:{
      //   blur:{
      //     itemStyle:{
      //       shadowBlur:10
      //     }
      //   },
      //   // itemStyle: {
      //   //   normal: {
      //   //     areaColor: '#01215c',
      //   //
      //   //
      //   //   },
      //   // }
      //
      // },
      series: [

        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          data: [
            {name: '甘肃省', value: 1},
          ],
          label: {show: false, color: 'white'},
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['甘肃省'],
            shadowColor: '#008cd5',
            shadowBlur: 7,
            // opacity:0.95,
            // shadowOffsetX:-1,
            // shadowOffsetY:-1,
            borderWidth: 1,//设置外层边框
            borderColor:'#069cea',
            borderType:'solid',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          data: [
            {name: '四川省', value: 100},
          ],
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['四川省'],
            borderColor: '#069cea',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          data: [
            {name: '青海省', value: 100},
          ],
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['青海省'],
            borderColor: '#01A7F7',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },

      ]
    }));
  }, []);

  return (
    <div className="bordered 籍贯">
      <h2>全市犯罪人员籍贯分布地</h2>
      <div className="wrapper">
        <div ref={divRef} className="chart"/>
        <div className="legend bordered">
          <span className="icon" style={{background: colors['甘肃省']}}/>甘肃籍
          <span className="icon" style={{background: colors['四川省']}}/>四川籍
          <span className="icon" style={{background: colors['青海省']}}/>青海籍
        </div>
        <div className="notes">此地图仅显示了中国的部分区域</div>
      </div>
    </div>
  );
};
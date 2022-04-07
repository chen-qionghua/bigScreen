import React, {useEffect, useRef} from 'react';
import './home.scss';
import headerBg from "../images/header.png"
import * as echarts from 'echarts';
const  px = (n) => n/ 2420 * (window as any).pageWidth

export const Home = () => {
  const divRef = useRef(null)
  useEffect(() => {  let myChart = echarts.init(divRef.current);
// 绘制图表
    myChart.setOption({

      xAxis: {
        data: ['城关区', '七里河区', '西固区', '安宁区', '红谷区', '永登区','皋兰区','渝中区','兰州新区'],
        axisLabel:{
          fontSize:px(12),
          interval:0,
          formatter(val){
            if(val.length > 2){
              const reallyVal = val.substring(0,2) +'\n' + val.substring(2,val.length);
              console.log(reallyVal)
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
      grid: {
        x: px(40),
        y: px(40),
        x2: px(40),
        y2: px(40),
      },
    });},[])

  return (
    <div className="home">
      <header style={{backgroundImage:`url(${headerBg})`}}></header>
      <main>
        <section className="section1">
          <div className="bordered 管辖统计">
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef}className="chart"></div>
          </div>
        </section>
        <section className="bordered section2"></section>
        <section className="bordered section3"></section>
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>

      </main>
    </div>
  );
};

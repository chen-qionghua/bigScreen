import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {baseChartOptions} from '../shared/base-chart-options';
import {createEchartOptions} from '../shared/create-echart-options';
const  px = (n) => n/ 2420 * (window as any).pageWidth

export const Chart8 = () => {
  const divRef = useRef(null)
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartOptions( {}))},[])

  return (
    <div className="年龄段-图2">
      <div ref={divRef} className="chart"></div>

    </div>
  )
}
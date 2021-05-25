import React, { useState, useEffect } from 'react';
import { Bar } from '@ant-design/charts';

function BarChart(props){
    const [data, setData] = useState()
    
    useEffect(() => {
        asyncFetchData(props.city);
    }, [props.city]);
    const asyncFetchData = (_city) => {
        fetch(`http://127.0.0.1:3001/aurin/projection/info?city=${_city}`)
        .then(res=> res.json())
        .then(json=>{
            setData(json.sort((a,b)=>(b.percentage - a.percentage)))
        })
    }
  var config = {
    data: data,
    xField: 'percentage',
    yField: 'name',
    seriesField: 'name',
    legend: { position: 'top-left' },
  };
  return (
      <>
      {data && (<Bar {...config} />)}
      </>
  )
}

export default BarChart;
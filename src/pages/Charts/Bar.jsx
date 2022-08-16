import React, { useState,useEffect } from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';
import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';
import { barPrimaryXAxis, barPrimaryYAxis} from '../../components'

const Bar = () => {
  const { currentMode } = useStateContext();
  const [Mcount, setMCount] = useState(0);
  const [Acount, setACount] = useState(0);
  const [Rcount, setRCount] = useState(0);
  const [tableData, setTableData] = useState([])
  
  let maicalCount=0;
  let alanCount =0;
  let rebeccaCount=0;
  let today = new Date().toISOString().slice(0, 10)

  useEffect(() => {
    fetch(`http://localhost:3001/api/reservation/all`)
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  const hairS = tableData.map(a => a.hairStylish);
  const Rdate = tableData.map(b => b.resDate);

  
  useEffect(() => {
    for (let i = 0; i < hairS.length; i++) {
        if(hairS[i]==="Maical" && Rdate[i]===today){
            maicalCount++; 
                     
        }else if(hairS[i]==="Alan" && Rdate[i]===today) {
            alanCount++;
        }else if(hairS[i]==="Rebecca"&& Rdate[i]===today){
            rebeccaCount++;
        }
        
    } 
    setMCount(maicalCount)
    setACount(alanCount)
    setRCount(rebeccaCount)
  }  
  )

  const barChartData = [
    
    [
      { x: 'Maical', y: Mcount },
      { x: 'Alan', y: Acount },
      { x: 'Rebecca', y: Rcount },
    ],
    
  ];

  const barCustomSeries = [
    {
      dataSource: barChartData[0],
      xName: 'x',
      yName: 'y',
     
      type: 'Column',
      marker: {
        dataLabel: {
          visible: true,
          position: 'Top',
          font: { fontWeight: '600', color: '#ffffff' },
        },
      },
    },
    
  ];

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Bar" title="total time duration of each stylist per day" />
      <div className=" w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
          <SeriesCollectionDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div><button onClick={(e)=>{console.log(maicalCount)}}>click me</button>
    </div>
  );
};

export default Bar
import React, { useEffect, useState } from 'react';
import { ChartsHeader, Pie as PieChart } from '../../components';

const Pie = () => {
  
  const [tableData, setTableData] = useState([]);
  const[activeCountPre,statusCountAc]=useState();
  const[completedCountPre,statusCountComp]=useState();
  

  let activeCount=0;
  let completedCount=0;
  

  useEffect(() => {
    fetch(`http://localhost:3001/api/reservation/all`)
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  
  const status = tableData.map(b => b.status);

  useEffect(() => {
    for (let i = 0; i < status.length; i++) {
        if(status[i]==='Completed'){
           
          completedCount++;
                   
        }else{
          activeCount++;
        }
    }
    statusCountAc((activeCount/(completedCount+activeCount))*100);
    statusCountComp((completedCount/(completedCount+activeCount))*100);
  })

  const pieChartData = [
    { x: 'Complete', y:completedCountPre , text: completedCount },
    { x: 'Active', y: activeCountPre, text: activeCount },
  ]


  return(
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Pie" title="Reservation Made verses Completed Reservations" />
    <div></div>
    <div className="w-full">
      <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
    </div>
  </div>
  )
};

export default Pie
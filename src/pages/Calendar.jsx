import React, { useState ,useEffect} from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from '../data/dummy';
import { Header } from '../components';

const Calendar = () => {
  const [tableData, setTableData] = useState([])

  

  useEffect(() => {
    fetch(`http://localhost:3001/api/reservation/all`)
      .then((data) => data.json())
      .then((data) => setTableData(data))
      console.log(tableData)

  }, [])

  

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendar" />
        <ScheduleComponent
          height="650px"
          selectedDate={new Date(2022, 0, 10)}
          eventSettings={{ dataSource: tableData }}
        >
          <ViewsDirective>
            { ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => <ViewDirective key={item} option={item} />)}
          </ViewsDirective>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
        </ScheduleComponent>
    </div>
  )
}

export default Calendar
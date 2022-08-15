import React,  { useEffect,useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Client = () => {
  const nevigate=useNavigate();
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/api/client/all`)
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  const redirectCrete=()=>{
    nevigate('/create-client')
  }

  return (
    <div>
     
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      
     
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={tableData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
         <div className="flex items-center justify-between" onSubmit={redirectCrete}>
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            onClick={redirectCrete}>
              Create Client
          </button>
        </div>
        
        <br/>
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  </div>
  );
};

export default Client
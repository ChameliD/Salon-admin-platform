import React, { useEffect, useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, editing,Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { useNavigate } from 'react-router-dom';
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Resevation = () => {
  const nevigate=useNavigate();
  const [tableData, setTableData] = useState([]);
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };

  useEffect(() => {
    fetch(`http://localhost:3001/api/reservation/all`)
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  const redirectCrete=()=>{
    nevigate('/create-reservation')
  }
  
const handleClick = event => {
  console.log(event.currentTarget.id);
};
 
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Reservation" />
      <GridComponent
        id="gridcomp"
        dataSource={tableData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
        toolbar={toolbarOptions}
      
        
      >
         <div className="flex items-center justify-between" onSubmit={redirectCrete}>
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            onClick={redirectCrete}>
              New Reservation
          </button>
        </div>
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  );
};

export default Resevation
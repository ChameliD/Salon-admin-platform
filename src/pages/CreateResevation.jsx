import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
const baseUrl="http://localhost:3001/api";

const MAX_APPOINMENTS=8;



const CreateResevation = () => {
    
    const nevigate=useNavigate();
    const [client, setClient] = useState('');
    const [hairStylish, setHairStylish] = useState('');
    const [resDate, setResDate] = useState('');
    const [resTimeStart, setResTimeStart] = useState('');
    const [resTimeEnd, setResTimeEnd] = useState('');
    const [status, setstatus] = useState('');
    
    const[error,setError]=useState(false);
    let maicalHr=0; 
    let alanHr=0; 
    let rebeccaHr=0;


    const [tableData, setTableData] = useState([])

    useEffect(() => {
      fetch(`http://localhost:3001/api/reservation/all`)
        .then((data) => data.json())
        .then((data) => setTableData(data))
  
    }, [])

    const hairS = tableData.map(a => a.hairStylish);
    const Rdate = tableData.map(b => b.resDate);
    const Rtime = tableData.map(c => c.resTimeStart);
    
    

    const postData = (e) => {
        axios.post(`http://localhost:3001/api/reservation`, {
            hairStylish,
            client,
            resDate,
            resTimeStart,
            resTimeEnd,
            status,
        })
    }

    const redirectCrete=(e)=>{
        nevigate('/reservation')
    }

    const handleSubmit=(e)=>{
      for (let i = 0; i < hairS.length; i++) {
        
        if(hairS[i]===hairStylish && Rdate[i]===resDate){
          if( Rtime[i]===resTimeStart){
            setError(true);
            return;
          }
          else if (hairS[i]==="Maical"){
            maicalHr++
            console.log(maicalHr)
          }
          else if(hairS[i]==="Alan"){
            alanHr++
          }
          else if(hairS[i]==="Rebecca"){
            rebeccaHr++
          }
        }
      }

      if(maicalHr>MAX_APPOINMENTS||alanHr>MAX_APPOINMENTS||rebeccaHr>MAX_APPOINMENTS){
            setError(true);
            return;
        }
      else{   
        setError(false);
            postData();
            redirectCrete();
          }
      }

    return(
      <div><div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <div className="w-full max-w-xs">
        {error && <ErrorMessage>Maximum appointments has exceeded or the Time slot for the stylish 
          has already booked</ErrorMessage>}
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" 
            onSubmit={(e)=>{handleSubmit()}}>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hairStylish">
              Haire Stylish
            </label>
            
            <div> 
 
                <select 
                  className="shadow appearance-none border rounded w-full py-2 px-3 
                  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
                  id="hairStylish" 
                  onChange={(e) => setHairStylish(e.target.value)} >Hair Stylish

                        <option value=""></option>
                        <option value="Maical">Maical</option>
                        <option value="Alan">Alan</option>
                        <option value="Rebecca">Rebecca</option>
                        
                </select> 
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="client">
              Client Name
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="client" 
              type="text" 
              onChange={(e) => setClient(e.target.value)}
              placeholder="client"/>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resDate">
              Resevation Date
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="resDate" 
              type="text" 
              onChange={(e) => setResDate(e.target.value)}
              placeholder="resDate"/>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resTimeStart">
                Resevation Start Time
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="resTimeStart" 
              type="text" 
              onChange={(e) => {setResTimeStart(e.target.value)}}
              placeholder="resTimeStart"/>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resTimeEnd">
                Resevation End Time
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="resTimeEnd" 
              type="text" 
              onChange={(e) => {setResTimeEnd(e.target.value)}}
              placeholder="resTimeEnd"/>
          
          </div>
          <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
          Status
            </label>
            <select 
              className="shadow appearance-none border rounded w-full py-2 px-3 
              text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="status" 
              onChange={(e) => setstatus(e.target.value)} >Status
                        
                        <option value=""></option>
                        <option value="Active">Active</option>
                        <option value="Completed">Completed</option>            
            </select> 
          </div>

          <div className="flex items-center justify-between">
            <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type="submit" >
              Create Resevation
            </button>
          
          </div>
          
        
        </form>
        </div>
        </div>
        
      </div>
)}

export default CreateResevation;
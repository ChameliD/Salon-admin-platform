import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const baseUrl="http://localhost:3001/api"


const CreateResevation = () => {
    
    const nevigate=useNavigate();
    const [client, setClient] = useState('');
    const [hairStylish, setHairStylish] = useState('');
    const [resDate, setResDate] = useState('');
    const [resTimeStart, setResTimeStart] = useState('');
    const [resTimeEnd, setResTimeEnd] = useState('');
   
    const postData = (e) => {
        
        
        axios.post(`http://localhost:3001/api/reservation`, {
            hairStylish,
            client,
            resDate,
            resTimeStart,
            resTimeEnd,
        })
    }

    const redirectCrete=()=>{
      nevigate('/reservation')
    }

    return(
      <div><div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <div className="w-full max-w-xs">
            <br/><br/><br/>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e)=>{postData(e); redirectCrete(e)}}>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hairStylish">
              Haire Stylish
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="hairStylish" 
              type="text" 
              onChange={(e) => setHairStylish(e.target.value)}
              placeholder="hairStylish"/>
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
              onChange={(e) => setResTimeStart(e.target.value)}
              placeholder="resTimeStart"/>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resTimeEnd">
                Resevation ENd Time
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="resTimeEnd" 
              type="text" 
              onChange={(e) => setResTimeEnd(e.target.value)}
              placeholder="resTimeEnd"/>
          </div>
          
          <div className="flex items-center justify-between">
            <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type="submit" >
              Create Client
            </button>
          
          </div>
          
        
        </form>
        </div>
        </div>
      </div>
)}

export default CreateResevation;
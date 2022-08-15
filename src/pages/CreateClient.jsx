import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const baseUrl="http://localhost:3001/api"


const CreateClient = () => {
    
    const nevigate=useNavigate();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

   
    const postData = (e) => {
        
        
        axios.post(`http://localhost:3001/api/client`, {
            firstName,
            lastName,
            email,
            phoneNumber
        })
    }

    const redirectCrete=()=>{
      nevigate('/client')
    }

    return(
      <div><div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <div className="w-full max-w-xs">
            <br/><br/><br/>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e)=>{postData(e); redirectCrete(e)}}>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="firstName" 
              type="text" 
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="firstName"/>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="lastName" 
              type="text" 
              onChange={(e) => setLastName(e.target.value)}
              placeholder="lastName"/>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="PhoneNumber" 
              type="text" 
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="PhoneNumber"/>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              E mail
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="email" 
              type="email" 
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"/>
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

export default CreateClient;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const nevigate=useNavigate()
  const RedirectTO=()=>{
    nevigate('/sendMail')
  }
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
          
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center"> 
        
        <div className="flex gap-10 flex-wrap justify-center">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
            <div className="flex justify-between">
              <p className="font-semibold text-xl">Welcome to the Dashboard</p>  
            </div>
        </div>

          <div className="flex gap-10 flex-wrap justify-center">    
              <div className="flex justify-between">
                <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={RedirectTO}>
                    Invite to an admin
                </button>
              
              </div>
          </div>

          


        </div> 
      </div>
    </div>
  </div>
)}

export default Dashboard
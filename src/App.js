import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeComponents } from './Components/Home/HomeComponents'
import Login from './Login'
import Register from './Register'
import './App.css'

const App = () => {
	return (
		<div>
			<h1 className='underline text-3xl'>HomeComponents</h1>
			<BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeComponents/>}/>
          <Route path="/login" element={ <Login/> }></Route>
          <Route path="/register" element={<Register/>} />
        </Routes>
			</BrowserRouter>
		</div>
	)
}

export default App

import {React,useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Main from './Main'

import{NavBar,Footer,SideBar} from './components'
import{Calendar,Client,Dashboard,Resevation,Pie,Bar} from './pages'

const App = () => {
	return (
		<div>
			
			<BrowserRouter>
				<Routes>
					{/*Login and sign in */}
					<Route path="/login" element={ <Login/> }></Route>
					<Route path="/register" element={<Register/>} />

					{/*Side bar and nev bar*/}
					<Route path='/' element={<Main/>}/>

					{/*Dashboard */}
					<Route path='/dashboard' element={<Dashboard/>}/>

					{/*Pages*/}
					<Route path='/client' element={<Client/>}/>
					<Route path='/reservation' element={<Resevation/>}/>

					{/*Apps*/}
					<Route path='/calendar' element={<Calendar/>}/>

					{/*Charts*/}
					<Route path='/pie' element={<Pie/>}/>
					<Route path='/bar' element={<Bar/>}/>

				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App

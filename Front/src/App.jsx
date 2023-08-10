// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './navbar'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'


function App() {

  return (
  <>
   <Navbar />
    <Routes>
      {/* <Route path='/' element={<App/>}></Route> */}
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Dashboard' element={<Dashboard/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/About' element={<About/>}></Route>
    </Routes>
   </>)
 
}

export default App

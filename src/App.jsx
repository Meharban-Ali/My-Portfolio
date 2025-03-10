import React, { useState, useEffect } from 'react';
import './App.css'
import { Footer } from './components/Footer'
import { NavBar } from './components/Home/NavBar'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import {Routes,Route} from "react-router-dom"
import { Projects } from './pages/Projects'
import { Service } from './pages/Service'
import { Login } from './pages/Login'
import { Registration } from './pages/Registration'
import { Profiles } from './pages/Profiles'

function App() {

  return (
    <>
    <NavBar/>
    <div className='pt-10'>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Service/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Registration' element={<Registration/>}/>
      <Route path='/Profiles' element={<Profiles/>}/>
    </Routes>
    </div>
    <Footer/>
    
    </>
  )
}

export default App

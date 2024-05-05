import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Marsrover from '../pages/Marsrover'
import APOD from '../pages/APOD'
import Signup from '../Signup'
import Login from '../Login'
import {auth} from '../Firebase'
import Landingpage from '../pages/Landingpage'

const Router = () => {

  
  return (
    <Routes>

        <Route path='/' element={<Landingpage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/marsrover' element={<Marsrover/>}/>
        <Route path='/apod' element={<APOD/>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        
    </Routes>
  )
}

export default Router
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Marsrover from '../pages/Marsrover'
import APOD from '../pages/APOD'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/marsrover' element={<Marsrover/>}/>
        <Route path='/daily' element={<APOD/>}/>
        
    </Routes>
  )
}

export default Router
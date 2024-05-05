import React from 'react'
import { useState,useEffect } from 'react'
import { auth } from '../Firebase'
import Router from '../router/Router'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Layout = () => {
  const [user,setUser] =  useState(null);

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((user)=>{
      setUser(user)
    })

    return()=> unsubscribe();
  },[])

  return (
    <div>
        <Navbar user={user}/>
        <Router/>
        <Footer/>
    </div>
  )
}

export default Layout
import React from 'react'
import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'
import { Outlet } from 'react-router-dom'


const Applayout = () => {
  return (
    <>
     <Header/>
    <Outlet/>
     <Footer/>
     </>
   
  )
}

export default Applayout
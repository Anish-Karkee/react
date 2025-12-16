import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import NavBar from '../components/common/NavBar'

const Layout = () => {
  return (
    <>
    <div className="sticky top-0 z-10">
        <NavBar />
      </div>
      <Outlet />
      <Footer/>

      
    </>
  )
}

export default Layout

import React from 'react'
import NavBar from '../components/common/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/common/Footer'

const AuthLayout = () => {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default AuthLayout

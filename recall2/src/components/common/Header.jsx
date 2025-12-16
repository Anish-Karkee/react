import React from 'react'
import NavBar from './NavBar'
import Logo from './Logo'
import Button from './Button'
const Header = () => {
  return (
    <>
    <header className="bg-amber-200">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
       <Logo/>
      </div>
      <div className="flex  items-center gap-6">
        <NavBar/>
     
      </div>
    </div>
    </div>
    </header>
  
    </>
   )    
}

export default Header

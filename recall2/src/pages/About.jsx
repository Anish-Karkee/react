import React from 'react'
import { Link } from "react-router-dom"
import Button from '../components/common/Button'
import rolex3 from "../assets/images/rolex3.jpg"
const AboutPage = () => {
  return (
    <>
    
  {/* ABOUT Section */}
<div className="w-full lg:h-screen h-full m-auto flex items-center justify-cetner py-20 bg-white ">
  <div className="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
    {/*  */}
    <div className="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center ">
      <div className="relative">
       
        {/* Main Img */}
        <img className="rounded-full relative object-cover right-0 lg:w-120 lg:h-120 sm:w-100 sm:h-100 w-48 h-48 " src={rolex3} alt="About us" />
      </div>
      {/*  */}
      <div className="lg:w-[60%] p-4 w-full h-full  flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl">
        <h2 className="text-4xl text-center text-orange-500 dark:text-orange-500 font-bold px-4 py-1 md:mt-0 mt-10">
          About Us
        </h2>
        <p className="md:text-3xl text-2xl text-center text-white dark:text-black font-bold my-5">We are
          AZK Watch store
        </p>
        <p className="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 dark:text-black">At AZK Watch store,
         We believe a Rolex is more than just a watch; it is a legacy—a symbol of enduring achievement and timeless design. 
         Our mission is to connect discerning collectors and new owners with the world's most coveted timepieces, 
         ensuring every transaction is built on absolute confidence and transparency.
        </p>
        {/* button */}
        <Link to="/product"><Button text="View Products" color="text-white bg-black hover:text-black hover:scale-105 hover:shadow-lg transition duration-300"/></Link>
      </div>
    </div>
  </div>
</div>
    <div className="min-h-screen flex items-center justify-center">
    <div className="sm:w-1/2 p-5 text-center">
      <h2 className="my-4 font-bold text-3xl sm:text-4xl">
      About <span className="text-orange-600">The Store</span>
      </h2>

      <p className="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 text-black">
      This demo e-commerce website showcases a modern online shopping experience designed to be simple, responsive, and user-friendly. 
      It features a clean layout with product listings, detailed product pages, a shopping cart system, and a smooth checkout flow to demonstrate how an online store works from browsing to purchase.
      The website focuses on intuitive navigation, fast loading performance, and mobile-first design, making it suitable for all devices. It highlights essential e-commerce functionalities such as product filtering, search options, pricing display, and order summary, providing a realistic simulation of a real-world online store.
      This project is built as a demonstration of front-end and back-end integration concepts, UI/UX design principles, and modern web development practices. It is intended for learning, testing, and portfolio purposes only and does not process real payments or orders.
      
      </p>
    </div>
    </div>
    
    </>
  )
}

export default AboutPage

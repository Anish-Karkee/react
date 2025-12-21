import React from 'react'
import { Link } from "react-router-dom"
import Button from '../components/common/Button'
import pipedbike from "../assets/images/pipedbike.jpg"
import meetup from '../assets/images/meetup.png'
import president from '../assets/images/president.png'
const AboutPage = () => {
  return (
    <>
    <div className="w-full lg:h-screen h-full m-auto flex items-center justify-cetner px-14 py-8 bg-white ">
  <div className="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
    {/*  */}
    <div className="lg:w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center ">
      <div className="relative">
       
        {/* Main Img */}
        <img className="rounded-lg relative object-cover right-0 lg:w-120 lg:h-120 sm:w-100 sm:h-100 w-48 h-48 " src={president} alt="About us" />
      </div>
      {/*  */}
      <div className="lg:w-[60%] p-4 w-full h-full  flex flex-col justify-center items-centre sm:px-6 px-4 rounded-xl">
        <h2 className="text-4xl text-center text-blue-500 dark:text-blue-500 font-bold px-4 py-1 md:mt-0 mt-10">
          President
        </h2>
        <p className="md:text-3xl text-2xl text-center text-white dark:text-black font-bold ">
          MR. REX  <span className="text-orange-500">Dangi</span>
        </p>
        <p className="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 dark:text-black">
         
        
          <span className='font-serif'>“Young Enfielders was not created just to ride motorcycles, but to build a brotherhood that rides with discipline, respect, and responsibility. Every ride we take represents our passion for Royal Enfield and our commitment to safe, meaningful riding. Together, we ride as one family, supporting each other on and off the road.”
          </span>
            <br/>
            <br/>
           The founder & Leader of Young Enfielders MR. Rex Dangi AKA IMMORTAL REX.
        </p>
     
      </div>
    </div>
  </div>
</div>
  {/* ABOUT Section */}
<div className="w-full lg:h-screen h-full m-auto flex items-center justify-cetner py-20 bg-white ">
  <div className="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
    {/*  */}
    <div className="lg:w-[90%] w-full mx-auto flex flex-col  lg:gap-6 lg:flex-row-reverse items-center justify-center ">
      <div className="relative">
       
      {/* Main Img */}
        <img className="rounded-b-full relative object-cover right-0 lg:w-120 lg:h-120 sm:w-100 sm:h-100 w-48 h-48 " src={pipedbike} alt="About us" />
      </div>  
      {/*  */}
      <div className="lg:w-[60%] p-4 w-full h-full  flex flex-col justify-center items-centre sm:px-6 px-4 rounded-xl">
        <h2 className="text-4xl text-center text-yellow-500 dark:text-yellow-500 font-bold px-4 py-1 md:mt-0 mt-10">
          About Us
        </h2>
        <p className="md:text-3xl text-2xl text-center text-white dark:text-black font-bold ">
          We are <span className="text-orange-600">Enfeilders</span>
        </p>
        <p className="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 dark:text-black">Young Enfielders is a dedicated Royal Enfield bikers group based in eastern Nepal, formed by riders who share a deep passion for the iconic Bullet and the lifestyle it represents. United by the unmistakable thump of Royal Enfield engines, our group stands for freedom, adventure, and the true spirit of motorcycling. What began as a small circle of riders has grown into a close-knit brotherhood built on trust, respect, and a shared love for the open road. For us, riding is more than travel—it is an experience that connects people, cultures, and landscapes. We organize regular rides, tours, and meet-ups to explore the diverse terrain of eastern Nepal, from smooth highways to challenging hill roads. Safety, discipline, and teamwork guide every ride. Young Enfielders promotes a responsible biking culture by encouraging proper riding gear, safe practices, and mutual support. Beyond motorcycles, our group is about friendship and community, turning fellow riders into lifelong friends while proudly carrying forward the legacy and timeless thump of Royal Enfield.
        </p>
        {/* button */}
        <Link to="/product"><Button text="Products" color="text-blue-300 bg-black hover:text-white hover:scale-105 hover:shadow-lg transition duration-300 mt-10"/></Link>
      </div>
    </div>
  </div>
</div>
  <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-4">

  {/* ABOUT STORE Section */}
<div className="w-full lg:h-screen h-full m-auto flex items-center justify-center py-20 bg-white">
  <div className="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
    
    <div className="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center">
      
      {/* Left Image */}
      <div className="relative">
        <img
          className="rounded-lg object-cover lg:w-120 lg:h-120 sm:w-100 sm:h-100 w-48 h-48 shadow-lg"
          src={meetup}
          alt="About the store"
        />
      </div>

      {/* Right Content */}
      <div className="lg:w-[60%] p-4 w-full h-full flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl">
        <h2 className="text-4xl text-center text-black font-bold px-4 py-1 md:mt-0 mt-6">
          Our <span className="text-orange-600">Mission</span>
        </h2>

        <p className="md:text-xl sm:text-lg text-base mt-4 text-justify sm:px-2 dark:text-black">
          To unite Royal Enfield enthusiasts in eastern Nepal under a culture of respect, discipline, and adventure, creating memorable riding experiences while promoting safe and responsible motorcycling. Fostering lifelong friendships through shared rides and experiences.Celebrating the spirit of Royal Enfield and the freedom of the open road.
        </p>
        <h2 className="text-4xl text-center text-black font-bold px-4 py-1 md:mt-0 mt-10">
          Our <span className="text-orange-600">Vision</span>
        </h2>

        <p className="md:text-xl sm:text-lg text-base mt-4 text-justify sm:px-2 dark:text-black">
          To be the most respected and inspiring Royal Enfield bikers community in Nepal, known for our brotherhood, exploration of the country's landscapes, and commitment to a positive riding culture. Promoting safe riding practices and respect for all road users. Encouraging members to explore Nepal's diverse terrains with courage and enthusiasm. Upholding respect for fellow riders, communities, and the environment in every journey.
        </p>
        
      </div>

    </div>
  </div>
</div>

</div>



</>

 )
}

export default AboutPage

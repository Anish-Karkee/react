import React from 'react';
import { Link } from "react-router-dom"
import Button from '../components/common/Button';
import enfilders from '../assets/images/enfilders.png'
import gmandu from '../assets/images/gmandu.jpg'
import badaugustus from '../assets/images/badaugustus.png'
import ride from '../assets/images/ride.png'


const HomePage = () => {
  return (
    <>
      
      <div className="bg-white flex relative items-center z-0 overflow-hidden px-14">
        <div className="container mx-auto px-6 flex ">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span className="w-20 h-2 bg-white dark:bg-white mb-12">
            </span>
            <h1 className="font-bebas-neue uppercase text-6xl sm:text-6xl font-black flex flex-col leading-none dark:text-black text-gray-800">
              Young Enfielders <span className='text-blue-700'>Born To Ride</span>
            
            </h1>
            <p className="md:text-xl sm:text-lg text-base mt-4 text-justify sm:px-2 dark:text-black">
              Young Enfielders is a brotherhood of Royal Enfield riders based in the eastern side of Nepal, brought together by a shared passion for the iconic Bullet and the freedom of the open road. We represent discipline, respect, and the true spirit of motorcycling. More than just a bikers group, Young Enfielders is a community where every ride builds stronger bonds and every journey creates stories. From city streets to mountain highways, we ride together to keep the legacy of the thump alive. Our rides are about exploration, brotherhood, and respect for the road and each other. Every journey we take strengthens our bond and reflects the spirit of freedom that defines Young Enfielders. At Young Enfielders, every rider is family and every ride is a shared experience. Through long rides and local journeys, we celebrate friendship, culture, and the unmistakable thump that connects us all.
            </p>
            <div className="flex items-start mt-8 gap-4">
             <Link to="/about"><Button text="Read More" color="text-blue-300 bg-black hover:text-white hover:scale-105 hover:shadow-lg transition duration-300"/></Link>
            </div>
          </div>
          <div className="hidden sm:block sm:w-2/3 lg:w-8/13 py-17 px-29">
            <img src={enfilders} className="rounded-t-lg max-w-xs md:max-w-sm float-right relative left-20" />
            <img src={gmandu} className="rounded-b-lg max-w-xs md:max-w-sm float-right relative left-20" />
          </div>
        </div>
      </div>
      <div className="max-w-5xl px-18 text-right ">
      <div className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* Left Image */}
        <div className="md:w-1/2 w-full relative left-0 px-1 flex gap-4 ">
          <img
            src={badaugustus}
            alt="Find your home"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
          <img
            src={ride}
            alt="Find your home"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-full text-center md:text-left relative left-120">
          <h1 className="text-4xl font-bold mt-2 mb-6">
            Follow your passion
            <br />
            by joining Us!!
          </h1>

          <p className="leading-relaxed md:text-xl sm:text-lg text-base mt-4 text-justify sm:px-2 dark:text-black">
            Anyone from anywhere can be part of our young enfielders but you must meet our criteria.
            Our criteria are:
            <br />
            - Must be 18 yeays above. 
            <br/>
            - You must have license. 
            <br/>
            - Documents of bike should be all cleared.
            <br/>
            - You must obey your hirearcy.
          </p>

          <p className="mb-8 mt-4 leading-relaxed">
            Oh, and the best bit...
            <span className="text-orange-500 font-bold"> It's free!</span>
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <Link to="/signup">
              <Button
                text="Sign-Up"
                color="text-blue-300 bg-black hover:text-white hover:scale-105 hover:shadow-lg transition duration-300"
              />
            </Link>
          </div>
        </div>

      </div>
    </div>

  </div>



    </>
  );
};

export default HomePage;

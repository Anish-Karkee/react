import React from 'react';
import { Link } from "react-router-dom"
import Button from '../components/common/Button';
import rolex2 from '../assets/images/rolex2.png'


const HomePage = () => {
  return (
    <>
      
      <div className="bg-white flex relative items-center z-0 overflow-hidden px-13">
        <div className="container mx-auto px-6 flex relative py-16">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span className="w-20 h-2 bg-white dark:bg-white mb-12">
            </span>
            <h1 className="font-bebas-neue uppercase text-6xl sm:text-6xl font-black flex flex-col leading-none dark:text-black text-gray-800">
              Be on Time
            
            </h1>
            <p className="text-sm sm:text-base dark:text-black">
              Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place. Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
            </p>
            <div className="flex mt-8 gap-4">
             <Link to="/product"><Button text="View Specs" color="text-white bg-black hover:text-black hover:scale-105 hover:shadow-lg transition duration-300"/></Link>

             <Link to="/about"><Button text="Read More" color="text-white bg-black hover:text-black hover:scale-105 hover:shadow-lg transition duration-300"/></Link>
            </div>
          </div>
          <div className="hidden sm:block sm:w-2/3 lg:w-8/13">
            <img src={rolex2} className="max-w-xs md:max-w-sm float-right relative left-20" />
          
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-12 px-4 text-center">
  <div className="w-full max-w-3xl mx-auto">
    
    <h1 className="text-4xl font-bold mt-2 mb-6">
      Helping you find your new home;<br />
      by simplifying the search.
    </h1>

    <p className="px-4 leading-relaxed">
      Propiti provides you with a quick, simple way to reach multiple estate
      agents.<br />
      Allowing you to spend less time trawling through property portals,<br />
      giving you more time on the other things you enjoy.
    </p>

    <p className="mb-8 mt-4 px-4 leading-relaxed">
      Oh, and the best bit...
      <span className="text-orange-500 font-bold"> It’s free!</span>
    </p>

    {/* Centered Button */}
    <div className="flex justify-center">
      <Link to="/signup">
        <Button
          text="Sign-Up"
          color="text-white bg-black hover:text-black hover:scale-105 hover:shadow-lg transition duration-300"
        />
      </Link>
    </div>

  </div>
</div>


    </>
  );
};

export default HomePage;

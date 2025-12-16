import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/common/Button'

const TestimonialPage = () => {
  return (
    <>
   <section id="about" className="py-20 md:px-22 lg:px-20 bg-[#fefcfc]">
  <div className="container mx-auto px-4">
    <div className="mb-12">
      {/* Heading */}
      <h6 className="text-4xl font-bold text-black  mb-2" data-aos="fade-down">
        Testimony
      </h6>
      <h3 className="mb-4 text-3xl font-stretch-50% text-black section-title" data-aos="fade-down">
        Capturing Moments That Last Forever
      </h3>
      <p className="mb-8 max-w-3xl text-black" data-aos="fade-down">
        With over a decade of experience in professional photography,
        we've mastered the art of storytelling through our lens. Our passion lies in capturing authentic moments and turning them into timeless memories.
      </p>
      {/* About Cards Section */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 */}
        <div className="rounded-lg  bg-[#ffffff] p-6 text-center">
          <h4 className="mb-2 text-3xl font-bold text-orange-400">10+</h4>
          <p className="text-black">Years Experience</p>
        </div>
        <div className="rounded-lg bg-[#ffffff] p-6 text-center">
          <h4 className="mb-2 text-3xl font-bold text-orange-400">100+</h4>
          <p className="text-black">Projects</p>
        </div>
        <div className="rounded-lg  bg-[#ffffff] p-6 text-center">
          <h4 className="mb-2 text-3xl font-bold text-orange-400">100+</h4>
          <p className="text-black">Clients satisfaction</p>
        </div>
        <div className="rounded-lg  bg-[#ffffff] p-6 text-center">
          <h4 className="mb-2 text-3xl font-bold text-orange-400">24/7</h4>
          <p className="text-black">Costumer Services</p>
        </div>
      </div>
    </div>
    {/* Buttons Section */}
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-8" data-aos="fade-up">
      <Link to="/about"><Button text="Read More" color="text-white bg-black hover:text-black hover:scale-105 hover:shadow-lg transition duration-300"/></Link>
      
      <Link to="/contact" ><Button text="Contact" color="text-white bg-black hover:text-black hover:scale-105 hover:shadow-lg transition duration-300"/>
      </Link>
    </div>
  </div>
</section>

    </>
  )
}

export default TestimonialPage

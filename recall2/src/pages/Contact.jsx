import React from 'react'
import Button from '../components/common/Button'

const ContactPage = () => {
  return (
    <>
     <div className='px-20'>
  {/* Contact Section */}
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  <section className="contact-section">
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Contact Info */}
        <div className="p-8 bg-white text-black">
          <h2 className="text-2xl text-black mb-8 relative pb-4">
            Contact Information
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-black" />
          </h2>
          {/* Location */}
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 bg-blue-500 flex items-center justify-center rounded-full text-xl">
              <i className="fas fa-map-marker-alt" />
            </div>
            <div>
              <h3 className="text-lg mb-1">Our Location</h3>
              <p className="text-black leading-relaxed">
                Itahari
              </p>
            </div>
          </div>
          {/* Phone Numbers */}
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 bg-blue-500 flex items-center justify-center rounded-full text-xl">
              <i className="fas fa-phone-alt" />
            </div>
            <div>
              <h3 className="text-lg mb-1">Phone Numbers</h3>
              <p className="text-black leading-relaxed">
                <a href="tel:+978589658" className="hover:text-blue-400">+977 9812377759</a><br />
                <a href="tel:+748596255" className="hover:text-blue-400">+977 9812307779</a>
              </p>
            </div>
          </div>
          {/* Email */}
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 bg-blue-500 flex items-center justify-center rounded-full text-xl">
              <i className="fas fa-envelope" />
            </div>
            <div>
              <h3 className="text-lg mb-1">Email Address</h3>
              <p className="text-black leading-relaxed">
                <a href="mailto:kuldeepprajapati2111@gmail.com" className="hover:text-blue-400">azk522@gmail.com</a><br />
              </p>
            </div>
          </div>
          {/* Social Links */}
          <div className="flex gap-4 mt-8">
            <a href="#" className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full text-white transition duration-300 hover:bg-blue-500 transform hover:-translate-y-1">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full text-white transition duration-300 hover:bg-red-800 transform hover:-translate-y-1">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full text-white transition duration-300 hover:bg-blue-400 transform hover:-translate-y-1">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full text-white transition duration-300 hover:bg-blue-700 transform hover:-translate-y-1">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        {/* Contact Form */}
        <div className="p-8">
          <h2 className="text-2xl text-black mb-8 relative pb-4">
            Send Us a Message
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500" />
          </h2>
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
              <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition" required />
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
              <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition" required />
            </div>
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
              <input type="tel" id="phone" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition" />
            </div>
            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
              <input type="text" id="subject" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition" />
            </div>
            {/* Message */}
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
              <textarea id="message" className="w-full p-3 border border-gray-300 rounded-md min-h-[150px] resize-y focus:outline-none focus:ring-2 focus:ring-blue-300 transition" required defaultValue={""} />
            </div>
            {/* Submit Button */}
            <Button  text="Send text" color="text-white bg-black hover:text-black hover:scale-105 hover:shadow-lg transition duration-300"/> 
            
          </form>
        </div>
      </div>
    </div>
  </section>
</div>





    </>
  )
}

export default ContactPage

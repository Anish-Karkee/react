import React from 'react'
import Button from '../components/common/Button';
import gag from '../assets/images/gag.png'
import anniride2 from '../assets/images/anniride2.png'
import ktm from '../assets/images/ktmride.png'
import cig from '../assets/images/bjunction.png'
import char from '../assets/images/charity2.png'
import boob from '../assets/images/soloride.png'
import dton from '../assets/images/dtownride.png'
import kk  from '../assets/images/chopper.png'
const Gallary = () => {
  return (
    <>
   {/* Photo Gallery Section */}
<section className="py-8 bg-white">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">Captured Moments</h2>
      <p className="max-w-2xl mx-auto text-gray-400 mt-6 text-lg">A visual journey through our most memorable events and projects</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-15">
      {/* Gallery Item 1 */}
      <div className="group relative overflow-hidden rounded-lg aspect-square">
        <img src={gag} alt="Concert crowd" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white text-xl font-bold">1st Anniversary</h3>
            <p className="text-white/80 mt-1">July 2025</p>
          </div>
        </div>
      </div>
      {/* Gallery Item 2 */}
      <div className="group relative overflow-hidden rounded-lg aspect-square">
        <img src={anniride2} 
        alt="Team building" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white text-xl font-bold">Team Retreat</h3>
            <p className="text-white/80 mt-1">May 2024</p>
          </div>
        </div>
      </div>
      {/* Gallery Item 3 */}
      <div className="group relative overflow-hidden rounded-lg aspect-square">
        <img src={cig} alt="Office meeting" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white text-xl font-bold">Strategy Workshop</h3>
            <p className="text-white/80 mt-1">April 2023</p>
          </div>
        </div>
      </div>
      {/* Gallery Item 4 */}
      <div className="group relative overflow-hidden rounded-lg aspect-square">
        <img src={char} alt="Team celebration" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white text-xl font-bold">Charity Work</h3>
            <p className="text-white/80 mt-1">March 2020</p>
          </div>
        </div>
      </div>
      {/* Gallery Item 5 */}
      <div className="group relative overflow-hidden rounded-lg aspect-square">
        <img src={ktm} alt="Conference" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-llinear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white text-xl font-bold">Creating community</h3>
            <p className="text-white/80 mt-1">February 2024</p>
          </div>
        </div>
      </div>
      {/* Gallery Item 6 */}
      <div className="group relative overflow-hidden rounded-lg aspect-square">
        <img src={boob} alt="Volunteering" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white text-xl font-bold">SOLO</h3>
            <p className="text-white/80 mt-1">January 2019</p>
          </div>
        </div>
      </div>
      {/* Gallery Item 7 */}
      <div className="group relative overflow-hidden rounded-lg aspect-square">
        <img src={dton} alt="Award ceremony" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white text-xl font-bold">Duo Rides</h3>
            <p className="text-white/80 mt-1">December 2022</p>
          </div>
        </div>
      </div>
      {/* Gallery Item 8 */}
      <div className="group relative overflow-hidden rounded-lg aspect-square">
        <img src={kk} alt="Office party" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white text-xl font-bold">Holiday</h3>
            <p className="text-white/80 mt-1">November 2022</p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center py-8 ">
     
      <Button className="flex items-center gap-4" color="text-blue-300 bg-black hover:text-white hover:scale-105 hover:shadow-lg transition duration-300"
      label='Load More'
      />
      
    </div>
  </div>
</section>

      
    </>
  )
}

export default Gallary;
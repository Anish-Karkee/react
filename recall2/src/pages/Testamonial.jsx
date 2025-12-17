import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/common/Button'

const TestimonialPage = () => {
  return (
    <>
   <section id="about" className="py-20 md:px-22 lg:px-20 bg-[#ffffff]">
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
    <div class="py-16 bg-white">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* <!-- Section Header --> */}
        <div class="mb-12 text-center">
            <h2 class="mb-4 text-3xl font-bold sm:text-4xl">
                What Users Are Saying
            </h2>
            <p class="max-w-2xl mx-auto text-lg text-gray-600">
                Hear from tools that have successfully listed on our platform
            </p>
        </div>

        {/* <!-- Testimonial Cards Grid --> */}
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* <!-- Testimonial 1 --> */}
            <div class="p-6 bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div class="flex items-start mb-4">
                    <div class="shrink-0 mr-4">
                        <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/6.jpg" alt="Profile image" />
                    </div>
                    <div>
                        <h3 class="font-bold">SynthGen AI</h3>
                        <p class="text-sm text-gray-500">@synthgenai</p>
                    </div>
                    <div class="ml-auto">
                        <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">
                            </path>
                        </svg>
                    </div>
                </div>
                <p class="text-gray-700">Listing on EliteAI.tools gave us a 40% boost in signups! The quality of traffic
                    is incredible - these are users who are actually looking for AI solutions. Worth every penny!</p>
                <div class="flex items-center mt-4 text-gray-500">
                    <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z">
                        </path>
                    </svg>
                    <span class="mr-4">143</span>
                    <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z">
                        </path>
                    </svg>
                    <span class="mr-4">24</span>
                    <span class="text-sm">3:42 PM · Feb 12, 2025</span>
                </div>
            </div>

            {/* <!-- Testimonial 2 --> */}
            <div class="p-6 bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div class="flex items-start mb-4">
                    <div class="shrink-0 mr-4">
                        <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/men/24.jpg" alt="Profile image" />
                    </div>
                    <div>
                        <h3 class="font-bold">NeuralScribe</h3>
                        <p class="text-sm text-gray-500">@neuralscribe</p>
                    </div>
                    <div class="ml-auto">
                        <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">
                            </path>
                        </svg>
                    </div>
                </div>
                <p class="text-gray-700">Fast-tracking our listing was the best marketing decision we made. Went from
                    zero to 500+ daily users in just two weeks! EliteAI.tools put us in front of the perfect audience.
                </p>
                <div class="flex items-center mt-4 text-gray-500">
                    <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z">
                        </path>
                    </svg>
                    <span class="mr-4">217</span>
                    <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z">
                        </path>
                    </svg>
                    <span class="mr-4">53</span>
                    <span class="text-sm">11:28 AM · Jan 29, 2025</span>
                </div>
            </div>

            {/* <!-- Testimonial 3 --> */}
            <div class="p-6 bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div class="flex items-start mb-4">
                    <div class="shrink-0 mr-4">
                        <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/men/54.jpg" alt="Profile image" />
                    </div>
                    <div>
                        <h3 class="font-bold">QuantumWrite</h3>
                        <p class="text-sm text-gray-500">@quantumwriteai</p>
                    </div>
                    <div class="ml-auto">
                        <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">
                            </path>
                        </svg>
                    </div>
                </div>
                <p class="text-gray-700">As a bootstrapped startup, we needed cost-effective promotion. The Boosted plan
                    delivered incredible ROI - our demo requests increased 3x in the first month alone. Highly
                    recommend!</p>
                <div class="flex items-center mt-4 text-gray-500">
                    <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z">
                        </path>
                    </svg>
                    <span class="mr-4">189</span>
                    <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z">
                        </path>
                    </svg>
                    <span class="mr-4">42</span>
                    <span class="text-sm">4:15 PM · Feb 3, 2025</span>
                </div>
            </div>

            {/* <!-- Testimonial 4 --> */}
            <div class="p-6 bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div class="flex items-start mb-4">
                    <div class="shrink-0 mr-4">
                        <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/53.jpg" alt="Profile image" />
                    </div>
                    <div>
                        <h3 class="font-bold">VoiceGenius</h3>
                        <p class="text-sm text-gray-500">@voicegeniusai</p>
                    </div>
                    <div class="ml-auto">
                        <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">
                            </path>
                        </svg>
                    </div>
                </div>
                <p class="text-gray-700">The SEO boost from being listed on EliteAI.tools is incredible. We've climbed
                    to the first page for several key search terms. The quality of traffic converts at nearly 2x our
                    other channels.</p>
                <div class="flex items-center mt-4 text-gray-500">
                    <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z">
                        </path>
                    </svg>
                    <span class="mr-4">167</span>
                    <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z">
                        </path>
                    </svg>
                    <span class="mr-4">36</span>
                    <span class="text-sm">2:10 PM · Jan 18, 2025</span>
                </div>
            </div>

            {/* <!-- Testimonial 5 --> */}
            <div class="p-6 bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div class="flex items-start mb-4">
                    <div class="shrink-0 mr-4">
                        <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/43.jpg" alt="Profile image" />
                    </div>
                    <div>
                        <h3 class="font-bold">DataSage</h3>
                        <p class="text-sm text-gray-500">@datasageai</p>
                    </div>
                    <div class="ml-auto">
                        <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">
                            </path>
                        </svg>
                    </div>
                </div>
                <p class="text-gray-700">We tried several directories but EliteAI.tools stands out. The curation process
                    means you're alongside other quality tools, which gives users confidence. Our conversions are up 35%
                    from this traffic!</p>
                <div class="flex items-center mt-4 text-gray-500">
                    <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z">
                        </path>
                    </svg>
                    <span class="mr-4">201</span>
                    <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z">
                        </path>
                    </svg>
                    <span class="mr-4">47</span>
                    <span class="text-sm">10:23 AM · Feb 8, 2025</span>
                </div>
            </div>

            {/* <!-- Testimonial 6 --> */}
            <div class="p-6 bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div class="flex items-start mb-4">
                    <div class="shrink-0 mr-4">
                        <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/men/62.jpg" alt="Profile image" />
                    </div>
                    <div>
                        <h3 class="font-bold">CopyMuse</h3>
                        <p class="text-sm text-gray-500">@copymuseai</p>
                    </div>
                    <div class="ml-auto">
                        <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">
                            </path>
                        </svg>
                    </div>
                </div>
                <p class="text-gray-700">Investors actually mentioned seeing us on EliteAI.tools during our seed round!
                    The directory has become a go-to resource for the industry. Still getting consistent traffic 6
                    months after listing.</p>
                <div class="flex items-center mt-4 text-gray-500">
                    <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z">
                        </path>
                    </svg>
                    <span class="mr-4">175</span>
                    <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z">
                        </path>
                    </svg>
                    <span class="mr-4">31</span>
                    <span class="text-sm">1:35 PM · Jan 22, 2025</span>
                </div>
            </div>

        </div>
    </div>
</div>

    </>
  )
}

export default TestimonialPage

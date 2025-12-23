import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/common/Button'
import rex from '../assets/images/president.png'
import carron from '../assets/images/carron1.jpeg'

const TestimonialPage = () => {
  return (
    <>
   
 
  

    <div class="py-8 bg-white">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-1">
        {/* <!-- Section Header --> */}
        <div class="mb-12 text-center">
            <h2 class="mb-4 text-3xl font-bold sm:text-4xl">
                What Rider Are Saying
            </h2>
            <p class="max-w-2xl mx-auto text-lg text-gray-400">
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
                        <h3 class="font-bold">Suman R.</h3>
                        <p class="text-sm text-gray-500">@suman_rae</p>
                    </div>
                    <div class="ml-auto">
                        <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">
                            </path>
                        </svg>
                    </div>
                </div>
                <p class="text-gray-700">“Young Enfielders is more than just a riding group it's a brotherhood.”
                Riding with this group has given me unforgettable memories, lifelong friends, and the confidence to explore new roads. Every ride feels safe, organized, and full of positive energy.
                — Rider</p>
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
                        <img class="w-12 h-12 rounded-full" src={rex} alt="Profile image" />
                    </div>
                    <div>
                        <h3 class="font-bold">Rex D.</h3>
                        <p class="text-sm text-gray-500">@immortal_rex</p>
                    </div>
                    <div class="ml-auto">
                        <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">
                            </path>
                        </svg>
                    </div>
                </div>
                <p class="text-gray-700">“The perfect blend of passion, discipline, and adventure.”
                From short weekend rides to long tours, Young Enfielders plans everything professionally. The respect among members and love for Royal Enfield makes this group truly special.
                —Enfielders Owner
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
                        <h3 class="font-bold">Carron Rai</h3>
                        <p class="text-sm text-gray-500">@carron_enfeild</p>
                    </div>
                    <div class="ml-auto">
                        <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">
                            </path>
                        </svg>
                    </div>
                </div>
                <p class="text-gray-700">“I joined as a solo rider, now I ride with a family.”
                    Being part of Young Enfielders changed how I see motorcycling. The support, guidance, and shared passion make every journey meaningful. Proud to ride with this team.
                    —Member</p>
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
                        <h3 class="font-bold">Aashish P.</h3>
                        <p class="text-sm text-gray-500">@peached_tea</p>
                    </div>
                    <div class="ml-auto">
                        <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">
                            </path>
                        </svg>
                    </div>
                </div>
                <p class="text-gray-700">“Safety, unity, and pure riding spirit.”
                What I admire most is the focus on safe riding and teamwork. Young Enfielders represents the true Royal Enfield lifestyle.
                —Touring Rider</p>
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
                        <h3 class="font-bold">Nitesh S.</h3>
                        <p class="text-sm text-gray-500">@neetes__</p>
                    </div>
                    <div class="ml-auto">
                        <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">
                            </path>
                        </svg>
                    </div>
                </div>
                <p class="text-gray-700">“A group that truly lives the Royal Enfield lifestyle.”
                    From the iconic thump to the camaraderie on the road, Young Enfielders represents everything a biker community should be. Proud to be part of this passionate and united group.
                    —Member</p>
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
                        <h3 class="font-bold">Prakash M.</h3>
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
                <p class="text-gray-700">“Every ride feels purposeful and unforgettable.”
                    Young Enfielders isn’t just about riding motorcycles—it’s about discipline, respect, and exploring Nepal’s beautiful roads together. The bond among riders makes every journey special.
                    —Royal Enfield Rider</p>
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
                   {/* Buttons Section */}
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-8" data-aos="fade-up">
      <Link to="/contact" ><Button text="Contact" color="text-blue-300 bg-black hover:text-white hover:scale-105 hover:shadow-lg transition duration-300"/>
      </Link>
    </div>
        </div>
    </div>
    
</div>
        
<div className="p-4 px-40 ">
  <figure className="md:flex max-w-5xl bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-gray-600">
    <img className="w-12 h-12 md:w-24 md:h-auto md:rounded-none rounded-full mx-auto object-cover" src={carron} alt width={384} height={512} />
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium dark:text-slate-100">
          “Forged with precision like a gun,
            Driven with the force of a bullet,
            Built to rule the road with unstoppable power.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Carron Rai
        </div>
        <div className="text-slate-700 dark:text-slate-400">
          Member/Rider, Young Enfeilders
        </div>
      </figcaption>
    </div>
  </figure>
</div>




    </>
  )
}

export default TestimonialPage

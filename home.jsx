import React from 'react'
import Video from '../component/home/video.jsx'
import Hometext from '../component/home/hometext.jsx'
import Cards from '../component/home/Cards.jsx'

const home = () => {
  return (
    <div className="w-screen text-white overflow-x-hidden bg-white">
      {/* HERO SECTION — Full video + text */}
      <section className="relative h-screen w-screen">
        {/* Background video */}
        <Video />

        {/* Text over video */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <Hometext />
        </div>
      </section>

      {/* Green Divider Line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-green-500 via-lime-500 to-emerald-600" />

      {/* FEATURE CARDS SECTION */}
      <section className="flex flex-col justify-center items-center py-16 bg-[#f9fdf9]">
        <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-lime-600 to-green-500">
          Our Features
        </h2>
        <Cards />
      </section>

      {/* Divider */}
      <div className="h-[2px] w-2/3 mx-auto bg-gradient-to-r from-lime-400 via-green-500 to-lime-400 rounded-full my-10" />

      {/* BUSINESS CLAIM SECTION */}
      <section className="flex flex-col justify-center items-center text-center bg-white px-8 py-20">
        <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-lime-600 to-green-500 drop-shadow-sm">
          Empowering Farmers, Sustaining Futures 🌾
        </h2>

        <p className="max-w-3xl text-lg leading-relaxed text-gray-700 mb-8">
          Our modern cold storage solutions allow farmers to store crops safely and sell them when
          prices are right — maximizing profit and reducing waste. We bring together innovation,
          transparency, and sustainability to transform agriculture for the future.
        </p>

        <button className="px-6 py-3 bg-gradient-to-r from-green-600 via-lime-500 to-green-400 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-green-400/40">
          Learn More
        </button>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-5 text-center text-gray-600 border-t border-gray-200 bg-[#f9fdf9]">
        © 2025 AgriCold — Designed with 🌿 by Krish
      </footer>
    </div>
  )
}

export default home

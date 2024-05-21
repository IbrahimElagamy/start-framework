import React from 'react'
import { useState } from 'react'
import Style from './About.module.css'

export default function About() {
  return (
    <>
      <div className="bg-[#1abc9c] h-[95vh] row items-center justify-center flex-col ">
        <h2 className="text-white font-bold text-[2.5rem] pt-6 pb-2 mt-20">
          ABOUT COMPONENT
        </h2>
        <div className="row justify-center items-center">
          <div className="w-20 h-1 bg-white mx-2"></div>
          <div className="text-white mx-2">
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="w-20 h-1 bg-white mx-2"></div>
        </div>
        <div className="container md:flex block w-7/12">
          <p className=" text-left text-white px-2 py-4">
            Freelancer is a free Tailwind theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className=" text-left text-white px-2 py-4">
            Freelancer is a free Tailwind theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </>
  )
}

import React from 'react'
import { useState } from 'react'
import Style from './Footer.module.css'

export default function Footer() {
  return (
    <>
    <footer className="text-center">
      <div className="bg-[#2c3e50] py-16">
          <div className="row">
            <div className="w-full md:w-1/3 my-5">
              <h3 className="text-white text-[1.75rem] font-semibold">LOCATION</h3>
              <p className="text-white ">2215 John Daniel Drive</p>
              <p className="text-white mt-3">Clark, MO 65243</p>
            </div>
            <div className="w-full md:w-1/3 my-5">
              <h3 className="text-white text-[1.75rem] font-semibold">AROUND THE WEB</h3>
              <div className="icons my-2">
                <span className="text-white px-2 py-[0.35rem] border-[1px] border-white rounded-full mx-1">
                  <i className="fa-brands fa-facebook"></i>
                </span>
                <span className="text-white px-2 py-[0.35rem] border-[1px] border-white rounded-full mx-1">
                  <i className="fa-brands fa-twitter"></i>
                </span>
                <span className="text-white px-2 py-1 border-[1px] border-white rounded-full mx-1">
                  <i className="fa-brands fa-linkedin-in"></i>
                </span>
                <span className="text-white px-2 py-1 border-[1px] border-white rounded-full mx-1">
                  <i className="fa-solid fa-globe"></i>
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/3 my-5">
              <h3 className="text-white text-[1.75rem] font-semibold">ABOUT FREELANCER</h3>
              <p className="text-white">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
      </div>
      <div className="bg-[#1a252f] py-5 ">
        <p className="text-center text-white">Copyright © Your Website 2021</p>
      </div>
    </footer>
  </>
  )
}

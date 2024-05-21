import React from 'react'
import { useState } from 'react'
import Style from './NavBar.module.css'
import { Link , NavLink } from "react-router-dom";

export default function NavBar() {
  const [scroll, setScroll] = useState(0)
  window.onscroll = function(){
    if(scrollY > 100){
      setScroll(true)
    }else{
      setScroll(false)
    }
  }
  
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-10">
        <div className={`bg-[#2c3e50] ${scroll?'py-4':'py-7'} duration-500`}>
          <div className="row justify-around">
            <ul>
              <li className=" font-bold text-[2rem]">
                <Link className="text-white" to="">
                  START FRAMEWORK
                </Link>
              </li>
            </ul>
            <ul className="row justify-end">
              <li className="me-3 font-bold p-3">
                <NavLink className="text-white" to="about">
                  ABOUT
                </NavLink>
              </li>
              <li className="me-3 font-bold p-3">
                <NavLink className="text-white" to="portfolio">
                  {" "}
                  PORTFOLIO{" "}
                </NavLink>
              </li>
              <li className="me-3 font-bold p-3">
                <NavLink className="text-white" to="contact">
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

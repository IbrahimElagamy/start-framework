import React from 'react'
import { useState } from 'react'
import Style from './Portfolio.module.css'
import poert1 from "../imgs/poert1.png";
import poert2 from "../imgs/port2.png";
import poert3 from "../imgs/port3.png";

export default function Portfolio() {
  const [imgs, setImgs] = useState([
    poert1,
    poert2,
    poert3,
    poert1,
    poert2,
    poert3,
  ]);
  const [imgSrc, setImgSrc] = useState("");
  window.onkeydown = function(e){
    if(e.key == 'Escape'){
      setImgSrc("");
    }
  }
  return (
    <>
      <div className="container mx-auto mt-20 text-center">
        <h2 className="text-[#2c3e50] font-bold text-[2.5rem] pt-6 pb-2 mt-20">
          PORTFOLIO COMPONENT
        </h2>
        <div className="row justify-center items-center mb-2">
          <div className="w-20 h-1 bg-[#2c3e50] mx-2"></div>
          <div className="text-[#2c3e50] mx-2">
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="w-20 h-1 bg-[#2c3e50] mx-2"></div>
        </div>
        <div className="row px-10 pb-10">
          {imgs.map((img ,index) => (
            <div key={index}  className="w-full md:w-1/3 p-6 py-10 ">
              <div className=" rounded-xl w-11/12 overflow-hidden relative group cursor-pointer">
                <img className="w-full" src={img} alt="" />
                <div
                  onClick={() => setImgSrc(img)}
                  className="flex justify-center items-center text-9xl absolute top-0 bottom-0 left-0 right-0 bg-[#1abc9c] bg-opacity-0  group-hover:bg-opacity-80 duration-500"
                >
                  <div className="text-white opacity-0 group-hover:opacity-100 duration-500">
                    <i className="fa-solid fa-plus fa-7"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {imgSrc ? (
          <div onClick={() => setImgSrc("")}className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(153,150,255,0.5)] flex justify-center items-center">
            <div onClick={(e)=>e.stopPropagation()} className="w-4/12 bg-slate-500 rounded-2xl overflow-hidden">
              <img src={imgSrc} className="w-full" alt="" />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

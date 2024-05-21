import React from 'react'
import { useState } from 'react'
import Style from './Home.module.css'
import avataaars from '../imgs/avataaars (1).svg'

export default function Home() {
  return (
    <>
    <div className='bg-[#1abc9c] h-[95vh] row items-center justify-center flex-col'>
      <img src={avataaars} className='w-[250px] mt-28' alt="avataaars" />
      <h2 className='text-white font-bold text-[2.5rem] pt-6 pb-4'>START FRAMEWORK</h2>
      <div className='row justify-center items-center'>
        <div className='w-20 h-1 bg-white mx-2'></div>
        <div className='text-white mx-2'><i class="fa-solid fa-star"></i></div>
        <div className='w-20 h-1 bg-white mx-2'></div>
      </div>
      <div className='text-white py-3'>Graphic Artist - Web Designer - Illustrator</div>
    </div>
    </>
  )
}

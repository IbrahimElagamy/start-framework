import React from 'react'
import { useState } from 'react'
import Style from './NotFound.module.css'

export default function NotFound() {
  return (
    <>
    <div className='h-[90vh] flex justify-center items-center'>
      <div className='text-5xl'>
        404 Page <i class="fa-solid fa-triangle-exclamation"></i>
      </div>
    </div>
    </>
  )
}

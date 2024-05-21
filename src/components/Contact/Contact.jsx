import React from 'react'
import { useState } from 'react'
import Style from './Contact.module.css'

export default function Contact() {
  return (
    <>
    <div className="pb-10 mx-auto container my-2">
      <h2 className="text-[#2c3e50] text-center font-bold text-[2.5rem] pt-6 pb-2 mt-20">
        CONATCT SECTION
      </h2>
      <div className="row justify-center items-center mb-2">
        <div className="w-20 h-1 bg-[#2c3e50] mx-2"></div>
        <div className="text-[#2c3e50] mx-2">
          <i class="fa-solid fa-star"></i>
        </div>
        <div className="w-20 h-1 bg-[#2c3e50] mx-2"></div>
      </div>

      <div className="my-28">
      <div className="w-7/12 mx-auto ">


        <div class="relative z-0 w-full my-10 group">
          <input
            type="text"
            name="userName"
            id="userName"
            class="block py-2.5 px-0 w-full text-sm rounded-b-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1abc9c] focus:outline-none focus:ring-0 focus:border-[#1abc9c] peer"
            placeholder=" "
          />
          <label
            htmlForfor="userName"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1abc9c] peer-focus:dark:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            User Name :
          </label>
        </div>

        <div class="relative z-0 w-full my-10 group">
          <input
            type="number"
            name="userAge"
            id="userAge"
            class="block py-2.5 px-0 w-full text-sm rounded-b-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1abc9c] focus:outline-none focus:ring-0 focus:border-[#1abc9c] peer"
            placeholder=" "
          />
          <label
            htmlForfor="userAge"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1abc9c] peer-focus:dark:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            User Age :
          </label>
        </div>




        <div class="relative z-0 w-full my-10 group">
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            class="block py-2.5 px-0 w-full text-sm rounded-b-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1abc9c] focus:outline-none focus:ring-0 focus:border-[#1abc9c] peer"
            placeholder=" "
          />
          <label
            htmlForfor="userEmail"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1abc9c] peer-focus:dark:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            User Email :
          </label>
        </div>




        <div class="relative z-0 w-full my-10 group">
          <input
            type="password"
            name="userPassword"
            id="userPassword"
            class="block py-2.5 px-0 w-full text-sm rounded-b-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1abc9c] focus:outline-none focus:ring-0 focus:border-[#1abc9c] peer"
            placeholder=" "
          />
          <label
            htmlForfor="userPassword"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1abc9c] peer-focus:dark:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            User Password :
          </label>
        </div>

<button className="py-2 px-3 rounded-lg bg-[#1abc9c] text-white"> Send Message </button>

        



      </div>
      </div>
    </div>
  </>
  )
}

import React from 'react'
import trends from "../assets/images/trends.svg"
import { Link } from 'react-router-dom'
function Product() {
  return (
    <div className='flex flex-1 bg-black text-white w-screen flex-col items-center'>
        <div className=' w-[20%] sm:w-[10%] relative group mt-10'>
          <div className=' w-[100%] -inset-1 group-hover:opacity-100 transition duration-200 opacity-75 absolute bg-gradient-to-r from-pink-600 to-purple-600 blur rounded-lg'></div>
          <Link to={"/login"}>
            <button className=' px-2 sm:px-7 relative inset-0 py-3 text-[14px] sm:text-[16px] sm:py-4 w-[95%] bg-black rounded-lg leading-none justify-center flex items-center text-gray-100 '>Get started</button>
          </Link>
        </div>
        <div className='grid sm:grid-cols-2 items-center justify-center h-[400px] sm:h-[400px] border border-black px-10 sm:px-32'>
            <h1 className=' text-[30px] sm:text-[50px]'>Welcome to Pixie <span className=' text-[50px] sm:text-[70px] animate-waveHand'>👋</span></h1>
            <div>
              <img className=' h-52 sm:h-64' src={trends} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Product
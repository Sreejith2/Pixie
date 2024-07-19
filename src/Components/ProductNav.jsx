import React from 'react'
import logo from "../assets/fav.png"
import { Link } from 'react-router-dom'

function ProductNav() {
  return (
    <div className='w-screen h-20 flex items-center bg-black text-white justify-between px-6'>
        <div className='flex items-center gap-1 sm:gap-2 cursor-pointer'>
            <img className=' h-5 sm:h-7' src={logo} alt='' />
            <span className=' text-[20px] sm:text-[30px]'>Pixie</span>
        </div>
        <ul className='flex gap-3 sm:gap-10'>
            <Link to={'/home'} ><li className=' text-[14px] sm:text-[20px] cursor-pointer'>Home</li></Link>
            <Link to={'/about'} ><li className=' text-[14px] sm:text-[20px] cursor-pointer'>About</li></Link>
            <Link to={'/contact'}><li className=' text-[14px] sm:text-[20px] cursor-pointer'>Contact</li></Link>
        </ul>
        <div className='flex gap-3'>
            <Link to={'/login'}><button className='p-1 text-[14px] sm:text-[16px] w-12 sm:w-14 bg-violet-800 text-white'>Login</button></Link>
            <Link to={'/signup'}><button className='p-1 w-14 sm:w-16 text-[14px] sm:text-[16px] bg-violet-800 text-white'>Sign up</button></Link>
        </div>
    </div>
  )
}

export default ProductNav
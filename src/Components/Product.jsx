import React from 'react'
import bg from "../assets/Pixie.png"
import pic from "../assets/pixie-1.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Product() {
  return (
    <div className='flex flex-1 bg-black text-white w-screen flex-col'>
        <div className=' grid sm:grid-cols-2 items-center justify-center h-[400px] sm:h-[500px] border border-black px-10 sm:px-32'>
            <h1 className=' text-[30px] sm:text-[50px]'>Welcome to Pixie <span className=' text-[50px] sm:text-[70px] animate-waveHand'>👋</span></h1>
            <Carousel showArrows={false} showStatus={false} autoPlay interval={2000} showThumbs={false} transitionTime={1000} infiniteLoop>
              <div className='flex bg-cover items-center h-[200px] sm:h-[350px] bg-white'>
                  <img className='h-[200px] sm:h-[350px]' src={bg} alt=''/>
              </div>
              <div className='flex h-[200px] sm:h-[350px] bg-cover items-center bg-white'>
                  <img className='h-[200px] sm:h-[350px]' src={pic} alt=''/>
              </div>
            </Carousel>
        </div>
    </div>
  )
}

export default Product
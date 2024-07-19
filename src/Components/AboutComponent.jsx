import React from 'react'

function AboutComponent() {
  return (
    <div className='flex flex-col justify-center items-center w-screen'>
        <div className='flex flex-col items-center h-[300px] w-[80%] sm:w-[60%] border border-black p-5 gap-5'>
            <span className=' underline text-[20px] sm:text-[25px]'>About</span>
            <p className=' text-[15px] overflow-y-scroll sm:text-[20px]'>
                Welcome to <span className='text-blue-600'>Pixie</span>, your new favorite platform to share moments and connect with friends!
                Our Mission
                At Pixie, we believe in the power of visual storytelling. Our mission is to provide a simple, beautiful, and engaging platform where you can share your photos, discover new perspectives, and connect with a community of like-minded individuals.
                Become a part of the Pixie community today!
            </p>
        </div>
    </div>
  )
}

export default AboutComponent
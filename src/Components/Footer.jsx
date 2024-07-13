import React from 'react'

function Footer() {
  return (
    <footer className='bg-navColor flex items-center justify-center h-10 w-screen'>
        <p className='text-[14px]'>Copyright {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
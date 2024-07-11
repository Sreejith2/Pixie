import React from 'react'
import AddForm from '../Components/AddForm'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function AddPost() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
        <Navbar />    
        <AddForm/>
        <Footer />
    </div>
  )
}

export default AddPost
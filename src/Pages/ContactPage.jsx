import Contact from "../Components/Contact"
import Footer from "../Components/Footer"
import Form from "../Components/Form"
import Navbar from "../Components/Navbar"

function LogIn() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen overflow-x-hidden">
        <Navbar />    
        <Contact/>
        <Footer />
    </div>
  )
}

export default LogIn
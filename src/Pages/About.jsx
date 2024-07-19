import AboutComponent from "../Components/AboutComponent"
import Footer from "../Components/Footer"
import Form from "../Components/Form"
import Navbar from "../Components/Navbar"

function LogIn() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
        <Navbar />    
        <AboutComponent/>
        <Footer />
    </div>
  )
}

export default LogIn
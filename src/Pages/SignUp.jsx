import Footer from "../Components/Footer"
import Form from "../Components/Form"
import Navbar from "../Components/Navbar"

function SignUp() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
        <Navbar />    
        <Form type='signup'/>
        <Footer />
    </div>
  )
}

export default SignUp
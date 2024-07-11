import React, { useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { AuthContext, FireBaseContext } from '../Context/Context'
import logo from "../assets/fav.png"

function Navbar() {
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FireBaseContext)
  const navigate = useNavigate()
  const handleLogout = ()=>{
    firebase.auth().signOut()
    console.log("User signed out")
    navigate('/')
  }
  return (
    <nav className=' w-screen flex items-center justify-between px-3 bg-slate-400 h-10'>
        <div className='flex items-center'>
            <img className=' h-8' src={logo} alt=''/>
            <Link to={user?'/home':'/'}><span className=' text-[18px] sm:text-[20px] font-[700]'>Pixie</span></Link>
        </div>
        {user?<div>
            <ul className='flex flex-row items-center gap-6 font-[600] text-[12px] sm:text-[16px]'>
                <span className='text-blue-800 text-[12px]'>{user.displayName}</span>
                <Link to={'/home'}><li>Home</li></Link>
                <Link to={'/addPost'}><li>AddPost</li></Link>
                <Link to={'/myPosts'}><li>MyPosts</li></Link>
                <li onClick={handleLogout} className=' cursor-pointer'>Logout</li>
            </ul>
        </div>:null}
    </nav>
  )
}

export default Navbar
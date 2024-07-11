import React, { useContext, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { AuthContext, FireBaseContext } from '../Context/Context'

function Form(props) {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [username,setUsername] = useState("")
  const {firebase} = useContext(FireBaseContext)
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    {props.type!=='login'?firebase.auth().createUserWithEmailAndPassword(email,password).
      then((user)=>{
        console.log("User registered"+user)
        user.user.updateProfile({displayName:username})
        firebase.firestore().collection('users').add({
          id:user.user.uid,
          email:email,
          username:username
        })
        navigate('/home')
      }).catch((err)=>console.log("Signup error"+err)):
      firebase.auth().signInWithEmailAndPassword(email,password).then((user)=>{
        console.log(user+"Signed in")
        navigate('/home')
      }).
      catch((err)=>console.group("Signin Error"+err))
    }
  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col shadow-lg p-3 gap-3 bg-slate-400 h-80 w-64 sm:w-80 items-center justify-center rounded-lg '>
        <h1 className='font-[700] text-[18px] sm:text-[25px]'>{props.type==='login'?'LOGIN':'SIGNUP'}</h1>
        <input required type='email' onChange={(e)=>setEmail(e.target.value)} value={email} className=' border-none text-[14px] sm:text-[15px] outline-none p-2 rounded-lg w-52 sm:w-60' placeholder='Enter email..' />
        {props.type!=='login'?<input type='text' required onChange={(e)=>setUsername(e.target.value)} value={username} className=' border-none text-[14px] sm:text-[15px] outline-none p-2 rounded-lg w-52 sm:w-60' placeholder='Enter username' />:null}
        <input required type='password' onChange={(e)=>setPassword(e.target.value)} value={password} className=' border-none text-[14px] sm:text-[15px] outline-none p-2 rounded-lg w-52 sm:w-60' placeholder='Enter password' />
        <button className='p-2 bg-slate-200 text-[14px] sm:text-[15px] font-[600] w-40 rounded-lg' type='submit'>{props.type==='login'?'Signin':'Signup'}</button>
        {props.type==='login'?<p>New user <Link to={'/signup'} ><span className='font-[500] text-[14px] sm:text-[15px] text-blue-800'>Signup</span></Link> here</p>:<p>Already a user <Link to={'/'} ><span className='font-[500] text-blue-800'>Signin</span></Link> here</p>}
    </form>
  )
}

export default Form

import { useState } from "react"
import emailjs from '@emailjs/browser';

const SID='service_5mssjv5'
const TID='template_kpcj7gk'
const PKEY = 'QrZFOLERPgBpJHFfs'

function Contact() {
    const [name,setName] = useState('')
    const [from,setFrom] = useState('')
    const [body,setBody] = useState('')

    const sendMail = (e)=>{
      e.preventDefault()
      const templateParams ={
        user_name:name,
        user_email:from,
        message:body
      }
      emailjs.send(SID,TID,templateParams,PKEY).then((response)=>{
        console.log(response)
        alert("Email Sent Successfully "+response.status)
      }).catch((error)=>{
        console.log(error)
        alert("Email Not Sent "+error.status)
      })
      setName('');
      setFrom('');
      setBody('');
      
  }
  return (
    <form onSubmit={sendMail} className='flex flex-col bg-gradient-to-br from-slate-300 to-slate-200 shadow-lg p-2 gap-3 border border-black h-80 sm:h-96 w-[60%] my-20 items-center justify-center rounded-sm'>
       <h1 className=' text-blue-800 text-[20px]'>Contact Me</h1>
       <input required onChange={(e)=>setName(e.target.value)} value={name} className=' text-[14px] sm:text-[16px] border outline-none w-[90%] border-black p-1' type='text' placeholder='Enter your name' />
       <input required onChange={(e)=>setFrom(e.target.value)} value={from} className=' text-[14px] sm:text-[16px] border outline-none w-[90%] border-black p-1' type='email' placeholder='Enter your email' />
       <textarea required onChange={(e)=>setBody(e.target.value)} value={body} className=' text-[14px] sm:text-[16px] w-[90%] h-[50%] p-1 resize-none border border-black outline-none' />
       <button type='submit' className='p-1 bg-black text-white w-[20%] rounded-sm'>Send</button>
    </form>
  )
}

export default Contact
import { useContext, useState } from "react"
import { AuthContext, FireBaseContext } from "../Context/Context"
import { useNavigate } from "react-router-dom"
import Loader from "./Loader"


function AddForm() {
    const [desc,setDesc] = useState("")
    const [img,setImg] = useState(null)
    const {user} = useContext(AuthContext)
    const [uploading,setUploading]=useState(false)
    const {firebase} = useContext(FireBaseContext)
    const navigate = useNavigate()

    const handleUpload = (e)=>{
        e.preventDefault()
        setUploading(true)
        firebase.storage().ref(`/image/${img.name}`).put(img).
        then(({ref})=>ref.getDownloadURL().then((url)=>{
            firebase.firestore().collection('posts').add({
                desc:desc,
                imgUrl:url,
                userName:user.displayName,
                userId:user.uid,
                noOfLikes:0,
                postedAt:new Date().toDateString()
            })
            setUploading(false)
            navigate('/home')
        }))
    }
  return (
    <>
        {uploading?
            <Loader msg='Posting...'/>
            :
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 my-4">
                <form onSubmit={handleUpload} className='flex flex-col shadow-lg p-3 gap-6 bg-navColor min-h-80 w-64 sm:w-96 items-center justify-center rounded-lg'>
                    <h1 className='font-[700] text-[18px] sm:text-[25px]'>Add Post</h1>
                    <input onChange={(e)=>setDesc(e.target.value)} value={desc} className='border-none text-[14px] sm:text-[15px] outline-none p-2 rounded-lg w-52 sm:w-60' required type='text' placeholder='Enter description of post..'/>
                    <input onChange={(e)=>setImg(e.target.files[0])} className='text-[12px] sm:text-[14px]' required type='file' />
                    <button className='p-2 bg-slate-200 text-[14px] sm:text-[15px] font-[600] w-40 rounded-lg' type='submit'>Post</button>
                </form>
                {img?<div className="flex flex-col gap-1 items-center justify-center bg-slate-400 p-3 rounded-lg">
                    {img?<img src={URL.createObjectURL(img)} alt="" className=" w-48 h-48" />:null}
                    {desc?<p>{desc}</p>:null}
                </div>:null}
            </div>
        }
    </>
  )
}

export default AddForm
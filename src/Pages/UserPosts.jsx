import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Post from '../Components/Post'
import Loader from '../Components/Loader'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { FireBaseContext } from '../Context/Context'

function UserPosts() {
    const {id} = useParams()
    const [posts,setPosts] = useState(null)
    const {firebase} = useContext(FireBaseContext)
    useEffect(()=>{
        firebase.firestore().collection('posts').where('userId','==',id).get().then((snapshot)=>{
            const allPosts=snapshot.docs.map((post)=>{
                return{
                    ...post.data(),
                    id:post.id
                }
            })
            setPosts(allPosts)
        })
    },[id])
  return (
        <div className="flex flex-col items-center justify-between min-h-screen overflow-x-hidden">
            <Navbar />
            {posts?<h1 className='text-[20px] sm:text-[30px] mt-4 text-blue-700'>{posts[0].userName}</h1>:null}
            {!posts?
                <Loader msg='Loading...'/>
                :    
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-10 sm:my-10 grid-flow-row'>
                    {posts.map((item,index)=><Post key={index} userId={item.userId} usersLiked={item.usersLiked} id={item.id} noOfLikes={item.noOfLikes} userName={item.userName} img={item.imgUrl} desc={item.desc} />)}
                </div>
            }
            <Footer />
        </div>
  )
}

export default UserPosts
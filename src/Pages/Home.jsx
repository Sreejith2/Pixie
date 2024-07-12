import {useEffect,useContext, useState} from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Post from '../Components/Post'
import { FireBaseContext } from '../Context/Context'
import Loader from '../Components/Loader'

function Home() {
  const {firebase} = useContext(FireBaseContext)
  const [posts,setPosts] = useState([])
  
  useEffect(()=>{
    firebase.firestore().collection('posts').get().then((snapshot)=>{
      const allPosts = snapshot.docs.map((post)=>{
        return {...post.data(),id:post.id}
      })
      setPosts(allPosts)
    })
  },[firebase])

  
  return (
    <div className="flex flex-col items-center justify-between min-h-screen overflow-x-hidden">
        <Navbar />
        {posts.length==0?
          <Loader msg='Loading...'/>
          :    
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-10 grid-flow-row'>
            {posts.map((item,index)=><Post key={index} userId={item.userId} usersLiked={item.usersLiked} id={item.id} noOfLikes={item.noOfLikes} userName={item.userName} img={item.imgUrl} desc={item.desc} />)}
          </div>
        }
        <Footer />
    </div>
  )
}

export default Home
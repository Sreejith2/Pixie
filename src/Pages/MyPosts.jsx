import {useContext,useEffect, useState} from 'react'
import Post from '../Components/Post'
import { AuthContext, FireBaseContext } from '../Context/Context'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Loader from '../Components/Loader'

function MyPosts() {
    const [posts,setPosts] = useState(null)
    const {firebase} = useContext(FireBaseContext)
    const {user} = useContext(AuthContext)
    useEffect(()=>{
        firebase.firestore().collection('posts').where('userId','==',user.uid).get().then((snapshot)=>{
            const allPosts = snapshot.docs.map((post)=>{
                return {
                    ...post.data(),
                    id:post.id
                }
            })
            console.log(allPosts)
            setPosts(allPosts)
        })
    },[user.uid,posts])
    return (
        <div className="flex flex-col items-center justify-between min-h-screen overflow-x-hidden">
            <Navbar />
            {!posts?
                <Loader msg='Loading...'/>
                :    
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-10 grid-flow-row'>
                    {posts.map((item,index)=><Post own="yes" key={index} userId={item.userId} usersLiked={item.usersLiked} id={item.id} noOfLikes={item.noOfLikes} userName={item.userName} img={item.imgUrl} desc={item.desc} />)}
                </div>
            }
            <Footer />
        </div>
    )
}

export default MyPosts
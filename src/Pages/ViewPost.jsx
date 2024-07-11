import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FireBaseContext } from '../Context/Context';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Post from '../Components/Post';
import Loader from '../Components/Loader';

function ViewPost() {
  const { id } = useParams();
  const { firebase } = useContext(FireBaseContext);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postDoc = await firebase.firestore().collection('posts').doc(id).get();
        if (postDoc.exists) {
          setPost(postDoc.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error getting document:', error);
      }
    };

    fetchPost();
  }, [firebase, id]);


  return (
    <div className="flex flex-col gap-3 items-center justify-between min-h-screen overflow-x-hidden">
      <Navbar />
      {!post?
          <Loader msg='Loading...'/>
          :
          <Post purpose='view' id={id} noOfLikes={post.noOfLikes} userName={post.userName} img={post.imgUrl} desc={post.desc}/>
        }
      <Footer />
    </div>
  );
}

export default ViewPost;

import { useState, useContext, useEffect } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { AuthContext, FireBaseContext } from '../Context/Context';
import { Link } from "react-router-dom";
import Loader from "./Loader";

function Post(props) {
  const [liked, setLiked] = useState(false);
  const [noOfLikes, setNoOfLikes] = useState(props.noOfLikes);
  const { firebase } = useContext(FireBaseContext);
  const [deleting,setDeleting] = useState(false)
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user && props.usersLiked&& props.usersLiked.includes(user.uid)) {
      setLiked(true);
    }
  }, [user, props.usersLiked]);

  const handleLike = () => {
    const newLiked = !liked;
    const newNoOfLikes = newLiked ? noOfLikes + 1 : noOfLikes - 1;

    setLiked(newLiked);
    setNoOfLikes(newNoOfLikes);

    const postRef = firebase.firestore().collection('posts').doc(props.id);

    if (newLiked) {
      postRef.update({
        usersLiked: firebase.firestore.FieldValue.arrayUnion(user.uid),
        noOfLikes: newNoOfLikes
      });
    } else {
      postRef.update({
        usersLiked: firebase.firestore.FieldValue.arrayRemove(user.uid),
        noOfLikes: newNoOfLikes
      });
    }
  };

  const handleDelete = async (postId,imgURL)=>{
      setDeleting(true)
      await firebase.storage().refFromURL(imgURL).delete().then(()=>{console.log("Image deleted")}).catch((err)=>console.log(err))
      await firebase.firestore().collection('posts').doc(postId).delete().then(()=>{
          setDeleting(false)
          console.log("Deleted")
        }
      ).catch((err)=>console.log(err))
  }

  return (
    <div className={props.purpose==='view'?'my-5':''}>
      {deleting?<Loader msg="Deleting"/>:
        <div className={props.purpose === 'view' ? 'flex flex-col gap-1 min-w-52 min-h-64 p-3 shadow-lg border-[1px] border-black' : 'flex flex-col gap-1 w-60 min-h-64 p-3 shadow-lg border-[1px] border-black'}>
          <Link to={`/userPosts/${props.userId}`}>
            <h1 className="text-blue-800">{props.userName}</h1>
          </Link>
          <Link to={`/viewPost/${props.id}`} >
            <div className={props.purpose==='view'?"w-full h-60 sm:h-96 ":"w-full h-52 sm:h-72 overflow-hidden"}>
              <img className="w-full h-full object-cover" src={props.img} alt='' />
            </div>
            <p>{props.purpose==='view'?props.desc:props.desc.slice(0,20)+'...'}</p>
          </Link>
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              <span onClick={handleLike} className="cursor-pointer">
                <ThumbUpIcon color={liked ? "primary" : "inherit"} />
              </span>
              <p>{noOfLikes}</p>
            </div>
            {props.own==="yes"?<button onClick={()=>handleDelete(props.id,props.img)} className=" border border-black text-red-700 p-1 text-[14px] rounded-lg w-16 ">Delete</button>:null}
          </div>
        </div>
      }
      </div>
  );
}

export default Post;

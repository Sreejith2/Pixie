import { useState, useContext, useEffect } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { AuthContext, FireBaseContext } from '../Context/Context';
import { Link } from "react-router-dom";

function Post(props) {
  const [liked, setLiked] = useState(false);
  const [noOfLikes, setNoOfLikes] = useState(props.noOfLikes);
  const { firebase } = useContext(FireBaseContext);
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

  return (
    <div className={props.purpose === 'view' ? 'flex flex-col gap-1 min-w-52 min-h-64 p-3 shadow-lg border-[1px] border-black' : 'flex flex-col gap-1 w-52 min-h-64 p-3 shadow-lg border-[1px] border-black'}>
      <Link to={`/userPosts/${props.userId}`}>
        <h1 className="text-blue-800">{props.userName}</h1>
      </Link>
      <Link to={`/viewPost/${props.id}`} >
        <img className={props.purpose === 'view' ? 'h-52 sm:h-80 w-52 sm:w-80' : 'h-48'} src={props.img} alt='' />
        <p>{props.desc}</p>
      </Link>
      <div className="flex gap-1">
        <span onClick={handleLike} className="cursor-pointer">
          <ThumbUpIcon color={liked ? "primary" : "inherit"} />
        </span>
        <p>{noOfLikes}</p>
      </div>
    </div>
  );
}

export default Post;

import { useState, useContext } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { FireBaseContext } from '../Context/Context';

function Post(props) {
    const [liked, setLiked] = useState(false);
    const [noOfLikes, setNoOfLikes] = useState(props.noOfLikes);
    const { firebase } = useContext(FireBaseContext);

    const handleLike = () => {
        const newLiked = !liked;
        const newNoOfLikes = newLiked ? noOfLikes + 1 : noOfLikes - 1;

        setLiked(newLiked);
        setNoOfLikes(newNoOfLikes);

        firebase.firestore().collection('posts').doc(props.id).update({
            noOfLikes: newNoOfLikes
        });
    };

    return (
        <div className='flex flex-col gap-1 w-52 min-h-64 p-3 shadow-lg border-[1px] border-black'>
            <h1 className="text-blue-800">{props.userName}</h1>
            <img className='h-48' src={props.img} alt='' />
            <p>{props.desc}</p>
            <div className="flex gap-1">
                <span onClick={handleLike} className="cursor-pointer">
                    <ThumbUpIcon />
                </span>
                <p>{noOfLikes}</p>
            </div>
        </div>
    );
}

export default Post;

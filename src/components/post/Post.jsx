import "./post.css";
import {MoreVert} from "@mui/icons-material";
// import { PostApis } from "../../dummyData";
import { Users } from "../../dummyData";
import { useState } from "react";
export default function Post({khunTunPost}) {
// const khunTunUser = Users.filter(khunTun=>khunTun.id === 3);
// console.log(khunTunUser);
// console.log(khunTunUser[0]);
// console.log(khunTunUser[0].username);


const [myLike,setMyLike] = useState(khunTunPost.like);
const [isMyDisliked,setMyDisliked] =useState(false);


const clikHandler = () => {
        setMyLike(isMyDisliked ? myLike-1 : myLike+1);
        setMyDisliked(!isMyDisliked);
}



  return (
    <div className="postContainer">
                <div className="postWrapper">
                        <div className="postTop">
                                <div className="postTopLeft">
                                        <img src={Users.filter(khunTun=>khunTun.id === khunTunPost?.userId)[0].profilePicture} alt="postProfileImg" className="postProfileImg" />
                                        <span className="postUsername">{Users.filter(khunTun=>khunTun.id === khunTunPost?.userId)[0].username}</span>
                                        <span className="postDate">{khunTunPost.date}</span>
                                </div>
                                <div className="postTopRight">
                                        <MoreVert/>
                                </div>
                        </div>
                        <div className="postCenter">
                                <span className="postText">{khunTunPost?.desc}</span>
                                <img src={khunTunPost.photo} alt="postCenter" className="postCenterImg" />
                        </div>
                        <div className="postBottom">
                                <div className="postBottomLeft">
                                        <img src={require('./../../img/facebook-like-1.png')} onClick={clikHandler} alt="" className="likeIcon" />
                                        <img src={require('./../../img/facebook-heart.png')} onClick={clikHandler} alt="" className="likeIcon" />
                                        <span className="likeCounter">{myLike} people like it</span>
                                </div>
                                <div className="postBottomRight">
                                        <div className="postCommentText">{khunTunPost.comment} comments</div>
                                </div>
                        </div>
                </div>
    </div>
  )
}

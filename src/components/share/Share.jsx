import "./share.css";
import {PermMedia,Label,Room,EmojiEmotions} from "@mui/icons-material";

export default function Share() {
  return (
    <div className="shareContainer">
                <div className="shareWrapper">
                        <div className="shareTop">
                                <img src={require('./../../img/3.jpg')} alt="shareImg" className="shareProfileImg" />
                                <input type="text" className="shareInput" placeholder="What is in your mind today ?" />
                        </div>
                        <hr className="shareHr" />
                        <div className="shareBottom">
                                <div className="shareOptions">
                                        <div className="shareOption">
                                                <PermMedia htmlColor="tomato" className="shareIcon"/>
                                                <span className="shareOptionText">Image or Video</span>
                                        </div>
                                        <div className="shareOption">
                                                <Label htmlColor="blue" className="shareIcon"/>
                                                <span className="shareOptionText">Tag</span>
                                        </div>
                                        <div className="shareOption">
                                                <Room htmlColor="green" className="shareIcon"/>
                                                <span className="shareOptionText">Location</span>
                                        </div>
                                        <div className="shareOption">
                                                <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                                                <span className="shareOptionText">Feelings</span>
                                        </div>
                                </div>
                                <button className="shareBtn">Share</button>
                        </div>
                </div>
    </div>
  )
}

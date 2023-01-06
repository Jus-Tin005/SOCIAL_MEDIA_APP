import "./feed.css";
import Post from "./../post/Post";
import Share from "./../share/Share";
import { PostApis } from "../../dummyData";

export default function Feed() {
  return (
    <div className="feedContainer">
            <div className="feedWrapper">
                    <Share/>
                  {
                      PostApis.map(PostApi=>(
                        <Post key={PostApi.id} khunTunPost={PostApi}/>
                      ))
                  }
            </div>
    </div>
  )
}

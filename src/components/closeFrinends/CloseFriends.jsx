import "./closeFriends.css";
import { Users } from "../../dummyData";

export default function CloseFriends({bestFrined}) {
  return (
    <div className="closeFrindsContainer">
                      <li className="sidebarFriendListItem">
                                        <img src={bestFrined.profilePicture} alt="sidebarFriends" className="sidebarFriendListImg" />
                                        <span className="sidebarFriendName">{bestFrined.username}</span>
                      </li>
    </div>
  )
}

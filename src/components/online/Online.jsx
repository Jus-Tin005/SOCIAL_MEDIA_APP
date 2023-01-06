import "./online.css";

export default function Online({jusTin}) {
  return (
    <div className="onlineContainer">
                        <li className="rightbarFriendListItem">
                                <div className="rightbarProfileImgContainer">
                                        <img src={jusTin.profilePicture} alt="" className="rightbarProfileImg" />
                                        <span className="rightbarOnline"></span>
                                </div>
                                <span className="rightbarUsername">{jusTin.username}</span>
                        </li>
    </div>
  )
}

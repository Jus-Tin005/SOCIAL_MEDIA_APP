import "./profile.css";
import Feed from "../../feed/Feed";
import   Sidebar from "./../../sidebar/Sidebar";
import Rightbar from "../../rightbar/Rightbar";
import Topbar from "../../topbar/Topbar";

export default function Profile() {
  return (
        <>
                <Topbar/>
                <div className="profileContainer">
                          <Sidebar/>
                          <div className="profileRight">
                                <div className="profileTop">
                                      <div className="profileCover">
                                                  {<img src={require('./../../../img/3.jpg')} alt="" className="profileImgCover" />}
                                                    <img src={require('./../../../img/5.jpg')} alt="" className="profileImgUser" />
                                                    <div className="profileInfo">
                                                              <h4 className="profileInfoName">Khun Tun</h4>
                                                              <span className="profileInfoDesc">Hello,Guys !!!</span>
                                                    </div>
                                      </div>
                                </div>
                                <div className="profileBottom">
                                      <Feed/>
                                      <Rightbar/>
                                </div>
                          </div>

                </div>
      </>
  )
}

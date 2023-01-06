import "./rightbar.css";
import   {Users} from "./../../dummyData";
import Online from "../online/Online";


export default function Rightbar({khunTunProfile}) {
  const HomeRightbar = () => {

        return(
          <>
                      <div className="birthdayContainer">
                                <img src={require('./../../img/happy-birthday.png')} alt="dob" className="birthdayImg" />
                                <span className="birthdayText">
                                    <b>Anna</b> and <b>other 4 friends</b> has a birthday today!
                                </span>
                      </div>
                      <img src={require('./../../img/adds.png')} alt="adds" className="rightbarAdds" />
                      <h4 className="rightbarTitle">Online Friends</h4>
                      <ul className="rightbarFrindList">
                              {
                                Users.map(nang=>(
                                  <Online key={nang.id} jusTin={nang}/>
                                ))
                              }
                      </ul>
          </>
        );
      }


      const ProfileRightbar = () => {
          return (
            <>
              <h4 className="profileRightbarTitle">User Information</h4>
              <div className="profileRightbarInfo">
                        <div className="profileRightbarItem">
                              <span className="profileRightbarItemKey">City : </span>
                              <span className="profileRightbarItemKeyValue">Yangon</span>
                        </div>
                        <div className="profileRightbarItem">
                              <span className="profileRightbarItemKey">From : </span>
                              <span className="profileRightbarItemKeyValue">Tamwe</span>
                        </div>
                        <div className="profileRightbarItem">
                              <span className="profileRightbarItemKey">Relationship : </span>
                              <span className="profileRightbarItemKeyValue">Single</span>
                        </div>
                        <h4 className="profileRightbarSubtitle">User Friends</h4>
                        <div className="profileRightbarFollowings">
                              <div className="profileRightbarFollowing">
                                      <img src={require('./../../img/5.jpg')} alt="" className="profileRightbarFollowingImg" />
                                      <span className="profileRightbarFollowingName">Khun Tun</span>
                              </div>
                        </div>
              </div>
          </>
          )
      }

      return (
        <div className="rightbarContainer">
                  <div className="rightbarWrapper">
                              {
                                khunTunProfile ? <ProfileRightbar/> : <HomeRightbar/>
                              }
                  </div>
          </div>
      );
}

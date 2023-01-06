import "./topbar.css";
import  {Person, Search,Chat,Notifications} from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbarContainer">
            <div className="topbarLeft">
                      <div className="topbarLogo">JT Social App</div>
            </div>
            <div className="topbarCenter">
                      <div className="topbarSearchbar">
                          <Search className="searchIcon"/>
                          <input className="SearchInput" placeholder="Search something that you want to ..." />
                      </div>
            </div>
            <div className="topbarRight">
                        <div className="topbarLinks">
                                <div className="topbarLink">Home</div>
                                <div className="topbarLink">Timeline</div>
                        </div>
                        <div className="topbarIcons">
                                  <div className="topbarIconItem">
                                          <Person/>
                                          <span className="topbarIconBadge">1</span>
                                  </div>
                                  <div className="topbarIconItem">
                                          <Chat/>
                                          <span className="topbarIconBadge">2</span>
                                  </div>
                                  <div className="topbarIconItem">
                                          <Notifications/>
                                          <span className="topbarIconBadge">3</span>
                                  </div>
                        </div>
                        <img src={require('./../../img/3.jpg')} alt="" className="topbarImg" />
            </div>

    </div>

  )
}

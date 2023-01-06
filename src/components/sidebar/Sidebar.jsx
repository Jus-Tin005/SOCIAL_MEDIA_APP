import { RssFeed,Group,PlayCircle  ,Bookmark,HelpOutline,WorkOutline,Event,School } from "@mui/icons-material";
import "./sidebr.css";
import { Users } from "../../dummyData";
import CloseFriends from "../closeFrinends/CloseFriends";
export default function Sidebar({bestFrined}) {
  return (
    <div className="sidebarContainer">
                <div className="sidebarWrapper">
                            <ul className="sidebarList">
                                    <li className="sidebarListItem">
                                            <RssFeed className="sidebarListIcon"/>
                                            <span className="sidebarListItemText">Feed</span>
                                    </li>
                                    <li className="sidebarListItem">
                                            <Group className="sidebarListIcon"/>
                                            <span className="sidebarListItemText">Groups</span>
                                    </li>
                                    <li className="sidebarListItem">
                                            <PlayCircle   className="sidebarListIcon"/>
                                            <span className="sidebarListItemText">Videos</span>
                                    </li>
                                    <li className="sidebarListItem">
                                            <Bookmark className="sidebarListIcon"/>
                                            <span className="sidebarListItemText">Bookmarks</span>
                                    </li>
                                    <li className="sidebarListItem">
                                            <HelpOutline className="sidebarListIcon"/>
                                            <span className="sidebarListItemText">Questions</span>
                                    </li>
                                    <li className="sidebarListItem">
                                            <WorkOutline className="sidebarListIcon"/>
                                            <span className="sidebarListItemText">Jobs</span>
                                    </li>
                                    <li className="sidebarListItem">
                                            <Event className="sidebarListIcon"/>
                                            <span className="sidebarListItemText">Events</span>
                                    </li>
                                    <li className="sidebarListItem">
                                            <School className="sidebarListIcon"/>
                                            <span className="sidebarListItemText">Courses</span>
                                    </li>
                            </ul>
                            <button className="sidebarButton">Show More</button>
                            <hr  className="sidebarHr"/>
                            <ul className="sidebarFriendList">
                                {
                                        Users.map(nayChi=>(
                                                <CloseFriends key={nayChi.id} bestFrined={nayChi}/>
                                        ))
                                }
                            </ul>
                </div>
    </div>
  )
}

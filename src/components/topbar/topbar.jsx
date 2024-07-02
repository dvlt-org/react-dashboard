import { Notifications, Language, Settings } from "@mui/icons-material"
import "./topbar.css"

export default function topbar() {
  return (
    <div className="topbar">
      <div className='topbarWrapper'>
        <div className="topbarLeft">
          <span className='topbarLogo'>lamaadmin</span>
        </div>
        <div className="topbarRight">
          <div className="topbarIconContainer">
            <Notifications />
            <span className="topIconBadge">1</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">1</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
            <span className="topIconBadge">1</span>
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topRightImg" />
        </div>
      </div>
    </div >
  )
}

import "./widgetSm.css"
import { Visibility } from "@mui/icons-material"


// img
const logo = `https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500`

export default function widgetSm() {
    const Button = ({ type }) => { }
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img className="widgetItemImg" src={logo} alt="" />
                    <div className="widgetItemUser">
                        <p className="widgetUserUsername">Jon Doe</p>
                        <p className="widgetUserJob">Engineer</p>
                    </div>
                    <button className="widgetItemButton">
                        <Visibility />
                        <span>Display</span>
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetItemImg" src={logo} alt="" />
                    <div className="widgetItemUser">
                        <p className="widgetUserUsername">Jon Doe</p>
                        <p className="widgetUserJob">Engineer</p>
                    </div>
                    <button className="widgetItemButton">
                        <Visibility />
                        <span>Display</span>
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetItemImg" src={logo} alt="" />
                    <div className="widgetItemUser">
                        <p className="widgetUserUsername">Jon Doe</p>
                        <p className="widgetUserJob">Engineer</p>
                    </div>
                    <button className="widgetItemButton">
                        <Visibility />
                        <span>Display</span>
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetItemImg" src={logo} alt="" />
                    <div className="widgetItemUser">
                        <p className="widgetUserUsername">Jon Doe</p>
                        <p className="widgetUserJob">Engineer</p>
                    </div>
                    <button className="widgetItemButton">
                        <Visibility />
                        <span>Display</span>
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetItemImg" src={logo} alt="" />
                    <div className="widgetItemUser">
                        <p className="widgetUserUsername">Jon Doe</p>
                        <p className="widgetUserJob">Engineer</p>
                    </div>
                    <button className="widgetItemButton">
                        <Visibility />
                        <span>Display</span>
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetItemImg" src={logo} alt="" />
                    <div className="widgetItemUser">
                        <p className="widgetUserUsername">Jon Doe</p>
                        <p className="widgetUserJob">Engineer</p>
                    </div>
                    <button className="widgetItemButton">
                        <Visibility />
                        <span>Display</span>
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetItemImg" src={logo} alt="" />
                    <div className="widgetItemUser">
                        <p className="widgetUserUsername">Jon Doe</p>
                        <p className="widgetUserJob">Engineer</p>
                    </div>
                    <button className="widgetItemButton">
                        <Visibility />
                        <span>Display</span>
                    </button>
                </li>
            </ul>
        </div>
    )
}

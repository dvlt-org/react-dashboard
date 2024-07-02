import "./user.css"
import {
    PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Upload
} from "@mui/icons-material"

export default function User() {
    return (
        <div className='user'>
            <div className='userTitleContainer'>
                <h1>Edit User</h1>
                <button className='userAddButton'>Create</button>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userLeftTop">
                        <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userTopImg" />
                        <div className="userTopInfo">
                            <span className="userTopInfoName">Anna Becker</span>
                            <span className="userTopInfoJob">Softwer Engineer</span>
                        </div>
                    </div>
                    <div className="userLeftBottom">
                        <span className="userBottomTitle">Account Details</span>
                        <div className="userBottomItem">
                            <PermIdentity className="userBottomIcon" />
                            <span className="userBottomItemTitle">annabeck99</span>
                        </div>
                        <div className="userBottomItem">
                            <CalendarToday className="userBottomIcon" />
                            <span className="userBottomItemTitle">10.12.1999</span>
                        </div>
                        <span className="userBottomTitle">Contack Details</span>
                        <div className="userBottomItem">
                            <PhoneAndroid className="userBottomIcon" />
                            <span className="userBottomItemTitle">+1 123 456 789</span>
                        </div>
                        <div className="userBottomItem">
                            <MailOutline className="userBottomIcon" />
                            <span className="userBottomItemTitle">annabeck99@gmail.com</span>
                        </div>
                        <div className="userBottomItem">
                            <LocationSearching className="userBottomIcon" />
                            <span className="userBottomItemTitle">New York |USA</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <form className="userUpdateForm">
                        <h1>Edit</h1>
                        <div className="userFormItem">
                            <label>Username</label>
                            <input className="userFormInput" type="text" placeholder="annnbecke99r" />
                        </div>
                        <div className="userFormItem">
                            <label>Full Name</label>
                            <input className="userFormInput" type="text" placeholder="Anna Becker" />
                        </div>
                        <div className="userFormItem">
                            <label>Email</label>
                            <input className="userFormInput" type="text" placeholder="annabecker99@gmail.com" />
                        </div>
                        <div className="userFormItem">
                            <label>Phone</label>
                            <input className="userFormInput" type="text" placeholder="+1 123 456" />
                        </div>
                        <div className="userFormItem">
                            <label>Addres</label>
                            <input className="userFormInput" type="text" placeholder="New York | USA" />
                        </div>
                    </form>
                    <div className="userUpload">
                        <div className="userUploadImgContainer">
                            <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userUploadImg" />
                            <label htmlFor="file" className="userUploadIcon">
                                <Upload />
                            </label>
                            <input className="userUploadInput" type="file" id="file" />
                        </div>
                        <button className="userUploadButton">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

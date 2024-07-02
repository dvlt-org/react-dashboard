import "./newUser.css"

export default function newUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label className="newUserLabel">Username</label>
                    <input className="newUserInput" type="text" placeholder="annnbecke99r" />
                </div>
                <div className="newUserItem">
                    <label className="newUserLabel">Full Name</label>
                    <input className="newUserInput" type="text" placeholder="Anna Becker" />
                </div>
                <div className="newUserItem">
                    <label className="newUserLabel">Email</label>
                    <input className="newUserInput" type="text" placeholder="annabecker99@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label className="newUserLabel">Phone</label>
                    <input className="newUserInput" type="text" placeholder="+1 123 456" />
                </div>
                <div className="newUserItem">
                    <label className="newUserLabel">Addres</label>
                    <input className="newUserInput" type="text" placeholder="New York | USA" />
                </div>
                <div className="newUserItem">
                    <label className="newUserItemGender">Gender</label>
                    <div className="newUserGenderRadio">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label for="female">Female</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserItemButton">Create</button>
            </form >
        </div >
    )
}

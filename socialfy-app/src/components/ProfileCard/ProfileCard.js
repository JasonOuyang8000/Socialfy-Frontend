import ProfileCircle from '../ProfileCircle/ProfileCircle';
import './ProfileCard.css';
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
const ProfileCard = () => {
    const {user} = useContext(UserContext);

    return (
    
        <div className="profile-card text-center shadow p-3 mb-5">
            <ProfileCircle user={user} />
            <h3>{user.alias}</h3>

        </div>
    );


}

export default ProfileCard;
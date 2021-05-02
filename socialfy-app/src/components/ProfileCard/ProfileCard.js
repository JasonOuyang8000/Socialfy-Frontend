import { Link } from 'react-router-dom';
import ProfileCircle from '../ProfileCircle/ProfileCircle';
import './ProfileCard.css';

const ProfileCard = ({user}) => {

    return (
        
        <Link to={`/profile/${user.id}`} className="profile-card text-center shadow p-3 mb-5">
            <ProfileCircle styleName="user-profile-circle bg d-block mx-auto mb-5" image={user.image} userId={user.id} />
            <h3 className="line-clamp">{user.alias}</h3>

        </Link >
    );


}

export default ProfileCard;
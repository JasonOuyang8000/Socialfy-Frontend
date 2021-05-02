
import { Link } from 'react-router-dom';
import './ProfileCircle.css';


const ProfileCircle = ({image, styleName,userId}) => {
    console.log(userId)

    return (
        <Link
        to={`/profile/${userId}`}
        style={{backgroundImage:`url(${image})`}} 
        className={`${styleName} profile-circle-link`}
        >
        </Link>
    )
}

export default ProfileCircle;
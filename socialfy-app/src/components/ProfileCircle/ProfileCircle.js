
import './ProfileCircle.css';


const ProfileCircle = ({user}) => {
    

    return (
        <div 
        style={{backgroundImage:`url(${user.image})`}} 
        className="bg user-profile-circle d-block mx-auto mb-5"
        >
        </div>
    )
}

export default ProfileCircle;
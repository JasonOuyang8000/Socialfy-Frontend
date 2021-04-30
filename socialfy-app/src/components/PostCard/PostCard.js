import './PostCard.css';
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import ProfileCircle from '../ProfileCircle/ProfileCircle';

const PostCard = ({user, description}) => {  
    console.log(user);

    const context = useContext(UserContext);

    
    return (
        <div className="post-card d-flex mb-5 p-4">
            <div className="col-2">
                <ProfileCircle image={user.image} styleName="profile-circle-small" />
            </div>
            <div className="col-10">
                <h3 className="post-card-name">{user.alias}</h3>
                <p>{description}</p>
            </div>
            

        </div>
    )
};

export default PostCard;
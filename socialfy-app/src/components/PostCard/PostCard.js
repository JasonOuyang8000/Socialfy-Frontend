import './PostCard.css';
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import ProfileCircle from '../ProfileCircle/ProfileCircle';

const PostCard = ({user, description}) => {  
  

    const context = useContext(UserContext);

    
    return (
        <div className="post-card row no-gutters flex-lg-row mb-5 p-4 shadow">
            <div className="col-2">
                <ProfileCircle image={user.image} styleName="profile-circle-small  mx-auto" />
            </div>
            <div className="col-10">
                <h3 className="post-card-name mt-3 mb-5">{user.alias}</h3>
                <p>{description}</p>
            </div>
            

        </div>
    )
};

export default PostCard;
import './PostCard.css';
import { UserContext } from "../../context/UserContext";
import { Fragment, useContext, useState } from "react";
import ProfileCircle from '../ProfileCircle/ProfileCircle';
import { convertTime } from '../../functions/helpers';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Comments from '../Comments/Comments';



const PostCard = ({user, description, updatedAt}) => {  
    

    const [showComments, setShowComments] = useState(false);


  
  
    
    return (
        <div className="mb-5">
            <div className="post-card row no-gutters position-relative flex-lg-row p-4 shadow">
                <div className="col-2">
                    <ProfileCircle image={user.image} styleName="profile-circle-small  mx-auto" />
                </div>
                <div className="col-10">
                    <h3 className="post-card-name mt-3">{user.alias}</h3>
                    <p className="card-time">{convertTime(updatedAt)}</p>
                    <p className="mt-4 description-text">{description}</p>
                </div>
            
                <div className="col-12 d-flex">
                    <div onClick={() => setShowComments(!showComments)}  className="col-6 d-flex justify-content-center align-items-center icon-card "><FontAwesomeIcon icon={faComment} size="lg"/> </div>
                    <div  className="col-6 d-flex justify-content-center align-items-center icon-card"><FontAwesomeIcon icon={faThumbsUp} size="lg"/> </div>
                </div>
            </div>

            {showComments && <Comments image={user.image} />}
            

        </div>
    )
};

export default PostCard;
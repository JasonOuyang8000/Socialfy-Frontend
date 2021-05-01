import './PostCard.css';
import { UserContext } from "../../context/UserContext";
import { Fragment, useContext, useState } from "react";
import ProfileCircle from '../ProfileCircle/ProfileCircle';
import { convertTime, getLikes } from '../../functions/helpers';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Comments from '../Comments/Comments';
import axios from 'axios';



const PostCard = ({user, description, updatedAt, id, postLikes, setPosts, posts}) => {  
    

    const [showComments, setShowComments] = useState(false);
    const [likeSelected, setLikeSelected] = useState(false);
    
    getLikes(postLikes);

    const updateLike = async() => {
        try {
            const response = await axios.put(`${process.env.REACT_APP_BACKEND}/post/${id}/like`,{

            },{
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('userToken')
                }
            });

            const {post} = response.data;

            const postsCopy = [...posts];

            for (let i = 0; i < postsCopy.length; i++) {
                if (post.id === postsCopy[i].id) {
                    postsCopy[i] = post;
                }
            }
            setPosts(postsCopy);
        }
        catch(error) {

        }
      
    }

    const handleLike = () => {
        setLikeSelected(!likeSelected);
        updateLike();
    }
  
    
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
                    <div 
                    onClick={() => setShowComments(!showComments)}  
                    className={`col-6 d-flex justify-content-center align-items-center icon-card ${showComments ? 'like-selected': ''}`}

                    >
                    <FontAwesomeIcon
                     icon={faComment}
                     size="lg"
                      /> </div>
                    <div 
                    onClick={handleLike}
                    className={`col-6 d-flex justify-content-center align-items-center icon-card ${getLikes(postLikes)  ? 'like-selected': ''}`}>
                    <FontAwesomeIcon 
                    icon={faThumbsUp} 
                    size="lg"
                    /> 
                    <span 
                    className="ml-2 like-text"
                    >
                    {
                    getLikes(postLikes) 
                        || 
                        0
                    }

                    </span>
                    </div>
                </div>
            </div>

            {showComments && <Comments image={user.image} />}
            

        </div>
    )
};

export default PostCard;
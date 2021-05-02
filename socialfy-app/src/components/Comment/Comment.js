import { Fragment, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import ProfileCircle from '../ProfileCircle/ProfileCircle';
import './Comment.css';



const Comment = ({userId,description,user}) => {
    const {user: currentUser} = useContext(UserContext);

    return (
     
            <div className="mb-3 comment-section d-flex ">
                {currentUser.id !== user.id ? 
                <Fragment>
                    <div className="col-2">
                    <ProfileCircle image={user.image} styleName="profile-circle-x-small  mx-auto" />
                    </div>
                    <div className="col-10">
                        <h3 className="comment-alias">{user.alias}</h3>
                        <p className="w-75">{description}</p>
                    </div>
                </Fragment>
                :
                <Fragment>
                     <div className="col-10">
                        <h3 className="comment-alias text-right">You</h3>
                        <p className="text-right">{description}</p>
                    </div>
                    <div className="col-2">
                    <ProfileCircle image={user.image} styleName="profile-circle-x-small  mx-auto" />
                    </div>
                </Fragment>
                }
            </div>
      

     
    );
  
}


export default Comment;
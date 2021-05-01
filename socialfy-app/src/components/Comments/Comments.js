import ProfileCircle from '../ProfileCircle/ProfileCircle';
import './Comments.css';

const Comments = ({image}) => {
    

    return (
        <div className="comments-section shadow ">
            <form className="comment-form d-flex align-items-center">
                <div className="col-1">
                    <ProfileCircle image={image} styleName="profile-circle-x-small mt-5 mx-auto" />
                </div>
                <div className="col-11">
                    <input className="mt-5 ml-3 w-75 comment-input" type="text" placeholder="Write an Opinion..." />
                </div>
            </form>
        </div>
    );

};

export default Comments;
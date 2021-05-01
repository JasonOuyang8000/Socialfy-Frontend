
import './ProfileCircle.css';


const ProfileCircle = ({image, styleName}) => {
    

    return (
        <div 
        style={{backgroundImage:`url(${image})`}} 
        className={styleName}
        >
        </div>
    )
}

export default ProfileCircle;

import './ProfileCircle.css';


const ProfileCircle = ({image, styleName}) => {
    

    return (
        <div 
        style={{backgroundImage:`url(${image})`}} 
        className={`bg ${styleName} d-block mx-auto mb-5`}
        >
        </div>
    )
}

export default ProfileCircle;
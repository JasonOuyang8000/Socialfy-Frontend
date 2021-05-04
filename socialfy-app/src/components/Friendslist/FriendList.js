import axios from "axios";
import { useEffect, useState } from "react";
import './FriendList.css';


const FriendList = ({user}) => {
    const [friends, setFriends] = useState([]);
    const getFriends = async () => {
        try {
            const response  = await axios.get(`${process.env.REACT_APP_BACKEND}/user/${user.id}/friend`);
        }
        catch(error) {
            console.log(error);
        }
      

       
        
    }

    useEffect(() => {
        getFriends();
    },[]);

    return (
        <div className="friend-list shadow-lg p-4">
            <div className="title-box">
            <h3 className="mb-2" id="list-title">Friends</h3>
             
            </div>
            <div className="friend-list-place-holder mt-4">
                    <h3>No friends Yet...</h3>
                    
            </div>
        </div>
    )

}

export default FriendList;
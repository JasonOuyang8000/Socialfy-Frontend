import axios from "axios";
import { useEffect, useState } from "react";
import './FriendList.css';


const FriendList = () => {
    const [friends, setFriends] = useState([]);
    const getFriends = async () => {

      
;   
        const response  = await axios.get(`${process.env.REACT_APP_BACKEND}/user/friend`,{
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('userToken')
              }
        });

        console.log(response.data);
        
    }

    useEffect(() => {
        getFriends();
    });

    return (
        <div className="friend-list shadow-lg">
            <div className="title-box">
            <h3 className="mb-2" id="list-title">Friends</h3>
                
            </div>
        </div>
    )

}

export default FriendList;
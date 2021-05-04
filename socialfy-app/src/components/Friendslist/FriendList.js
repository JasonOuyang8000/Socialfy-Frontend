import axios from "axios";
import { useEffect } from "react";
import './FriendList.css';


const FriendList = () => {
    const getFriends = async () => {
   
        const response  = await axios.get(`${process.env.REACT_APP_BACKEND}/user/friend`,{
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('userToken')
              }
        });

        console.log(response);
        
    }

    useEffect(() => {
        getFriends();
    });

    return (
        <div className="friend-list shadow">
            <h3 className="mb-4" id="list-title">Friends</h3>

        </div>
    )

}

export default FriendList;
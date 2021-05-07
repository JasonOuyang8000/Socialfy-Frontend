import PostForm from "../components/PostForm/PostForm"
import PostList from "../components/PostList/PostList"
import ProfileCard from "../components/ProfileCard/ProfileCard";

import {useCallback, useContext, useEffect, useState} from 'react';
import axios from "axios";
import { UserContext } from "../context/UserContext";
import FriendList from "../components/Friendslist/FriendList";
import Chatbox from "../components/Chatbox/Chatbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThanEqual, fas, faSync } from "@fortawesome/free-solid-svg-icons";
import { io } from "socket.io-client";



const Home = () => {
  
    const [posts, setPosts] = useState([]);
    const [loaded, setLoaded] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const {user: currentUser} = useContext(UserContext);
    const [showChatBox, setShowChatBox] = useState(false);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState(false);
    const [currentChat, setCurrentChat] = useState(null);
    const [chatFriend, setChatFriend] = useState({});
    const [connected, setConnected] = useState(false);
    const socketio = io(process.env.REACT_APP_BACKEND);
   
    const getPosts = async() => {
        try {
            setLoaded(false);
            const response = await axios.get(`${process.env.REACT_APP_BACKEND}/post`);
            setLoaded(true);
            setPosts(response.data.posts);
        }
        catch(error) {
            console.log(error);
            setLoaded(true);
        }
    }
    if (newMessage === false && currentChat !== null) { 
        socketio.on(`message${currentUser.id}-${currentChat}`,() => setNewMessage(true));
    }

    

    
    const handleDelete = async(e,id) => {
        try {
            const response = await axios.delete(`${process.env.REACT_APP_BACKEND}/post/${id}`,{
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('userToken')
                }
            });

            getPosts();
        }   
        catch(error) {
            console.log(error);
        }
     
    }

    const chatClick = async (e,friendParams) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND}/user/${friendParams.id}/message`,{
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('userToken')
                }
            });
            if (!showChatBox) setShowChatBox(true);
        
           
            setChatFriend(friendParams);
            setMessages(response.data.messages);   
            
         
          
            
    
       
        }   
        catch(error) {
            console.log(error);
        }
    }
    
    
    const handleClick = async (formParams) => {
        try {
            if (formParams.description === '' && formParams.file === '') throw new Error("Post can't be empty!!");
            setDisabled(true);
            const formData = new FormData();
            formData.append('description', formParams.description);
            
            if (formParams.file !== "") formData.append('file', formParams.file);
         
            const response = await axios.post(`${process.env.REACT_APP_BACKEND}/post`, formData,{
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('userToken'),
                    'content-type': 'multipart/form-data'
                }
            });
      
            setDisabled(false);
            getPosts();
        }
        catch(error)  {
            console.log(error);
            setLoaded(true);
            setDisabled(false);
        }
    }
    const eventHandler = () => {
        setConnected(true);
    }

    // const getSocket = () => {
    //     const token = localStorage.getItem('userToken');
    //     if (token) {
           
    //         return socketio.connect(process.env.REACT_APP_BACKEND, {
    //             query: {
    //                 token
    //             }
    //         })
    //     }
    //     return;
    // }



    useEffect(() => {
        
        
        socketio.emit('verify', localStorage.getItem('userToken'));

       
        
        socketio.on(`message${currentUser.id}`,() => setNewMessage(true));
        socketio.on('connection', eventHandler)
        
        getPosts(); 



        return () => {
            socketio.off('Disconnect',eventHandler);
        }
    }, []);



   
    return (
        <div className="container c-width mt-5">
              <FontAwesomeIcon onClick={getPosts} className="fa-btn-effect sync-color sync-btn-home" size="lg" icon={faSync}/>
            <div className="row ">
                <div className="col-xl-3 d-xl-block d-none">
                <ProfileCard user={currentUser}/>
                {showChatBox && <Chatbox 
                newMessage={newMessage}
                setNewMessage={setNewMessage}
                messages={messages} 
                setMessages={setMessages} 
                setShowChatBox={setShowChatBox}
                chatFriend={chatFriend}
                />}
                </div>
                <div className="col-12 col-md-6">
              
                    <PostForm handleClick={handleClick}  disabled={disabled}/>
                    <PostList setPosts={setPosts} handleDelete={handleDelete} posts={posts} loaded={loaded}/>
                </div>
                <div className="col-md-6 col-xl-3 order-1">
                    <FriendList socketio={socketio} user={currentUser} chatClick={chatClick}/>
                </div>

            
            </div>
            
        </div>
    )
}



export default Home;
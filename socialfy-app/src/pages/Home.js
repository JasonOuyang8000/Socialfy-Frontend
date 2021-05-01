import PostForm from "../components/PostForm/PostForm"
import PostList from "../components/PostList/PostList"
import ProfileCard from "../components/ProfileCard/ProfileCard";

import {useEffect, useState} from 'react';
import axios from "axios";


const Home = () => {
    
    const [posts, setPosts] = useState([]);
    const [loaded, setLoaded] = useState(null);
    const [disabled, setDisabled] = useState(false);

    const getPosts = async() => {
        try {
            setLoaded(false);
            const response = await axios.get(`${process.env.REACT_APP_BACKEND}/post`);
            await new Promise(resolve => {
                setTimeout(resolve, 100)
            });
            setLoaded(true);
            setPosts(response.data.posts);
        }
        catch(error) {
            console.log(error);
        }
    }

    
    const handleClick = async (formParams) => {
        try {
            if (formParams.description === '') throw new Error("Post can't be empty!!");
            setDisabled(true);
            const response = await axios.post(`${process.env.REACT_APP_BACKEND}/post`, formParams,{
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('userToken')
                }
            });
            await new Promise(resolve => {
                setTimeout(resolve, 100)
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


    useEffect(() => {
        getPosts();
    }, []);


    return (
        <div className="container c-width mt-5">
            <div className="row">
            <div className="col-12 col-lg-3">
               <ProfileCard />
              
            </div>
            <div className="col-12 col-lg-6">
                <PostForm handleClick={handleClick} disabled={disabled}/>
                <PostList setPosts={setPosts} posts={posts} loaded={loaded}/>
            </div>
            <div className="col-12 col-lg-3">
        
            </div>
        


            </div>
      
        </div>
    )
}



export default Home;
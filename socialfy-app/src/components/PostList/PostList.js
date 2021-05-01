import axios from "axios";

import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

import PostCard from "../PostCard/PostCard";

const PostList = () => {
    const [loaded, setLoaded] = useState(null);
    const [posts, setPosts] = useState([]);

    const getPosts = async() => {
        try {
            setLoaded(false);
            const response = await axios.get(`${process.env.REACT_APP_BACKEND}/post`);
            setLoaded(true);
            setPosts(response.data.posts);
        }
        catch(error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getPosts();
    }, []);

   


    return (
        <div className="post-list">
            {loaded 
            ? 
        
            posts.map((post) => (
                <PostCard key={post.id} {...post} />
            ))
                
            :
            <div style={{height: '400px'}} className="d-flex justify-content-center align-items-center">
                <Loader />
            </div>
            
        
            }
           

        </div>

    );
   
};


export default PostList;
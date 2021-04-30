import axios from "axios";

import { useEffect, useState } from "react";

import PostCard from "../PostCard/PostCard";

const PostList = () => {

    
    const [posts, setPosts] = useState([]);

    const getPosts = async() => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND}/post`);
            setPosts(response.data.posts);
        }
        catch(error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getPosts();
    }, []);

    console.log(posts);
    return (
        <div className="post-list">
            {
                posts.map((post) => (
                    <PostCard key={post.id} {...post} />
                ))
            }


        </div>

    );
   
};


export default PostList;
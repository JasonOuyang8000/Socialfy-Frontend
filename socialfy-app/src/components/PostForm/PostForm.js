import axios from 'axios';
import { useState } from 'react';
import './PostForm.css';



const PostForm = () => {
    
    const [formParams, setFormParams] = useState({
        description: '',
    });

    const handleClick = async() => {
        try {
            if (formParams.description === '') throw new Error("Post can't be empty!!");
            
            const response = await axios.post(`${process.env.REACT_APP_BACKEND}/post`, formParams,{
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('userToken')
                }
            });

            console.log(response);


        }
        catch(error)  {
            console.log(error);
        }
    }

    const handleChange = e => {
        e.preventDefault();

        const { value }  = e.target;

        setFormParams({
            ...formParams,
            description: value
        });

    }


    return (
        <div className="post-form mb-5 p-4 d-flex flex-column align-items-center shadow">
            <textarea value={formParams.description} onChange={handleChange} placeholder="Write a post..."/>
            <button onClick={handleClick} className="w-75 btn-post">Send a Post</button>
        </div>
    );
}

export default PostForm;
import axios from 'axios';
import { useState } from 'react';
import './PostForm.css';



const PostForm = ({handleClick,disabled}) => {
    
    const [formParams, setFormParams] = useState({
        description: '',
    });


    const handleChange = e => {
        e.preventDefault();

        const { value }  = e.target;

        setFormParams({
            ...formParams,
            description: value
        });
    };


    const handleFormParams = () => {
        handleClick(formParams);
        setFormParams({
            ...formParams,
            description: ''
        });
    }



    return (
        <div className={`post-form mb-5 p-4 d-flex flex-column align-items-center shadow ${disabled ? 'opacity-disabled' : ''}`}>
            <textarea value={formParams.description} onChange={handleChange} placeholder="Write a post..." disabled={disabled}/>
            <button onClick={handleFormParams} className="w-75 btn-post">Send a Post</button>
        </div>
    );
}

export default PostForm;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { faSync } from '@fortawesome/free-solid-svg-icons';

import './Signup.css'


const Signup = () => {
    const choices = ['male', 'female', 'human', 'identicon', 'initials', 'bottts', 'avataaars', 'jdenticon', 'gridy','micah'];
    
    const [count, setCount] = useState(0);
    const [formImage, setFormImage] = useState('');
    const [formParams, setFormParams] = useState({
        alias: '',
        image: 'https://avatars.dicebear.com/api/female/6.svg',
    })
 

    const handleTextChange = (e) => {
        const { value } = e.target;
        
        setFormParams({
            ...formParams,
            alias: value
        });

      

        if(formParams.image) setFormImage(formParams.image);
    }
    
    const handleImageClick = (e) => {
        e.preventDefault();
        setCount(count + 1);
        const randChoice = choices[Math.floor(Math.random() * choices.length)];
      
        const newImage = `https://avatars.dicebear.com/api/${randChoice}/${count}.svg`;

        setFormParams({
            ...formParams,
            image: newImage
        })
        
        if(formParams.alias !== '') setFormImage(formParams.image);
    }   


    const handleSubmit = () => {

    };


   

    return (
        <form onSubmit={handleSubmit} className="form mx-auto w-50 ">
            <div className="mb-5">
                <input onChange={handleTextChange} type="text" className="w-100 sign-input-text" placeholder="Enter an Alias"/>
            </div>

            <div className="mb-5">
                <h3 className="text-center mb-4">Your Profile Image</h3>
                <div 
                style={{backgroundImage:`url(${formParams.image})`}} 
                className="bg profile-circle d-block mx-auto mb-5"
                >
           
                </div> 
                <button onClick={handleImageClick} className="btn-green-custom generate-new-image d-block mx-auto">
                    <FontAwesomeIcon icon={faSync} />
                </button>

            
             
            </div>

            <input type="submit" value="Create an Account" className="btn-submit" />
           
            
       

        </form>
    )
}

export default Signup;
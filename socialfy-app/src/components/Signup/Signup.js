import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react';
import { faSync } from '@fortawesome/free-solid-svg-icons';


import './Signup.css';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';


const Signup = () => {
    const choices = ['male', 'female', 'human', 'identicon', 'initials', 'bottts', 'avataaars', 'jdenticon', 'gridy','micah'];
    
    const [count, setCount] = useState(0);
 
    const [formParams, setFormParams] = useState({
        alias: '',
        image: 'https://avatars.dicebear.com/api/female/6.svg',
    });

    const {user, setUser} = useContext(UserContext);
    
 

    const handleTextChange = (e) => {
        const { value } = e.target;
        
        setFormParams({
            ...formParams,
            alias: value
        });
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
        

    }   


    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND}/user`, formParams);
            setUser({
                alias: response.data.user.alias,
                image: response.data.user.image,
            });
            console.log(response);
            localStorage.setItem('userToken', response.data.userToken);
        }

        catch(error) {
            console.log(error);
            if (error.response) console.log(error.response.data.error.message);
        }
       
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

            <input type="submit" value="Create Account" className="btn-submit" />
           
            
       

        </form>
    )
}

export default Signup;
import { useEffect, useState } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './Signup.css'

const Signup = () => {
    const menuItems = ['avataaars', 'bottts','gridy', 'human','male', 'female','micah', 'jdenticon'];
    const [formImage, setFormImage] = useState('');
    const [formParams, setFormParams] = useState({
        alias: '',
        image: 'https://avatars.dicebear.com/api/avataaars/test.svg',
    })

    const handleTextChange = (e) => {
        const { value } = e.target;
        
        setFormParams({
            ...formParams,
            alias: value
        });

      

        if(formParams.image) setFormImage(formParams.image);
    }
    
    const handleImageChange = (e) => {
        const { value } = e.target;
      

        setFormParams({
            ...formParams,
            image: value
        })
        
        if(formParams.alias !== '') setFormImage(formParams.image);
    }   


    console.log(formParams);


    return (
        <form className="form mx-auto w-50 ">
            <div className="mb-5">
                <input onChange={handleTextChange} type="text" className="w-100 sign-input-text" placeholder="Enter an Alias"/>
            </div>

            <div className="mb-5">
                <select onChange={handleImageChange} className="select-css">
                    {menuItems.map((option,index) => 
                    <option  key={index} value={`https://avatars.dicebear.com/api/${option}/${formParams.alias}.svg`}>{option}</option>    
                    )
                }
                </select>
            </div>
            
            {formImage !=='' &&  
                <img className="form-image" src={formImage} alt="male" />
            }

        </form>
    )
}

export default Signup;
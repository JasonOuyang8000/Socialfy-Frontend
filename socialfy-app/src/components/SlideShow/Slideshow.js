import axios from 'axios';
import { useEffect, useState } from 'react';
import './Slideshow.css';

export default function Slideshow (){

    const [images, setImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    let timer = null;

  

  

    const changeImageIndex = () => {
        const img = document.querySelector('.slideshow img');
        img.classList.add('fadein-image');
        timer = setTimeout(() => {
            img.classList.remove('fadein-image');
            setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
        },4000);     
    }

    useEffect(() => {
        changeImageIndex();
        
        

        return () => clearTimeout(timer);
    }, [ currentImageIndex ]);

    useEffect(() => {
        axios.get('https://api.pexels.com/v1/search?query=nature&per_page=20',{
            headers: {
                authorization: process.env.REACT_APP_API_KEY
            }
        }).then(res => {
            const { photos } = res.data;
            const imagesCopy = photos.map(info => info.src.large);
            setImages(imagesCopy);
        })
    }, []);


    return (
        <div className="slideshow shadow">
            <img src={images[currentImageIndex]}  alt={'image-' + currentImageIndex} />


        </div>
    );
}
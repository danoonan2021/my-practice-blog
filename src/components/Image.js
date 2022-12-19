import React from 'react';
import BackgroundImage from '../images/background.jpg'
import './Image.css';


export function Image() {
    return (  
        <>
            <img className='background-image' src={BackgroundImage} alt="Background"/>
        </>
    );
}


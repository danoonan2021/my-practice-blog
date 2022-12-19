import React from 'react';
import BackgroundImage from '../images/background.jpg'
import './Image.css';


export function Image() {
    return (  
        <>
            <img className='background-image' src={BackgroundImage} alt="Background"/>
            <div className='intro-statement'>Hello! My name is Dustin Noonan and this is my personal blog.</div>
        </>
    );
}


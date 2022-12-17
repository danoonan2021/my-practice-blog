import React, { useState, useEffect } from 'react';


export function Button(props) {

    const [clicked, setClicked] = useState(false);

    // handles the click setting the state to true
    const handleClick = () => {
        setClicked(true);
    };

    return (
        <button  className='button' style={{color: clicked ? 'white' : '',}} onClick={handleClick}  value={props.text}></button>
      );
}

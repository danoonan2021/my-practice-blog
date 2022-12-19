import React, { useState } from 'react';
import './Button.css';

export function Button(props) {

    const [clicked, setClicked] = useState(false);

    // handles the click setting the state to true
    const handleClick = () => {
        setClicked(true);
    };


    return (
        <button className="button" type="button" onClick={handleClick} style={
            {color: clicked ? "" : "white",
             backgroundColor: clicked ? "" : "white" // still need to figure out how this works
            }
        } >{props.text}</button>
      );
}

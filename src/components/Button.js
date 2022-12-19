import React, { useState } from 'react';
import './Button.css';

export function Button(props) {

    const [clicked, setClicked] = useState(false);

    // handles the click setting the state to true
    const handleClick = () => {
        setClicked(true);
    };


    return (
        <button className="button" type="button" onClick={handleClick}>{props.text}</button>
      );
}

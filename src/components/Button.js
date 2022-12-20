import React, { useState } from 'react';
import './Button.css';

export function Button(props) {

    const text = props.text; // the text of the button

    const path = props.page; // the path to the page

    const [clicked, setClicked] = useState(false);

    return (
        <button className="button" type="button" onClick={setClicked}>{props.text}</button>
      );
}


import React from 'react';
import { Button } from './Button';
import './Navbar.css';
import { Image } from './Image';

export function NavBar() {
  return (
    <>
     <ol className='navbar-list'>
        <li>
            <h1 className='navbar-logo'>Logo Here</h1>
        </li>
        <li className='navbar-elem'>
            <Button text="Hello"/>
        </li>
        <li className='navbar-elem'>
            <Button text="World"/>
        </li>
        <li className='navbar-elem'>
            <Button text="Blog"/>
        </li>
     </ol>
     <h1 className='blog-header'>Welcome!</h1>
     <Image/>
    </>
  )
};
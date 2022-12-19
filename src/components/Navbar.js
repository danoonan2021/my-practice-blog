
import React from 'react';
import { Button } from './Button';
import './Navbar.css';
import { Image } from './Image';

export function NavBar() {
  return (
    <>
     <h1 className='header1'>My Blog</h1>
        <Button text="Hello"/>
        <Image/>
    </>
  )
};
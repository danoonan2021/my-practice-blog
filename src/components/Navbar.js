
import React from 'react';
import { Button } from './Button';
import './Navbar.css';
import { Image } from './Image';
import { Link, Outlet } from 'react-router-dom';


// TODO: Need to change these to be links and have Outlet at the end
export function NavBar() {
  return (
    <>
     <ol className='navbar-list'>
        <li>
            <h1 className='navbar-logo'>Logo Here</h1>
        </li>
        <li className='navbar-elem'>
            <Button text="Hello" page='/'/>
        </li>
        <li className='navbar-elem'>
            <Button text="World" page='about'/>
        </li>
        <li className='navbar-elem'>
            <Button text="Blog" page='signup'/>
        </li>
     </ol>
     <h1 className='blog-header'>Welcome!</h1>
     <Image/>
    </>
  )
};
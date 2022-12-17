
import React from 'react';
import { Button } from './Button';
import './Navbar.css';

export function NavBar() {
  return (
    <>
     <h1 className='header1'>My Blog</h1>
        <ol className='navbar-list'>
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
    </>
  )
};
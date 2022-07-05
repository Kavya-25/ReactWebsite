import React,{useState,useEffect} from 'react'
import './Navbar.scss';
import { Link } from 'react-router-dom';
import {GiSplitCross,GiHamburgerMenu} from 'react-icons/gi'
import Button from '../Button/Button';

export default function Navbar() {
    const [clicked,setClicked]=useState(false);
    const [button,setButton]=useState(true);
    const handleClick=()=>{
        setClicked(!clicked)
    }
    const closeMobileMenu=()=>{
        setClicked(false)
    }
    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };
    useEffect(()=>{
        showButton();
    },[])
    window.addEventListener('resize',showButton);
  return (
    <nav className='navbar'>
        <div className="navbar-container">
            <Link to="/" className='navbar-logo' onAuxClick={closeMobileMenu}>TRVL</Link>
            <div className="menu-icon" onClick={handleClick}>
            {clicked?<GiSplitCross/>:<GiHamburgerMenu/>}
            </div>
            <ul className={clicked?'nav-menu active':'nav-menu'}>
                <li className="nav-item">
                    <Link to='/'className='nav-links' onClick={closeMobileMenu}>Home </Link>
                </li>
                <li className="nav-item">
                    <Link to='/services'className='nav-links' onClick={closeMobileMenu}>Services</Link>
                </li>
                <li className="nav-item">
                    <Link to='/products'className='nav-links' onClick={closeMobileMenu}>Products</Link>
                </li>
                <li className="nav-item">
                    <Link to='/sign-up'className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
                </li>
            </ul>
            {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
            
        </div>
    </nav>
  )
}

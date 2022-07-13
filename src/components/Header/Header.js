import React from 'react'
import Button from '../Button/Button'
import {AiFillPlayCircle} from 'react-icons/ai'
import './Header.scss'

export default function Header() {
  return (
    <div className='header'>
        <video src="/videos/video-2.mp4" autoPlay muted loop/>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you looking for?</p>
        <div className="hero-btns">
            <Button buttonStyle='btn--outline' buttonSize='btn--large' className='btn'>
                GET STARTED
            </Button>
            <Button buttonStyle='btn--primary' buttonSize='btn--large' className='btn'>
                WATCH TRAILER 
            </Button>

        </div>
    </div>
  )
}

import React from 'react'
import './Footer.scss'
import Button from '../Button/Button'
import {BsInstagram,BsFacebook,BsYoutube,BsFillTelephoneFill} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import {AiOutlineMail} from 'react-icons/ai'

export default function Footer() {
  return (
    <div className='footer'>
        <h1>Join the Adventure Newsletter to receive our best vacation deals</h1>
        <h3>You can unsubscribe any time</h3>
        <form action="">
            <input type="text" placeholder='E-mail'/>
            <Button buttonStyle='btn--outline' buttonSize='btn--large' >Subscribe</Button>
        </form>
        <div className="footer-info">
          <div className="info-left">
            <BsFillTelephoneFill className='telephone'/>&nbsp;+91 9272847398<br/><br/>
            <AiOutlineMail/>&nbsp;srtravelsindia@gmail.com
          </div>
          <div className="info-right">
          <GoLocation className='location'/>&nbsp;5th Avenue Bakery,Peter Street London
          </div>
        </div>
        <div className="social-icons">
        <div className="instagram">
      <BsInstagram/>
        </div>
        <div className="facebook">
        <BsFacebook/>
        </div>
        <div className="youtube">
        <BsYoutube/>
        </div>
        <div className="makemytrip">

        </div>
        </div>
    </div>
  )
}

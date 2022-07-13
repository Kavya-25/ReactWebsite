import React from 'react'
import './Footer.scss'
import Button from '../Button/Button'

export default function Footer() {
  return (
    <div className='footer'>
        <h1>Join the Adventure Newsletter to receive our best vacation deals</h1>
        <h3>You can unsubscribe any time</h3>
        <form action="">
            <input type="text" placeholder='E-mail'/>
            <Button buttonStyle='btn--outline' buttonSize='btn--large' >Subscribe</Button>
        </form>
    </div>
  )
}

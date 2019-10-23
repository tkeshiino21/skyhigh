import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='./signedup'>New Peoject</NavLink></li>
      <li><NavLink to='./signedout'>Log Out</NavLink></li>
      <li><NavLink to='./'><button className="btn btn-pink"></button></NavLink></li>
    </ul>
  )
}

export default SignedOutLinks;
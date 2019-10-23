import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li><NavLink to='./signedup'>New Peoject</NavLink></li>
      <li><NavLink to='./signedout'>Log Out</NavLink></li>
      <li><a href="https://google.com">hello</a></li>
      <li><NavLink to='./'><button className="btn btn-pink"></button>
        {props.profile.initials}
      </NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut : () => dispatch(signOut())
  }
}

export default connect(mapDispatchToProps)(SignedInLinks)

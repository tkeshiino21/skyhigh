import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li><NavLink to='/signup'>signup</NavLink></li>
      <li><NavLink to='/signin'>Log In</NavLink></li>
      <li><NavLink to='/signout'>Log Out</NavLink></li>
      <li><a href="https://google.com">hello</a></li>
      <li><NavLink to='./'>
        <button className="btn btn-pink">
          {props.profile.initials}
        </button>
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

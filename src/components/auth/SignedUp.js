import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../store/actions/authActions';

class SignedUp extends Component {
  state = {
    email: '',
    passward: ''
  }
  handleChange = (e) => {
    console.log(e)
  }
  handleSubmit = (e) => {
    console.log(e)
  }
  render() {
    return (
      <div className="container">
        <form className="white">
          <h5 className="grey-text text-darken-3">
            Sign In
          </h5>
          <div className="input-field">
            <label htmlFor="email">
              <input type="email" id="mail" onChange={this.handleChange}/>
            </label>
          </div>
          <div className="input-field">
            <label htmlFor="password">
              <input type="email" id="mail" onChange={this.handleSubmit}/>
            </label>
          </div>
          <div className="input-field">
            <label htmlFor="lastName">
              <input type="email" id="mail" onChange={this.handleSubmit}/>
            </label>
          </div>
          <div className="input-field">
            <label htmlFor="firstName">
              <input type="email" id="mail" onChange={this.handleSubmit}/>
            </label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 ze-depth-0">
              Login
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect (mapStateToProps)(SignedUp)
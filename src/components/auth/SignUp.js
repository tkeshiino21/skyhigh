import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions';

class SignUp extends Component {
  state = {
    email: '',
    passward: '',
    firstName: '',
    lastName: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.terget.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
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
              <input type="email" id="email" onChange={this.handleChange}/>
            </label>
          </div>
          <div className="input-field">
            <label htmlFor="password">
              <input type="password" id="password" onChange={this.handleChange}/>
            </label>
          </div>
          <div className="input-field">
            <label htmlFor="firstName">
              <input type="text" id="firstName" onChange={this.handleChange}/>
            </label>
          </div>
          <div className="input-field">
            <label htmlFor="lastName">
              <input type="text" id="lastName" onChange={this.handleChange}/>
            </label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 ze-depth-0">
              SIGN UP
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
    signup: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect (mapStateToProps)(signUp)
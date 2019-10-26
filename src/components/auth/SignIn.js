import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { auth } from 'react-redux-firebase';

class SignIn extends Component {
  state = {
    email: '',
    passward: '',
    firstName: '',
    lastNane: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    console.log(e)
    e.prevetDefault();
    this.props.signIn(this.state);
  }
  render() {
    const { authError } = (state) => this.props
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">
            Sign In
          </h5>
          <div className="input-field">
            <label htmlFor="email">
              <input type="email" id="email" onChange={this.handleChange} />
            </label>
          </div>
          <div className="input-field">
            <label htmlFor="password">
              <input type="password" id="password" onChange={this.handleSubmit} />
            </label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 ze-depth-0">
              Login
            </button>
          </div>
          <div className="red-text center">
            { authError ? <p>{authError}</p> : null}
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
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(null, mapDispatchToProps)(signIn)
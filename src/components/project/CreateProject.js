import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createProject } from '../store/actions/projectActions'
import { Redirect } from 'react-router-dom'
import authReducer from '../store/reducers/authReducer'

class CreateProject extends Component {
  state = {
    title:  '',
    content: ''
  }
  handleChange = (e) => {
    this.setState ({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state)
    this.props.history.push('/');
  }
  render() {
    const { auth }  = this.props;
    if (!auth.uid)
    return <Redirect to='/signin'></Redirect>
    return (
      <div className="container">
        <form className="white">
          <h5 className="grey-text text-darken-3">
            Create New Project
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
              Create
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state)  => {
  return {
    auth: state.firebase.state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
};

export default connect(null, mapDispatchToProps)(createProject)
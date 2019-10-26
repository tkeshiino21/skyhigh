import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import ProjectDetails from './components/project/ProjectDetails'
import SignIn from "./components/auth/SignIn";
import SignUp from './components/auth/SignUp'
import CreateProject from './components/project/CreateProject'
import Dashboard from './components/dashboard/Dashboard'

class App extends Component {
  render (){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={ Dashboard } />
            <Route path='/signin' component={ SignIn }/>
            <Route path='/signup' component={ SignUp } />
            <Route path='/dashboard' component={ Dashboard } />
            <Route path='/project/id:' component={ ProjectDetails } />
            <Route path='/create' component={ CreateProject } />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
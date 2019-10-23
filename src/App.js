import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import ProjectDetails from './components/project/ProjectDetails'
import SignedIn from "./components/auth/SignedIn";
import SignedUp from './components/auth/SignedUp'
import CreateProject from './components/project/CreateProject'
import Dashboard from './components/dashboard/Dashboard'

class App extends Component {
  render (){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/signedin' component={ SignedUp }/>
            <Route path='/signedup' component={ SignedIn } />
            <Route path='./dashboard' component={ Dashboard } />
            <Route path='./projectdetails' component={ ProjectDetails } />
            <Route path='./createproject' component={ CreateProject } />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
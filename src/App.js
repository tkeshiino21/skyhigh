import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import ProjectDetails from './components/project/ProjectDetails'
import SignIn from "./components/auth/SignIn";
import SignUp from './components/auth/SignUp'
import CreateProject from './components/project/CreateProject'
import Dashboard from './components/dashboard/Dashboard'
import { Link } from 'react-router-dom'

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
            <Route path='/project/id:' component={ ProjectDetails } />
            <Route path='/create' component={ CreateProject } />
          </Switch>
          <Link to="/"><button>
            Dashboard
          </button></Link>
          <Link to="create"><button>
            Create
          </button></Link>
          <Link to="signin"><button>
            SignIn
          </button></Link>
          <Link to="signout"><button>
            SignOut
          </button></Link>
          <Link to="signup"><button>
            SignUp
          </button></Link>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
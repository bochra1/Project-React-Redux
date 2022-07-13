
import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashbord/Dashboard';
import Navbar from './components/layout/Navbar';
import Projectdetails from './components/projects/Projectdetails';
import Signin from './components/auth/Signin';
import Signup from './components/auth/signup';
import CreateProject from './components/projects/Createproject.';
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/project/:id' component={Projectdetails} />
            <Route path='/signin' component={Signin} />
            <Route path='/signup' component={Signup} />
            <Route path='/create-project' component={CreateProject} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; //what does import "BrowserRouter as..." do?
import PrivateRoute from './Components/Auth/Private-Route';
import { Public, Protected, Another } from './Components/Sample-Pages';
import Login from './Components/Login';
import { AuthButton } from './Components/Auth/Auth'

///////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

//function App() {
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AuthButton />
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
            <li>
              <Link to="/another">Another Protected Page</Link>
            </li>
          </ul>
          <Route path="/public" component={Public} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/protected" component={Protected} />
          <PrivateRoute path="/another" component={Another} />
        </div>
      </Router>
    )
  }
}

export default App;

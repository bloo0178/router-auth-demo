import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {fakeAuth} from './Auth/Auth';

class Login extends Component {
    state = { redirectToReferrer: false };
  
    login = () => {
      fakeAuth.authenticate(() => {
        this.setState({ redirectToReferrer: true });
      });
    };
  
    render() {
      let { from } = this.props.location.state || { from: { pathname: "/" } }; //what does this do? What is from?
      let { redirectToReferrer } = this.state;
      if (redirectToReferrer) return <Redirect to={from} />;
      return (
        <div>
          <p>You must log in to view the page at {from.pathname}</p> {/*what is this?*/}
          <button onClick={this.login}>Log in</button>
        </div>
      );
    }
  }

  export default Login; 
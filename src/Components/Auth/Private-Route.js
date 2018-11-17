/*This file contains a HOC that is used to wrap components that shouldn't be visible
unless a user is logged in. See App.js for implementation.  
*/

import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {fakeAuth} from './Auth';

const PrivateRoute = ({ component: Component, ...rest }) => { //What does this do? 
    return (
      <Route
        {...rest} //what does this do? Is this similar to passing props?
        render={props =>
          fakeAuth.isAuthenticated ? (
            <Component {...props} /> // How is this pulling props in if it doesn't know what variable props are assigned to?
          ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location }
                }}
              />
            )
        }
      />
    );
  }

  export default PrivateRoute;
  
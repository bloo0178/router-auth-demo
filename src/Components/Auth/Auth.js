import React from 'react';
import { withRouter} from 'react-router-dom';

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100); // fake async
    }
  };

/* withRouter is a higher-order component that is used to pass updated
match, location, and history props to the wrapped component 
whenever it renders.
*/
const AuthButton = withRouter( 
  /* History objects may be used to programmatically change 
  the current location using the following methods: 
  push, replace, go, goBack, goForward, or canGo.
  */
    ({ history }) => 
      fakeAuth.isAuthenticated ? (
        <p>
          Welcome!{" "} 
          <button
            onClick={() => {
              fakeAuth.signout(() => history.push("/")); 
              // Use push, replace, and go to navigate around.
            }}
          >
            Sign out
          </button>
        </p>
      ) : (
          <p>You are not logged in.</p>
        )
  );

export {fakeAuth, AuthButton};
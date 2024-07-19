import React from 'react';
import { useLocation } from 'react-router-dom';
import './WelcomePage.css';

function WelcomePage() {
  const location = useLocation();
  const { state } = location;
  const { username, password } = state || {};

  return (
    <div>
      
      {username ? (
        <>  {/* empty angular brackets is called a fragment*/}

            <h1>Welcome</h1>
          <p className="mybold"><b className="myfont">Username:</b> {username}</p>
          <p className="mybold"><b className="myfont">Password:</b> {password}</p>
        </>
      ) : 
      (
        <>
        <h1>LOGIN FAILED!</h1>
        <p>Please enter <i><b>  Username</b> </i>and <i><b>Password</b></i></p>
        </>
      )
      }
    </div>
  );
}

export default WelcomePage;

import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

//Pages
import SpotifyLogin from './Pages/SpotifyLogin'
import Profile from './Pages/Profile'
import HomePage from './Pages/HomePage'
import PersonalProfile from './Pages/PersonalProfile';
import { getTokenFromURL } from './Pages/spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {
  
  //short term memory
  const [spotToken, setToken] = useState(null);

  //run code based on a given condition
  //we get access token
  useEffect(() => {
    const hash = getTokenFromURL();
    //removes acess token from url
    window.location.hash = "";
    //temp spotToken
    const _spotToken = hash.access_token;

    if (_spotToken) {
      setToken(_spotToken);
      spotify.setAccessToken(_spotToken);

      spotify.getMe().then(user => {
        console.log('User info ', user);
      })
      
    }

    console.log("token given -> ", _spotToken);
    
  }, []);

  return (
    //if there is token then go to profile, else go back to homepage
    <Router>
      <div className="isLogin"> {spotToken ?
        //<h1>hello</h1>
        <PersonalProfile />
        : 
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/spotlog' component={SpotifyLogin} />
        </Switch>
        }
      </div>
    </Router>
  )
 
}


export default App;

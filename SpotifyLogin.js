import React from 'react';
import { loginURL } from './spotify';
import './SpotifyLogin.css';

function SpotifyLogin() {
    return(
        <div className="spotifyLogin">
            <h1>Login to Spotify</h1>
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
            {/*<img src="https://i.pinimg.com/originals/27/6f/27
            /276f273d11f8b9dbc0a9c55bb38ea8c6.gif" alt=""/>/*}
            {/* Spotify logo*/}
            {/* login with spotify button*/}
            <a href={loginURL}>LOGIN WITH SPOTIFY</a>
        </div>
    );
}
 
export default SpotifyLogin
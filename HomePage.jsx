import React, { Component } from "react";
import { Link } from "react-router-dom";
import App from "../App";

const HomePage = () => {
    
        return (
            <div className="app">
                <h1>Welcome to the Spotify App</h1>
                <Link to="/profile">
                    <button>Sign Up</button>
                </Link>
            </div>
        )
}

export default HomePage; 
import React, { Component } from 'react'
import '../Components/CSS/todo.css'
import SpotifyLogin from './SpotifyLogin'
import {Link} from 'react-router-dom'

import './Profile.css';

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            gender: "",
            userName: "",
            passwordSpotify: "",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    /*
    userNamehandler = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    passwordSpotifyhandler = (event) => {
        this.setState({
            passwordSpotify: event.target.value
        })
    }
    */
    

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            password: '',
            gender: "",
        })
     event.preventDefault()
        
    }

    render() {
        return (
            <div className="register">
                <form onSubmit={this.handleSubmit}>
                  
                    <h1>Sign Up</h1>

                    <label>First Name :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="First Name" /><br />

                    <label>Last Name :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="Last Name" /><br />

                    <label>Email :</label> <input type="text" value={this.state.email} onChange={this.emailhandler} placeholder="Please enter an email"/> <br />

                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                    <label>Gender :</label> <select onChange={this.genderhandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />

                    <h2>Link your spotify account</h2>

                    {/*
                    <label>User Name :</label> <input type="text" value={this.state.userName} onChange={this.userNamehandler} placeholder="User Name" /><br />

                    <label>Password :</label> <input type="password" value={this.state.passwordSpotify} onChange={this.passwordSpotifyhandler} placeholder="Password..." /><br />
                    */}
                    
                    

                    <Link to="/spotlog"><input type="submit" value="Submit" /></Link>



                </form>

            </div>
            
        )
    }
}

export default Profile
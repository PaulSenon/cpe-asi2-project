import React, { Component } from 'react';
import Information from './containers/information';
import Button from './containers/button';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import io from 'socket.io-client';



class Login extends Component {
    constructor(props) {
        super(props);
        this.socket = io();
        this.state = { surname: '', password: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.current_state = "login";
    }

    handleSubmit(event) {
        this.current_state = "add_user";
    }

    handleOnClick(e){
        e.preventDefault();
        const msg = {oui:'jadoreladata'};
        console.log('emit', msg);
        this.socket.emit('message', msg);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="ui form">
                    <Information text="Surname" type="text" />
                    <Information text="Password" type="password" />
                    <Link to='/menu'>
                        <Button value="Connect" type="submit" />
                    </Link>
                    <Link to='/login'>
                        <Button value="Cancel" type="submit" />
                    </Link>
                    <button value="New User" onClick={this.handleOnClick}></button>
                    {/* <Link to='/adduser'>
                        <Button value="New User" type="submit" />
                    </Link> */}
                </div>
            </form>
        );
    }
}
export default Login;
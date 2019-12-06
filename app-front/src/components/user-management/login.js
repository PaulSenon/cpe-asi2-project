import React, { Component } from 'react';
import Information from './containers/information';
import Button from './containers/button';
import { Link } from "react-router-dom";
import io from 'socket.io-client';
import { connect } from 'react-redux'

class Login extends Component {
    constructor(props) {
        super(props);
        this.socket = io();
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(e) {
        e.preventDefault();
        if (this.props.surname && this.props.password) {
            const msg = { 
                surname: this.props.surname, 
                password: this.props.password
            };
            console.log('emit', msg);
            this.socket.emit('message', msg);
        }
        else {
            alert("Veuillez renseigner votre login et mot de passe.")
        }
    }

    render() {
        return (
            <form>
                <div className="ui form">
                    <Information id="Surname" text="Surname" type="text" />
                    <Information id="Password" text="Password" type="password" />
                    <Link to='/menu' onClick={this.handleLogin}>
                        <Button value="Connect" />
                    </Link>
                    <Link to='/login'>
                        <Button value="Cancel" />
                    </Link>
                    <Link to='/adduser'>
                        <Button value="New User"/>
                    </Link>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        surname: state.userReducer.surname,
        password: state.userReducer.password
    }
}

export default connect(mapStateToProps)(Login);
import React, { Component } from 'react';
import Information from './containers/information';
import Button from './containers/button';
import { Link } from "react-router-dom";
import io from 'socket.io-client';
import { connect } from 'react-redux';
import {history} from '../../App';

class addUser extends Component {
    constructor(props) {
        super(props);
        this.socket = io();
        this.handleAddUser = this.handleAddUser.bind(this)
    }

    async handleAddUser(e) {
        if (this.props.surname && this.props.password && this.props.name && this.props.re_password) {
            if (this.props.password !== this.props.re_password) {
                alert("Les deux mots de passe ne sont pas identiques.")
            }
            else {
                const msg = {
                    name: this.props.name,
                    surname: this.props.surname,
                    password: this.props.password,
                };
                console.log('Add-user', msg);
                try {
                    await fetch("//" + window.location.host + ":3000/user", {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        }, body: JSON.stringify({
                            "login": this.props.surname,
                            "pwd": this.props.password
                        })
                    });
                    history.push('/login');
                    document.location.reload(false);
                } catch (error) {
                    console.error(error);
                }
            }
        }
        else {
            alert("Veuillez renseigner toutes les informations.")
        }
    }

    render() {
        return (
            <form>
                <div className="ui form">
                    <Information id="Name" text="Name" type="text" />
                    <Information id="Surname" text="Surname" type="text" />
                    <Information id="Password" text="Password" type="password" />
                    <Information id="Re-Password" text="Re-Password" type="password" />
                    <Link onClick={this.handleAddUser} >
                        <Button value="OK" />
                    </Link>
                    <Link to='/login'>
                        <Button value="Cancel" />
                    </Link>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        surname: state.userReducer.surname,
        password: state.userReducer.password,
        name: state.userReducer.name,
        re_password: state.userReducer.re_password
    }
}

export default connect(mapStateToProps)(addUser);
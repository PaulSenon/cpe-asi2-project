import React, { Component } from 'react';
import Information from './containers/information';
import Button from './containers/button';
import { Link } from "react-router-dom";
import io from 'socket.io-client';
import { connect } from 'react-redux'


class addUser extends Component {
    constructor(props) {
        super(props);
        this.socket = io();
        this.handleAddUser = this.handleAddUser.bind(this)
    }

    handleAddUser(e) {
        e.preventDefault();
        if (this.props.surname && this.props.password && this.props.name && this.props.re_password) {
            if (this.props.password !== this.props.re_password) {
                alert("Les deux mots de passe ne sont pas équivalents.")
            }
            else {
                const msg = {
                    name: this.props.name,
                    surname: this.props.surname,
                    password: this.props.password,
                };
                console.log('emit', msg);
                this.socket.emit('message', msg);
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
                    <Link to='/menu' onClick={this.handleAddUser}>
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
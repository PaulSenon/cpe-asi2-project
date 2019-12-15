import React, { Component } from 'react';
import Information from './containers/information';
import Button from './containers/button';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {setUserName} from '../../actions/index'
import {history} from '../../App'

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    async handleLogin(e) {
        if (this.props.surname && this.props.password) {
            const msg = {
                login: this.props.surname,
                pwd: this.props.password
            };
            console.log('Authentification', msg);
            try {
                var url = "//" + window.location.host + ":3000/auth?login=" + this.props.surname + "&pwd=" + this.props.password
                console.log(url)
                let response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json'
                    }
                });
                let responseJson = await response.json();
                if (responseJson){
                    this.props.actionUserName(this.props.surname);
                    history.push('/menu');
                    document.location.reload(false);
                }
                else {
                    alert("Connexion échouée !")
                }
            } catch (error) {
                console.error(error);
            }
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
                    <Link onClick={this.handleLogin}>
                        <Button value="Connect" />
                    </Link>
                    <Link to='/adduser'>
                        <Button value="New User" />
                    </Link>
                </div>
            </form >
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        surname: state.userReducer.surname,
        password: state.userReducer.password
    }
}

const mapDispatchToProps = (dispatch) => ({
    actionUserName: (e) => dispatch(setUserName(e))
})

export default connect(mapStateToProps, mapDispatchToProps) (Login);
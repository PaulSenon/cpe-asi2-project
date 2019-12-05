import React, { Component } from 'react';
import Information from './containers/information';
import Button from './containers/button';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

class addUser extends Component {
    constructor(props) {
        super(props);
        this.state = { surname: '', password: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.current_state = "login";
    }

    handleSubmit(event) {
        this.current_state = "add_user";
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="ui form">
                    <Information text="Name" type="text" />
                    <Information text="Surname" type="text" />
                    <Information text="Password" type="password" />
                    <Information text="Re-Password" type="password" />
                    <Link to='/login'>
                        <Button value="Cancel" type="submit" />
                    </Link>
                    <Link to='/menu'>
                        <Button value="OK" type="submit" />
                    </Link>
                </div>
            </form>
        );
    }
}
export default addUser;
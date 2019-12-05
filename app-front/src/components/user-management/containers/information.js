import React, { Component } from 'react';

class Information extends Component {
    constructor(props) {
        super(props);
        this.state = { surname: '', password: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if (this.props.text === "Surname"){
            this.setState({surname : event.target.value });
        }
        else if (this.props.text === "Password"){
            this.setState({password : event.target.value });
        }
    }

    render() {

        return (
            <div className="field">
                <label>{this.props.text}</label>
                <input type={this.props.type} value={this.state.value} onChange={this.handleChange} />
            </div>
        );
    }
}
export default Information;
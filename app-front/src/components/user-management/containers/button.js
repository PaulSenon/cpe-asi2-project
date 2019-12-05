import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <input className="ui submit button" type={this.props.type} value={this.props.value} />
        );
    }
}
export default Button;
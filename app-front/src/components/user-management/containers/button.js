import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <button className="ui button">
                {this.props.value}
            </button>
        );
    }
}
export default Button;
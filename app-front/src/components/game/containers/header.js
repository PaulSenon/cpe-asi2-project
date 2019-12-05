import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.page = "";
    }

    render() {
        return (
            <div className="ui clearing segment">
                <h3 className="ui right floated header">
                    <i className="user circle outline icon"></i>
                    <div className="content">
                        <span id="userNameId">Jdoe</span>
                        <div className="sub header"><span>5000</span>$</div>
                    </div>
                </h3>
                <h3 className="ui left floated header">
                    <div className="content">
                        {this.props.page}
                    </div>
                </h3>
            </div>
        );
    }
}
export default Header;
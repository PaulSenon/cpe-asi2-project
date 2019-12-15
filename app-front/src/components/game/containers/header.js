import React, { Component } from 'react';
import { connect } from 'react-redux';
import {history} from '../../../App'

class Header extends Component {
    constructor(props) {
        super(props);
        this.page = "";
    }

    render() {
        if (this.props.name === undefined) {
            alert("Vous n'êtes pas connecté !")
            history.push('/login');
            document.location.reload(false);
        }
        else {
            return (
                <div className="ui clearing segment">
                    <h3 className="ui right floated header">
                        <i className="user circle outline icon"></i>
                        <div className="content">
                            <span id="userNameId">{this.props.name}</span>
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
}

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.connectedReducer.name
    }
}

export default connect(mapStateToProps) (Header);
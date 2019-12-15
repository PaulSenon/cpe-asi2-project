import React, { Component } from 'react';
import {setName, setPassword, setRePassword, setSurname} from '../../../actions/index'
import {connect} from 'react-redux'

class Information extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        if (this.props.text === "Surname"){
            this.props.actionSurname(e)
        }
        else if (this.props.text === "Password"){
            this.props.actionPassword(e)
        }
        else if (this.props.text === "Name"){
            this.props.actionName(e)
        }
        else if (this.props.text === "Re-Password"){
            this.props.actionRePassword(e)
        }
    }

    render() {
        return (
            <div className="field">
                <label>{this.props.text}</label>
                <input type={this.props.type} onChange={e => this.handleChange(e.target.value)} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    actionSurname: (e) => dispatch(setSurname(e)),
    actionPassword: (e) => dispatch(setPassword(e)),
    actionRePassword: (e) => dispatch(setRePassword(e)),
    actionName: (e) => dispatch(setName(e))
})

export default connect(null, mapDispatchToProps) (Information);
import React, { Component } from 'react';
import io from 'socket.io-client';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textareaVal: ''
        }
        this.socket = io();
        this.sendChatMessage = this.sendChatMessage.bind(this);
    }

    sendChatMessage(e) {
        e.preventDefault();
        const msg = {
            msg: this.state.textareaVal,
            user: 'User'
        };
        console.log('emit', msg);
        this.socket.emit('message', msg);
    }

    render() {
        if (this.props.chat == null) {
            this.props.chat = {
                "Name": "",
                "Date": "",
                "Message": "No message"
            };
        }

        return (
            <div>
                <div className="ui segment">
                    <div className="ui top attached label">
                        <div className="ui two column grid">

                            <div className="column">Chat</div>
                            <div className="column">
                                <div className="ui two column grid">
                                    <div className="column">Eric Smith</div>
                                    <div className="column"> <i className="user circle icon"></i></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui segment">
                    {this.props.chat.map((message, key) => {
                        return (
                            <div className="ui raised segment" key={key}>
                                <a className="ui blue ribbon label">{message.Name}</a>
                                <span>{message.Date}</span>
                                <p>{message.Message}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="ui form">
                    <div className="field">
                        <textarea rows="2"
                            value={this.state.textareaVal}
                            onChange={(event) => { this.setState({ textareaVal: event.target.value }) }} />
                    </div>
                </div>
                <button className="fluid ui right labeled icon button" onClick={this.sendChatMessage}>
                    <i className="right arrow icon"></i>
                    Send
                </button>

            </div>
        );
    }
}
export default Chat;
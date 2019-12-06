import React, { Component } from 'react';

class Chat extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        if (this.props.chat == null){
            this.props.chat = {
                "Name": "",
                "Date": "",
                "Message": "No message"
            };
        }

        return (
            <div className="ui segment">
                <div className="ui five column grid">
                    <div className="column">
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
                                <textarea rows="2" />
                            </div>
                        </div>
                        <button className="fluid ui right labeled icon button">
                            <i className="right arrow icon"></i>
                            Send
                            </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Chat;
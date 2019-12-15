import React, { Component } from 'react';
import Header from './containers/header';
import Chat from './containers/chat';
import GameZone from './containers/gamezone';
import * as jsonSource from '../../sources/chat'

class Play extends Component {
    constructor(props) {
        super(props);
        this.page = "PLAY"
        let temp_chat;
        temp_chat = jsonSource.default.chats;
        this.state = {
            chat_list: temp_chat
        }
    }

    render() {
        return (
            <div>
                <Header page={this.page} />
                <div style={{ float: 'left' }}>
                    <Chat chat={this.state.chat_list} />
                </div>
                <div style={{ float: 'right' }}>
                    <GameZone />
                </div>
            </div>
        );
    }
}

export default Play;
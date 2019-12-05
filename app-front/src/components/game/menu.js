import React, { Component } from 'react';
import Button from './containers/button';
import Header from './containers/header';
import * as jsonSource from '../../sources/cards.json';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.page = "MENU"
        let temp_cards;
        temp_cards = jsonSource.default.cards;
        this.state = {
            cards_list: temp_cards,
        }
    }

    render() {
        return (
            <div>
                <Header page={this.page} />
                <div align="center">
                    <Link to='/buy'>
                        <Button text="BUY" />
                    </Link>
                    <Link to='/sell'>
                        <Button text="SELL" />
                    </Link>
                    <Link to='/play'>
                        <Button text="PLAY" />
                    </Link>
                </div>
            </div>
        );
    }
}
export default Menu;
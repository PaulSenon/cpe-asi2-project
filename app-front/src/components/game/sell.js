import React, { Component } from 'react';
import Card from './containers/card';
import List from './containers/list';
import Header from './containers/header';
import * as jsonSource from '../../sources/cards.json';
import { connect } from 'react-redux'


class Sell extends Component {
    constructor(props) {
        super(props);
        this.page = "SELL"
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
                <div style={{ float: 'left' }}>
                    <List cards={this.state.cards_list} page={this.page} />
                </div>
                <div style={{ float: 'right' }}>
                    <Card card={this.props.currentCard} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentCard: state.cardReducer.current_card
    }
}

export default connect(mapStateToProps)(Sell);

import React, { Component } from 'react';
import Card from './containers/card';
import List from './containers/list';
import Header from './containers/header';
import * as jsonSource from '../../sources/cards';
import { connect } from 'react-redux'


class Buy extends Component {
    constructor(props) {
        super(props);
        this.page = "BUY"
        let temp_cards;
        temp_cards = jsonSource.default.cards;
        this.state = {
            cards_list: temp_cards
        }
    }

    render() {
        return (
            <div>
                <Header page={this.page} />
                <div>
                    <div float="left">
                        <List cards={this.state.cards_list} page={this.page} />
                    </div>
                    <div float="right">
                        <Card card={this.props.currentCard} />
                    </div>
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

export default connect(mapStateToProps) (Buy);
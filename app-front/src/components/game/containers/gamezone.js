import React, { Component } from 'react';
import Board from './board'
import * as jsonSource from '../../../sources/cards'

class Gamezone extends Component {
    constructor(props) {
        super(props);
        let temp_cards;
        temp_cards = jsonSource.default.cards;
        this.state = {
            list_cards: temp_cards
        }
    }


    render() {
        return (
            <div className="ui segment">
                <div className="row">
                    <div className="ui grid">
                        <div className="two wide column">
                            <div className="ui one  column centered grid">
                                <div className="row">
                                    <div className="column"> <i className="user circle huge icon "></i></div>
                                </div>
                                <div className="row">
                                    <div className=" column">Eric Smith</div>
                                </div>
                                <div className="row">
                                    <div className="column">
                                        <div className="ui teal progress" data-percent="74" id="progressBarId1" >
                                            <div className="bar"></div>
                                            <div className="label">Action Points</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Board cards={this.state.list_cards}/>
                    </div>
                </div>

                <div className="row">
                    <div className="ui grid ">
                        <div className="twelve wide column">
                            <h4 className="ui horizontal divider header">
                                VS
                                                                </h4>
                        </div>
                        <div className="four wide column">
                            <button className="huge ui primary button">
                                Attack
                                                                </button>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="ui grid">
                        <div className="two wide column">
                            <div className="ui one  column centered grid">
                                <div className="row">
                                    <div className="column">
                                        <div className="ui teal progress" data-percent="20" id="progressBarId2" >
                                            <div className="label">Action Points</div>
                                            <div className="bar"></div>

                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className=" column">Me</div>
                                </div>
                                <div className="row">
                                    <div className="column"> <i className="user circle huge icon "></i></div>
                                </div>

                            </div>
                        </div>
                        <Board cards={this.state.list_cards}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Gamezone;
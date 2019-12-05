import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.card == null) {
            return (
                <div>
                    Aucune carte sélectionnée
                </div>
            );
        }
        else {
            return (
                <div className="ui segment">
                    <div className="ui special cards">
                        <div className="card">
                            <div className="content">
                                <div className="ui grid">
                                    <div className="three column row">
                                        <div className="column">
                                            <i className="heart outline icon"></i><span id="cardHPId">{this.props.card.HP}</span>
                                        </div>
                                        <div className="column">
                                            <h5></h5>
                                        </div>
                                        <div className="column">
                                            <span id="energyId">{this.props.card.Energy}</span> <i className="lightning icon"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="image imageCard">

                                <div className="blurring dimmable image">
                                    <div className="ui inverted dimmer">
                                        <div className="content">
                                            <div className="center">
                                                <div className="ui primary button">Add Friend</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ui fluid image">
                                        <a className="ui left corner label">
                                            {this.props.card.Name}
                                        </a>
                                        <img id="cardImgId" className="ui centered image" src={this.props.card.Image} />
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <div className="ui form tiny">
                                    <div className="field">
                                        <label id="cardNameId"></label>
                                        <textarea id="cardDescriptionId" className="overflowHiden" readOnly rows="5" value={this.props.card.Description} />
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <i className="heart outline icon"></i><span id="cardHPId"> HP {this.props.card.HP}</span>
                                <div className="right floated ">
                                    <span id="cardEnergyId">Energy {this.props.card.Energy}</span>
                                    <i className="lightning icon"></i>

                                </div>
                            </div>
                            <div className="content">
                                <span className="right floated">
                                    <span id="cardAttackId"> Attack {this.props.card.Attack}</span>
                                    <i className=" wizard icon"></i>
                                </span>
                                <i className="protect icon"></i>
                                <span id="cardDefenceId">Defense {this.props.card.Defense}</span>
                            </div>
                            <div className="ui bottom attached button">
                                <i className="money icon"></i>
                                Actual Value <span id="cardPriceId"> {this.props.card.Price}$</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
export default Card;
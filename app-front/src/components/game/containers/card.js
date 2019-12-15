import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick(e) {
        try {
            await fetch("//" + window.location.host + ":3000/buy", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({
                    "user_id": this.props.card.id,
                    "card_id": '0'
                })
            });
            document.location.reload(false);
        } catch (error) {
            console.error(error);
        }
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
                                            <i className="heart outline icon"></i><span id="cardHPId">{this.props.card.hp}</span>
                                        </div>
                                        <div className="column">
                                            <h5></h5>
                                        </div>
                                        <div className="column">
                                            <span id="energyId">{this.props.card.energy}</span> <i className="lightning icon"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="image imageCard">

                                <div className="blurring dimmable image">
                                    <div className="ui fluid image">
                                        <a className="ui left corner label">
                                            {this.props.card.Name}
                                        </a>
                                        <img id="cardImgId" className="ui centered image" src={this.props.card.imgUrl} />
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <div className="ui form tiny">
                                    <div className="field">
                                        <label id="cardNameId"></label>
                                        <textarea id="cardDescriptionId" className="overflowHiden" readOnly rows="5" value={this.props.card.description} />
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <i className="heart outline icon"></i><span id="cardHPId"> HP {this.props.card.hp}</span>
                                <div className="right floated ">
                                    <span id="cardEnergyId">Energy {this.props.card.energy}</span>
                                    <i className="lightning icon"></i>

                                </div>
                            </div>
                            <div className="content">
                                <span className="right floated">
                                    <span id="cardAttackId"> Attack {this.props.card.attack}</span>
                                    <i className=" wizard icon"></i>
                                </span>
                                <i className="protect icon"></i>
                                <span id="cardDefenceId">Defense {this.props.card.defence}</span>
                            </div>
                            <div className="ui bottom attached button" onClick={this.handleClick}>
                                <i className="money icon"></i>
                                Actual Value <span id="cardPriceId"> {this.props.card.price}$</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
export default Card;
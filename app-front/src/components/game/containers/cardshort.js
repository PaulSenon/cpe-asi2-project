import React, { Component } from 'react';

class Cardshort extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ui segment">
                <div className="ui special cards">
                    <div className="card">
                        <div className="content">
                            <div className="ui grid">
                                <div className="three column row">
                                    <div className="column">
                                        <a className="ui red circular label">{this.props.card.HP}</a>
                                    </div>
                                    <div className="column" >
                                        <h5>{this.props.card.Name}</h5>
                                    </div>
                                    <div className="column">
                                        <a className="ui yellow circular label">{this.props.card.Energy}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="image imageCard">
                            <div className="ui fluid image">
                                <img id="cardImgId" className="ui centered image" alt="" src={this.props.card.Image} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cardshort;
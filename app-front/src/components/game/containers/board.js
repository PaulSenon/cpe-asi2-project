import React, { Component } from 'react';
import Cardshort from './cardshort'

class Board extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <div className="ten wide column">
                    <div className="ui four column grid">
                        {this.props.cards.map((card, key) => {
                            return (
                                <div className="column" key={key}>
                                    <Cardshort card={card}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
export default Board;
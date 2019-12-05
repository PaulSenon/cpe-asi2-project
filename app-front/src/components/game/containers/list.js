import React, { Component } from 'react'
import {setSelectedCard} from '../../../actions'
import {connect} from 'react-redux'

class List extends Component {
    constructor(props) {
        super(props);
    }

    handleCardClick(card){
        this.props.dispatch(setSelectedCard(card))
    }

    render() {
        return (
            <div className="ui grid" >
                <div className="ten wide column" >
                    <h3 className="ui aligned header"> My Card List</h3>
                    <table className="ui selectable celled table" id="cardListId">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Family</th>
                                <th>HP</th>
                                <th>Energy</th>
                                <th>Defence</th>
                                <th>Attack</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.cards.map((card,key)  => {
                                return (
                                    <tr key={key} onClick={()=>this.handleCardClick(card)}>
                                        <td>{card.Name}</td>
                                        <td>{card.Description}</td>
                                        <td>{card.Family}</td>
                                        <td>{card.HP}</td>
                                        <td>{card.Energy}</td>
                                        <td>{card.Defense}</td>
                                        <td>{card.Attack}</td>
                                        <td>{card.Price}</td>
                                        <td>
                                            <div className="ui vertical animated button" tabIndex="0">
                                <div className="hidden content">{this.props.page}</div>
                                                <div className="visible content">
                                                    <i className="shop icon"></i>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default connect() (List);
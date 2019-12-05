import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    myfunction(){
        //Render next page
    }

    render() {
        if(this.props.text === "BUY"){
            this.image = 'https://www.clipartwiki.com/clipimg/detail/102-1021782_simple-buy-now-star-burst-svg-png-icon.png'
        }
        else if(this.props.text === "SELL"){
            this.image = 'https://www.clipartwiki.com/clipimg/detail/127-1270421_sell-icon-free-icons-price-icon-transparent-background.png'
        }
        else if(this.props.text === "PLAY"){
            this.image = 'https://middle.pngfans.com/20190612/pa/play-game-icon-png-joystick-computer-icons-clipart-646c07f01e7c0ccb.jpg'
        }
        return ( 
            <div>
                <button>
                    <img height="100" width="100" src={this.image} onClick={this.myfunction} />
                </button>
            </div>
        );
    }
}
export default Button;
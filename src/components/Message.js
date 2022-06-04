import React, {Component} from 'react';
import ButtonComp from "./Utils/ButtonComp";

class Message extends Component{
    constructor(props) {

        super(props)

        this.state = {
            message: 'Welcome Visitor',
            buttonText: 'Subscribe',
            isSubscribed: false
        }
    }
    changeMessage = () => {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }
    render() {

        let btnText = this.state.isSubscribed ? 'Thanks For Subscribing' : 'Subscribe Our Chanel';

        return (
            <div>
                <h1>
                    { this.state.message }
                </h1>
                <ButtonComp btnTxt={btnText} handler={this.changeMessage}/>
            </div>
        );
    }
}

export default Message

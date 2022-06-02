import {Component} from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: 'Hello Event Handler'
        }
    }

    clickHandler = () => {
        this.setState({
            message: 'Goodbye Event Handler'
        })
    }

    render() {
        return (
            <div>
                <h3>{ this.state.message }</h3>
                <button onClick={ this.clickHandler }>
                    Click this Event Handler
                </button>
            </div>
        )
    }
}

export default EventBind

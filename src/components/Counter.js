import {Component} from 'react';

class Counter extends Component{

    constructor(props) {

        super(props);

        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <h4>Count - { this.state.count }</h4>
                <button onClick={ () => this.incrementFive() }>Increment</button> &nbsp;
                <button onClick={ () => this.decrement() }>Decrement</button>
            </div>
        )
    }

}

export default Counter

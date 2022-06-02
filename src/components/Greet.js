import React, {Component} from 'react';

class Greet extends Component{
    render() {
        return (
            <div>
                <h1>
                    Hello, { this.props.name } { this.props.surName }
                </h1>
                { this.props.children }
            </div>
        );
    }
}

export default Greet

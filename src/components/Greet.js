import React, {Component} from 'react';

class Greet extends Component{
    render() {
        const {name, title, children} = this.props
        return (
            <div>
                <h1>
                    Hello, { name } { title }
                </h1>
                { children }
            </div>
        );
    }
}

export default Greet

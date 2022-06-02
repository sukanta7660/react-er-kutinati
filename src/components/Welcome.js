import React from 'react';

const Welcome = props => {
    const {name, surname, children} = props
    return (
        <div>
            <h1>
                Hello, { name } { surname }
            </h1>
            { children }
        </div>
    );
}

export default Welcome

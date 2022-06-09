import React from 'react';

const Welcome = props => {
    const {welcomeText, children} = props
    return (
        <div>
            <h1>
                { welcomeText }
            </h1>
            { children }
        </div>
    );
}

export default Welcome

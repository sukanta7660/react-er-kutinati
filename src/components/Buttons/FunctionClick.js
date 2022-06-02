import React from 'react';

const FunctionClick = () => {

    const clickHandler = () => {
        console.log('Function Button clicked')
    }

    return (
        <div>
            <button onClick={ clickHandler }>
                Click this Function Button
            </button>
        </div>
    )
}

export default FunctionClick

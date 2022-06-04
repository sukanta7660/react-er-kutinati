import React from 'react';

const ButtonComp = (props) => {

    const { handler } = props

    return (
        <div>
            <button onClick={ handler }>
                Click this Method Binder
            </button>
        </div>
    )
}

export default ButtonComp

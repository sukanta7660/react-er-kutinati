import React from 'react';

const ButtonComp = (props) => {

    const { handler, btnTxt } = props;

    return (
        <div>
            <button onClick={ handler }>
                {btnTxt}
            </button>
        </div>
    )
}

export default ButtonComp

import React from 'react';
import ButtonComp from "../Utils/ButtonComp";

const FunctionClick = () => {

    const clickHandler = () => {
        console.log('Function Button clicked')
    }

    return (
        <div>
            <ButtonComp btnTxt="Functional Button" handler={ clickHandler }/>
        </div>
    )
}

export default FunctionClick

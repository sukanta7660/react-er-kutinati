import React from "react";

const Hello = () => {
    // return (
    //     <div className='demoClass'>
    //         <h1>Hello from Hello</h1>
    //     </div>
    // );

    return React.createElement(
        'div',
        {id: 'sukanta-app', className:'sukanta-class'},
        React.createElement('h1', null, 'Hello from Demo')

    )
}

export default Hello
import React from 'react';

const Person = ({ person }) => {
    return (
        <div>
            <ul>
                <li>Name: {person.name}, Age: {person.age}, Designation: {person.designation}</li>
            </ul>
        </div>
    )
};

export default Person;

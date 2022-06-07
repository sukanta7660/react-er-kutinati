import React from 'react';
import Person from "./Person/Person";

const PersonList = () => {
    const persons = [
        {
            id: 1,
            name: 'Sukanta Purkayastha',
            age: 27,
            designation: 'Backend Engineer'
        },
        {
            id: 2,
            name: 'Rocky Vai',
            age: 27,
            designation: 'SQA Tester'
        },
        {
            id: 3,
            name: 'Mahmudul Hasan Misbah',
            age: 27,
            designation: 'Backend Engineer'
        },
        {
            id: 4,
            name: 'Mahmud Khan',
            age: 27,
            designation: 'Intern'
        },
    ];
    const personList = persons.map(person => <Person key={person.id} person={person}/>)
    return (
        <div>
            { personList }
        </div>
    )
};

export default PersonList;

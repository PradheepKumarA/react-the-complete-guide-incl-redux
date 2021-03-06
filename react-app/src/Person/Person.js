import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click} >{props.name} is of age {props.age} </p>
            <p>{props.children} </p>
            <input onChange={props.change} value={props.name}/> 
        </div>
    )
}

export default person;
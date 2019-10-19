import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width :'450px'
        }
    };
    return (
        <div className='Person' style={style}>
            <p onClick={props.click} >{props.name} is of age {props.age} </p>
            <p>{props.children} </p>
            <input onChange={props.change} value={props.name}/> 
        </div>
    )
}

export default Radium(person);
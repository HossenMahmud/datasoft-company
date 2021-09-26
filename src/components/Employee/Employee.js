import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import './Employee.css';

const Employee = (props) => {
    const { name, age, image, salary, job, gender, isadded } = props.employee;
    const addListIcon = <FontAwesomeIcon icon={faUser} />
    const StayIcon = <FontAwesomeIcon icon={faCheckSquare} />
    return (
        <div className='employee-item'>
            <div className='employee-image'>
                <img src={image} alt="" />
            </div>
            <h2>Name: {name}</h2>
            <h3>Job: {job}</h3>
            <h5>Age: {age}</h5>
            <h5>Gender: {gender}</h5>
            <h5>Salary: ${salary}</h5>
            {
                isadded ? <button className='add-btn-submited'>{StayIcon} Already Added</button> : <button onClick={() => props.handleAddToList(props.employee)} className='add-btn'>{addListIcon} Add To List</button>
            }
        </div>
    );
};

export default Employee;
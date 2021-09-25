import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Employee.css';

const Employee = (props) => {
    //console.log(props.employee);
    const { name, age, image, salary, job, gender } = props.employee;
    const element = <FontAwesomeIcon icon={faUser} />
    return (
        <div className='employee-item'>
            <div className='employee-image'>
                <img src={image} alt="" />
            </div>
            <h3>Name: {name}</h3>
            <h4>Designation: {job}</h4>
            <h5>Age: {age}</h5>
            <h5>Gender: {gender}</h5>
            <h5>Salary: ${salary}</h5>
            <button className='add-btn'>{element}  Add To List</button>
        </div>
    );
};

export default Employee;
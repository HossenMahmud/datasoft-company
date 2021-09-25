import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';
import './Company.css';

const Company = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetch('./employee.json')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, [])
    return (
        <div className='company-container'>
            <div className='employee-container'>

                {
                    employees.map(employee => <Employee
                        key={employee.id}
                        employee={employee}
                    ></Employee>)
                }

            </div>
            <div className='cart-container'>
                <h4>Cart part</h4>
            </div>
        </div>
    );
};

export default Company;
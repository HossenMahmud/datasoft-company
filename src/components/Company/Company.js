import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';
import List from '../List/List';
import './Company.css';

const Company = () => {
    const [employees, setEmployees] = useState([]);
    const [lists, setLists] = useState([]);
    useEffect(() => {
        // Fetch data to JSON file
        fetch('./employee.json')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, []);
    // Add to button envent Handler function
    const handleAddToList = (employee) => {
        employee.isadded = true;
        const newEmployee = [...lists, employee];
        setLists(newEmployee);

    }
    return (
        <div className='company-container'>
            {/* Employees part */}
            <div className='employee-container'>
                {
                    employees.map(employee => <Employee
                        key={employee.id}
                        handleAddToList={handleAddToList}
                        employee={employee}
                    ></Employee>)
                }
            </div>
            {/* Selected Employee List */}
            <div className='list-container'>
                <List list={lists}></List>
            </div>
        </div>
    );
};

export default Company;
import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';
import List from '../List/List';
import './Company.css';

const Company = () => {
    const [employees, setEmployees] = useState([]);
    const [lists, setLists] = useState([]);
    useEffect(() => {
        fetch('./employee.json')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, []);

    const handleAddToList = (employee) => {
        employee.isadded = true;
        const newEmployee = [...lists, employee];
        setLists(newEmployee);

    }
    return (
        <div className='company-container'>
            <div className='employee-container'>

                {
                    employees.map(employee => <Employee
                        key={employee.id}
                        handleAddToList={handleAddToList}
                        employee={employee}
                    ></Employee>)
                }

            </div>
            <div className='cart-container'>
                <List list={lists}></List>
            </div>
        </div>
    );
};

export default Company;
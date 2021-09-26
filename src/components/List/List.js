import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './List.css';

const List = (props) => {
    const addListIcon = <FontAwesomeIcon icon={faUser} />
    const { list } = props;
    let totalSalary = 0
    for (const salary of list) {
        totalSalary = totalSalary + salary.salary;
    }
    return (
        <div className='list-item'>

            <h2>{addListIcon} Employees Added: {list.length}</h2>
            <h3>Total Cost:<span> ${totalSalary}</span></h3>

            {
                list.map(item => <p key={item.id}>{item.name}</p>)
            }
            <button className='buy-btn'>Buy Now</button>
        </div>
    );
};

export default List;
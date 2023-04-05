import React from 'react';
import { useParams } from 'react-router-dom';

function EmployeeDetail(props) {
    const employees = [
        {
            id: 1,
            name: "Hoa",
            age: 20
        },
        {
            id: 2,
            name: "Khánh",
            age: 25
        },
        {
            id: 3,
            name: "Tú",
            age: 22
        },
    ]
    let {id}  = useParams();
    return (
        <div>
            <h1>ten: {employees[id].name}</h1>
            <h1>tuoi: {employees[id].age}</h1>
        </div>
    );
}

export default EmployeeDetail;
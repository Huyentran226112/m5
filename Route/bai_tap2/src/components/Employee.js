import React from 'react';
import { useNavigate } from 'react-router-dom';

function Employee() {
    const navigate = useNavigate();
    const handleOnClick=(id)=>{
          // chuyen huong 
            navigate("/EmployeeDetail/"+id);
    };
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
return (
    <table border={1}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee,key) => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.age}</td>
            <td>
              <button onClick={() => handleOnClick(key)}>
                Detail
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Employee;
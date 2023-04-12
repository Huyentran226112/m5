import React from "react";
import { GET_USERS,DELETE_USER } from "../redux/action";
import { useDispatch, useSelector } from 'react-redux';

function User(props) {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const error = useSelector(state => state.error);

  const getUsers = () => {
    dispatch({ type: GET_USERS });
    console.log('1');
  };
  const deleteUser = (id) => {
    dispatch({ type: DELETE_USER,payload: {id} });
    console.log('1');
  };

  return (
    <div>
      <h1>User List</h1>
      <button onClick={getUsers}>Get Users</button> {/* Thêm xử lý click */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td>
                <button onClick={() => deleteUser(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
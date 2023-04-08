import React from "react";
import { useParams } from "react-router-dom";
import UserModel from '../../models/UserModel';
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UserDelete(props) {
  let { id } = useParams();
  const navigate = useNavigate();
  const handleDelete = () => {
    UserModel.delete(id)
    .then(res => {
        window.location.href = '/users'
    }).catch( err =>{
    console.log(err);
        alert ('da co loi xay ra ');
    });
  }
  function handleClick() {
    navigate("/users");
  }
  
  return (
    <div>
        <h1>ban co muon xoa id: #{id} khong</h1>
      <button id="button1" onClick={handleDelete}>YES</button>
      <button id="button2" onClick={handleClick}>NO</button>
    </div>
  );
}

export default UserDelete;

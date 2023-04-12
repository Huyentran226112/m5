import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import UserModel from "../../models/UserModel";

function UserEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(function () {
    axios
      .get("https://6083df209b2bed00170404a0.mockapi.io/angular/users/" + id)
      // then: tra ve thanh cong
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  const handleSubmit = (values) => {
     console.log(values);
     let data = {
      name : values.name
     }
     UserModel.update(id,data)
     .then((res)=>{
      Navigate("/");
     })
     .catch((err)=>{
      throw err;
     });

  }
  const handleChange = () => {
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Person Name:
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default UserEdit;

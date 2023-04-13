import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PhoneModel from "../models/PhoneModel";
import ProductModel from "../models/ProductModel";
function Phone(props) {
  // const navigate = useNavigate();
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    PhoneModel.getAll()
      .then((res) => {
        setPhones(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const handleDelete = (id) => {
    PhoneModel.delete(id)
      .then((res) => {
        // navigate("/");
        alert('ok.đã xóa rồi nha !!')
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("Đã có lỗi xảy ra ");
      });
  };
  return (
    <div>
      <table class="table table-bordered">
        <thead>
          <h1 className="text align-center">PHONES</h1>
          <button className="btn btn-light">
            {" "}
            <Link to={"/phones/create"}>Add</Link>{" "}
          </button>
          <tr>
            <th> ID </th>
            <th> Name </th>
            <th> Email </th>
            <th> Phone </th>
            <th> Image </th>
            <th> Action </th>
          </tr>
        </thead>
        {/* <tbody>
          {phones.map((phone, key) => (
            <tr key={key}>
              <td>{phone.id}</td>
              <td>{phone.name}</td>
              <td>{phone.email}</td>
              <td>{phone.phone}</td>
              <td> <img width={50} src={phone.image}/> </td>
              <td>
               <button className='btn btn-warning'> <Link to={"/phones/" + phones.id + "/edit"}>Edit</Link> </button>||
                <button className='btn btn-danger' onClick={ () => handleDelete(phones.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody> */}
        <tbody>
          {phones.map((phone, key) => (
            <tr key={key}>
              <td>{phone.id}</td>
              <td>{phone.name}</td>
              <td>{phone.email}</td>
              <td>{phone.phone}</td>
              <td>
                <img width={50} src={phone.image} />
              </td>
              <td>
                <button className="btn btn-warning">
                  <Link to={"/phones/" + phone.id + "/edit"}>Edit</Link>
                </button>{" "}
                ||
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(phone.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Phone;

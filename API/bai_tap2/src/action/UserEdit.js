import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UserEdit(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [books, setBooks] = useState({title: "", quantity: ""});

  useEffect(function () {
    axios
      .get("https://642f6e88c26d69edc87c6b2e.mockapi.io/articles/" + id)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const handleChangeTitle = (event) => {
    setBooks({...books, title: event.target.value});
  }

  const handleChangeQuantity = (event) => {
    setBooks({...books, quantity: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`https://642f6e88c26d69edc87c6b2e.mockapi.io/articles/${id}`, books)
      .then((res)=>{
        alert('them thanh cong ');
        navigate("/");
      })
      .catch((err)=>{
        throw err;
      });
 }

  return (
    <div>
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="titleInput">Title</label>
        <br />
        <input
          type="text"
          id="titleInput"
          value={books.title}
          onChange={handleChangeTitle}
        />
        <br />
        <label htmlFor="quantityInput">Quantity</label>
        <br />
        <input
          type="text"
          id="quantityInput"
          value={books.quantity}
          onChange={handleChangeQuantity}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserEdit;

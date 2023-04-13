import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserAdd(props) {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  // khai bao api
  useEffect(() => {
    axios
      .get(
        "https://642f6e88c26d69edc87c6b2e.mockapi.io/articles"
      )
      .then((response) => setBooks(response.data))
      .catch((error) => console.error(error));
  }, []);
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        "https://642f6e88c26d69edc87c6b2e.mockapi.io/articles",
        {
          title: title,
          quantity: quantity,
        }
      )
      .then((response) => {
        // alert(`Status: ${response.status}`);
        alert('thêm thành công ');

        setBooks([...books, response.data]);
        setTitle("");
        setQuantity("");
        navigate("/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <h1>Add a new Book</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="titleInput">Title</label>
        <br />
        <input
          type="text"
          id="titleInput"
          value={title}
          onChange={handleChangeTitle}
        />
        <br />
        <label htmlFor="quantityInput">Quantity</label>
        <br />
        <input
          type="text"
          id="quantityInput"
          value={quantity}
          onChange={handleChangeQuantity}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserAdd;

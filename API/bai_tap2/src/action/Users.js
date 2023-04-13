// import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

function Users(props) {
  // const history = useHistory();
  // sử dụng biến history ở đây
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://642f6e88c26d69edc87c6b2e.mockapi.io/articles"
      )
      .then((response) => setBooks(response.data))
      .catch((error) => console.error(error));
  }, []);
  const handleDelete = (id) => {
    if (window.confirm("bạn có muốn xóa không?")) {
      axios
        .delete(
          `https://642f6e88c26d69edc87c6b2e.mockapi.io/articles/${id}`
        )
        .then((response) => {
          alert("xóa thành công ");
          setBooks(books.filter((book) => book.id !== id));
        })
        .catch((error) => console.error(error));
    } 
  };
  // const handleEdit = () => {
  //   history.push(`/books/${props.book.id}/edit`);
  // };

  return (
    <div>
      <h1>Library</h1>
      <button className="btn btn-secondary"><Link to={"/books/create"}>Add a new Book</Link> </button> 
      <table border={1} width={"100%"}>
        <thead>
          <tr>
            <th>Title</th>  
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.quantity}</td>
              <td>
              <button class="btn btn-secondary"><Link to={"/books/"+book.id+"/edit"}>Edit</Link></button> 
                {/* <button onClick={handleEdit}>Edit</button> */}
                <button  class="btn btn-danger" onClick={() => handleDelete(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;



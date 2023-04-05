import React, { useState } from "react";
import { Formik } from "formik";
import "./App.css";

function App(props) {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({});
  const [indexSelected, setIndexSelected] = useState(-1);
  // const handleSelect = (book, index) => {
  //   setForm({...book});
  //   setIndexSelected(index);
  // };
  const handleSelect = (book, index) => {
    console.log(book);
    setForm({ ...book });
    setIndexSelected(index);
  };

  const handleDelete = (index) => {
    const newBooks = [...books];
    newBooks.splice(index, 1);
    setBooks(newBooks);
  };
  const handleSubmit = (values, actions) => {
    const newBooks = [...books];
    if (indexSelected > -1) {
      newBooks.splice(indexSelected, 1, values);
    } else {
      newBooks.push(values);
    }
    setBooks(newBooks);
    setForm({});
    setIndexSelected(-1);
    actions.resetForm();
  };
  const handleValidate = (values) => {
    let errors = {};
    if (!values.title) {
      errors.title = "Required";
    }
    if (!values.number) {
      errors.number = "Required";
    }
    return errors;
  };
  return (
    <div className="App">
      <h1>Book Form</h1>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={values.title || ""}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.title && <div className="error">{errors.title}</div>}
            </div>
            <div>
              <label htmlFor="number">Number</label>
              <input
                type="text"
                name="number"
                id="number"
                value={values.number || ""}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.number && <div className="error">{errors.number}</div>}
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
      <table>
        <thead>
          <tr>
            <th>Tiêu đề</th>
            <th>Số lượng</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.number}</td>
              <td>
                <button onClick={() => handleSelect(book, index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

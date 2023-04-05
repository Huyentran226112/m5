import React, { useState } from 'react';
import { Formik } from 'formik';
import "./App.css";

const SEX_LIST = [
  { label: 'Nam', value: 'male' },
  { label: 'Nữ', value: 'female' },
];

function App() {
  const [form, setForm] = useState({});

  const handleChange = (event) => {
    const value = event.target.type === 'checkbox' ? !form[event.target.name] : event.target.value;
    setForm({ ...form, [event.target.name]: value });
  }

  const handleValidate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.number) {
      errors.number = 'Required';
    }
    if (!values.author) {
      errors.author = 'Required';
    }
    if (!values.sex) {
      errors.sex = 'Required';
    }
    return errors;
  }

  const handleSubmit = () => {
    alert('Submit successfully');
  }

  return (
    <>
      <h1>Book Form</h1>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && touched.name && <div>{errors.name}</div>}
            </div>

            <div>
              <label htmlFor="number">Number:</label>
              <input
                id="number"
                type="text"
                name="number"
                value={values.number}
                onChange={handleChange}
              />
              {errors.number && touched.number && <div>{errors.number}</div>}
            </div>

            <div>
              <label htmlFor="author">Author:</label>
              <input
                id="author"
                type="text"
                name="author"
                value={values.author}
                onChange={handleChange}
              />
              {errors.author && touched.author && <div>{errors.author}</div>}
            </div>

            <div>
              <label htmlFor="sex">Sex:</label>
              <select
                id="sex"
                name="sex"
                value={values.sex}
                onChange={handleChange}
              >
                {SEX_LIST.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.sex && touched.sex && <div>{errors.sex}</div>}
            </div>

            <div>
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={values.description}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="published">Published:</label>
              <input
                id="published"
                type="checkbox"
                name="published"
                checked={values.published}
                onChange={handleChange}
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>

      <h1>Books</h1>
      <ul>
        <li>Book 1</li>
        <li>Book 2</li>
        <li>Book 3</li>
      </ul>
    </>
  );
}

export default App;
  
  // return (
  //   <div>
  //     <Formik
  //       initialValues={form}
  //       validate={handleValidate}
  //       onSubmit={handleSubmit}
  //     >
  //       {({
  //         values,
  //         errors,
  //         touched,
  //         handleChange,
  //         handleBlur,
  //         handleSubmit,
  //         isSubmitting,
  //         setFieldValue,
  //       }) =>
  //        (
  //         <form onSubmit={handleSubmit}>
  //           <label htmlFor="name">Họ tên:</label>
  //           <input type="text" id="name" name="name" onChange={handleChange} value={values.name || ''} />
  //           {errors.name && touched.name && <div>{errors.name}</div>}
            
  //           <label htmlFor="identity">Số hộ chiếu /CMND:</label>
  //           <input type="text" id="identity" name="identity" onChange={handleChange} value={values.identity || ''} />
  //           {errors.identity && touched.identity && <div>{errors.identity}</div>}
            
  //           <label htmlFor="birthYear">Năm sinh:</label>
  //           <input type="number" id="birthYear" name="birthYear" onChange={handleChange} value={values.birthYear || ''} />
  //           {errors.birthYear && touched.birthYear && <div>{errors.birthYear}</div>}
            
  //           <label htmlFor="sex">Giới tính:</label>
  //           <select id="sex" name="sex" onChange={handleChange} value={values.sex || ''}>
  //             <option value=""></option>
  //             {SEX_LIST.map((sex) => (
  //               <option key={sex.value} value={sex.value}>{sex.label}</option>
  //             ))}
  //           </select>
  //           <form/>
  //           <Formik/>
  //           }
  //         <div/>
      

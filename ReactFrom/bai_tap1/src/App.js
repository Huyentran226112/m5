import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import './App.css';

// khoi tao bien regex
const REGEX = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

function App() {
  return (
    <div className="App">
      <h1>Add Contact</h1>
      <Formik
        initialValues={{ name: '', email: '', phone: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          }
          if (!values.email) {
            errors.email = 'Required';
          } else if (!REGEX.email.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          if (!values.phone) {
            errors.phone = 'Required';
          }
          return errors;
        }}
        onSubmit={(values) => {
          alert('Contact added successfully!');
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <Field type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
            <ErrorMessage name="name" component="div" className="error" />

            <label htmlFor="email">Email:</label>
            <Field type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
            <ErrorMessage name="email" component="div" className="error" />

            <label htmlFor="phone">Phone:</label>
            <Field type="tel" name="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur} />
            <ErrorMessage name="phone" component="div" className="error" /> <br/>

            <label htmlFor="Message">Message:</label>
            <Field type="text" name="Message" value={values.Message} onChange={handleChange} onBlur={handleBlur} /><br/>
            <button type="submit">submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;

import React, { useState ,} from 'react';
import { Formik } from 'formik';
import "./App.css";

const REGEX = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const App = () => {
  const [form, setForm] = useState({});
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const handleValidate = (values) => {
    let errors = {};
    if (!values.email || values.email === '') {
      errors.email = 'Required';
    } else if (!REGEX.email.test(values.email)) {
      errors.email = 'địa chỉ email không hợp lệ';
    }
    if (!values.title || values.title === '') {
      errors.title = 'Required';
    }
    return errors;
  };
  const handleSubmit = (values) => {
    alert('Liên hệ được thêm thành công!');
  };
  return (
    <Formik
      initialValues={{ email: '', title: '', message: '' }}
      validate={handleValidate}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && <div>{errors.email}</div>}
          
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.title && touched.title && <div>{errors.title}</div>}
          
          <label>Message:</label>
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default App;
// import React, { useState } from 'react';
// import { Formik } from 'formik';
// import "./App.css";

// const REGEX = {
//   email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
// }

// function App() {
//   const [form, setForm] = useState({});
  
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setForm(prevState => ({ ...prevState, [name]: value }));
//   }

//   const handleValidate = (values) => {
//     let errors = {};
//     if (!values.email || values.email.trim() === '') {
//       errors.email = 'Required';
//     } else if (!REGEX.email.test(values.email)) {
//       errors.email = 'Invalid email address';
//     }
//     if (!values.title || values.title.trim() === '') {
//       errors.title = 'Required';
//     }
//     return errors;
//   }

//   const handleSubmit = (values, { setSubmitting, resetForm }) => {
//     alert('Liên hệ của bạn đã được gửi đi!');
//     setSubmitting(false);
//     resetForm();
//   }

//   return (
//     <Formik
//       initialValues={form}
//       validate={handleValidate}
//       onSubmit={handleSubmit}
//     >
//       {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={values.email || ''}
//               onChange={handleChange}
//             />
//             {errors.email && touched.email && <span>{errors.email}</span>}
//           </div>
//           <div>
//             <label htmlFor="title">Title:</label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               value={values.title || ''}
//               onChange={handleChange}
//             />
//             {errors.title && touched.title && <span>{errors.title}</span>}
//           </div>
//           <button type="submit" disabled={isSubmitting}>Submit</button>
//         </form>
//       )}
//     </Formik>
//   );
// }

// export default App;

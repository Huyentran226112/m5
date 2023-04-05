
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const rules = Yup.object().shape({
    name: Yup.string().required('Truong yeu cau').min(3,'Toi thieu 3 ky tu').max(255,'Toi da 255'),
    qty: Yup.string().required('Truong yeu cau')
 
});

function Book(props) {
    const [formData,setFormData] = useState({
        name: '',
        qty: ''
        
    });
    const [books,setBooks] = useState([]);
    const [formErrors,setFormErrors] = useState([]);

    const handleChange = (event) => {
        setFormData(
            {
                ...formData,
                [event.target.name]: event.target.value
            }
        )
        
    }
    const handleSubmit = (values) => {
        books.push( values )
        let new_books = [...books]
        setBooks(new_books);

        // Làm rỗng đối tượng formData
        setFormData(
            {
                ...formData,
                name: '',
                qty: ''
               
            }
        )
    }
    const editBook = (id) => {

    }
    const deleteBook = (id) => {
    }

    return (
        <div>
            Name: {formData.name} <br/>
            qty: {formData.qty} <br/>
            <hr/>

            <Formik
            initialValues={formData}
            validationSchema={rules}
            onSubmit={ (values) => handleSubmit(values) }
            >
            {({ errors, touched }) => (

                <Form>
                    Name 
                    <Field name="name" /> <br/>
                    {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                    ) : null}
                    {/* <input type='text' name='name' onChange={handleChange} value={formData.name} /> <br/> */}
                    qty 
                    <Field name="email" /> <br/>
                    {errors.qty && touched.qty ? (
                        <div>{errors.qty}</div>
                    ) : null}
                   
                   
                    <button > Register </button>
                </Form>

            )}
            </Formik>

            <table>
                <thead>
                    <tr>
                        <th> Ten nhiem vu </th>
                        <th> Hanh dong </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book, key) => (
                            <tr key={key}>
                                <td>
                                    {book.name}
                                </td>
                                <td>
                                    <button onClick={() => editBook(key)}> Edit </button>
                                    |
                                    <button onClick={() => deleteBook(key)}> Delete </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Book;


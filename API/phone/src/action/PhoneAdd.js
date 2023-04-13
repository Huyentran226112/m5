import React, { useState } from 'react';
import { Formik, Form, Field } from "formik";
import { useNavigate } from 'react-router-dom';

import * as Yup from "yup";
import PhoneModel from './../models/PhoneModel';
import ProductModel from '../models/ProductModel';
import axios from 'axios';

const rules = Yup.object().shape({
    name: Yup.string().required('Không được để trống').min(3, 'Tối thiểu 3 kí tự').max(255, 'Tối đa 255'),
    email: Yup.string().required('Không được để trống').min(3, 'Tối thiểu 3 kí tự').max(255, 'Tối đa 255'),
    phone: Yup.number().required('Không được để trống').min(3, 'Tối thiểu 8 số'),

});



function PhoneAdd(props) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    })
    //Khởi tạo state để lưu file ảnh
    const [selectedFile, setSelectedFile] = useState();



    const [phones, setPhones] = useState([]);
    const [formErrors, setFormErrors] = useState([]);
    const handleSubmit = (values) => {
        console.log(values);
        const fd = new FormData();
        // Tạo data để gửi lên server
        fd.append("name", values.name);
        fd.append("email", values.email);
        fd.append("phone", values.phone);
        // fd.append("image", selectedFile);
        values.image = selectedFile;
        // fd.append("image", '12');
        PhoneModel.store(values)
            .then((res) => {
                navigate("/");
            })
            .catch((err) => {
                throw err;
            });

        // Làm rỗng formik
    }

    const handleFile = (event) => {

        const fd = new FormData();
        // Tạo data để gửi lên server
        fd.append("file", event.target.files[0]);
        axios
        .post("https://v2.convertapi.com/upload", fd)
        .then(res => {
            // console.log(res.data.Url);
            setSelectedFile(res.data.Url);

        })
        .catch(err => {
            console.log(err);
        });

        
    }

    return (
        <div>
            <h1>Add Contact</h1>
            {formData.name}
            {formData.email}
            {formData.phone} <br />
            <Formik
                initialValues={formData}
                validationSchema={rules}
                onSubmit={(values) => handleSubmit(values)}
            >
                {({ errors, touched }) => (
                    <Form>
                        <strong> Name:</strong><br />
                        <Field name="name" /> <br />
                        {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                        ) : null}
                        <strong> Email:</strong><br />

                        {formData.email}
                        <Field name="email" />
                        {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                        ) : null}<br />

                        <strong> Phone:</strong><br />
                        <Field name="phone" />
                        {errors.phone && touched.phone ? (
                            <div>{errors.phone}</div>
                        ) : null}
                        {formData.phone}<br/><br/>

                        {/* <Field name="image" type='file' as='file' />
                        {errors.phone && touched.phone ? (
                            <div>{errors.phone}</div>
                        ) : null}
                        {formData.phone}<br/><br/> */}

                        <input type='file' onChange={handleFile}/>
                        <br/>
                        {
                            selectedFile && <img src={selectedFile} width={100} />
                        }
                    

                        <button className='btn btn-primary' onClick={handleSubmit}><strong>Add</strong></button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default PhoneAdd;


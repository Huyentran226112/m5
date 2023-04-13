import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from "formik";
import { useNavigate, useParams } from "react-router-dom";

import * as Yup from "yup";
import PhoneModel from './../models/PhoneModel';



const rules = Yup.object().shape({
    name: Yup.string().required('Không được để trống').min(3, 'Tối thiểu 3 kí tự').max(255, 'Tối đa 255'),
    email: Yup.string().required('Không được để trống').min(3, 'Tối thiểu 3 kí tự').max(255, 'Tối đa 255'),
    phone: Yup.string().required('Không được để trống').min(3, 'Tối thiểu 3 kí tự'),
});
function PhoneEdit(props) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        phone:''
    })
    useEffect(() => {
        PhoneModel.find(id)
            .then((res) => {
                setFormData(res.data);
            })
            .catch((err) => {
                throw err;
            });
    }, []);

    const handleSubmit = (values) => {
        console.log(values);
        let data = {
            name: values.name,
            email:values.email,
            phone:values.phone
        }
        PhoneModel.update(id, data)
            .then((res) => {
                navigate("/");
            })
            .catch((err) => {
                throw err;
            });

        // Làm rỗng formik
    }

    return (
        <div>

            <h1> Edit Contact</h1>
          
            <Formik
                enableReinitialize={true}
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
                        <Field name="email" /> <br />
                        {errors.name && touched.email ? (
                            <div>{errors.email}</div>
                        ) : null}
                        <strong> Phone:</strong><br />
                        <Field name="phone" /> <br />
                        {errors.phone && touched.phone ? (
                            <div>{errors.phone}</div>
                        ) : null}
                        <br/>
                        <button > <strong>xong</strong> </button>
                    </Form>

                )}
            </Formik>
        </div>
    );
}

export default PhoneEdit;
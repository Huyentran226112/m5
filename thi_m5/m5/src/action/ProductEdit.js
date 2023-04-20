import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from "formik";
import { useNavigate, useParams } from "react-router-dom";

import * as Yup from "yup";
import ProductModel from '../models/ProductModel';
import axios from 'axios';

const rules = Yup.object().shape({
    name: Yup.string().required('Không được để trống').min(3, 'Tối thiểu 3 kí tự').max(255, 'Tối đa 255'),
    price: Yup.number().required('Không được để trống').min(3, 'Tối thiểu 3 kí tự'),
    inventory: Yup.number().required('Không được để trống').min(3, 'Tối thiểu 8 số'),
    description: Yup.string().required('Không được để trống').min(3, 'Tối thiểu 8 số').max(255, 'Tối đa 255'),

});

function ProductEdit(props) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [selectedFile, setSelectedFile] = useState();
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        phone:''
    })
    useEffect(() => {
        ProductModel.find(id)
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
            price: values.price,
            inventory: values.inventory,
            description: values.description,
            
        }
        ProductModel.update(id, data)
            .then((res) => {
                navigate("/");
            })
            .catch((err) => {
                throw err;
            });
    
        // Làm rỗng formik
    };

    return (
        <div>

            <h1> Chỉnh sửa sản phẩm </h1>
          
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
                        <strong> giá :</strong><br />
                        <Field name="price" /> <br />
                        {errors.price && touched.price ? (
                            <div>{errors.price}</div>
                        ) : null}
                        <strong> tồn kho:</strong><br />
                        <Field name="inventory" /> <br />
                        {errors.inventory && touched.inventory ? (
                            <div>{errors.inventory}</div>
                        ) : null}
                         <strong> mô tả:</strong><br />
                        <Field name="description" /> <br />
                        {errors.description && touched.description ? (
                            <div>{errors.description}</div>
                        ) : null}
                       
                        <button > <strong>xong</strong> </button>
                    </Form>

                )}
            </Formik>
        </div>
    );

}

export default ProductEdit;
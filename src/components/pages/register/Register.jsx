import React, { useEffect } from "react";
import { Formik } from 'formik';
import { ClipLoader } from "react-spinners";
import * as Yup from 'yup';
import './Register.css';
import axios from "axios";

const validationSchema = Yup.object().shape({

    username: Yup.string()
        .required('Username required'),
    lastname: Yup.string()
        .required('lastname required'),
    firstname: Yup.string()
        .required('firstname is required'),
    email: Yup.string()
        .email('Invalid Email')
        .required('email required'),
    password: Yup.string()
        .required('Password required')
        .min(8, 'Password must contain at least 8 characters')
        .matches(/[a-z]/, 'Must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
        .matches(/\d/, 'Must contain at least one number'),

    confirmpassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords do not match')
        .required('Confirm password is required')
});

const Register = () => {
    useEffect(() => {
        document.title = "Register"
        return () => { document.title = "App React" }
    }, [])
    return (
        <div className="register">
            <h1>Register</h1>
            <Formik
                initialValues={{ username: '', lastname: '', firstname: '', email: '', password: '', confirmpassword: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);

                    axios.post("https://1941-41-79-219-167.ngrok-free.app/api/auth/register", {
                        firstname: values.firstname,
                        username: values.username,
                        lastname: values.lastname,
                        role: 'user',
                        email: values.email,
                        password: values.password
                    },
                        {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }
                    ).then(function (response) {
                        console.log(response);
                        setSubmitting(false)
                    })
                        .catch(function (error) {
                            console.log(error);
                            setSubmitting(false)
                        });
                }}




            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>

                        <div>
                            <label htmlFor="username">Username</label>
                            <input
                                type="string"
                                name="username"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                            />
                            {errors.username && touched.username && (<span>{errors.username}</span>)}
                        </div>
                        <div>
                            <label htmlFor="firstname">firstname</label>
                            <input
                                type="text"
                                name="firstname"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstname}
                            />
                            {errors.firstname && touched.firstname && (<span>{errors.firstname}</span>)}
                        </div>
                        <div>
                            <label htmlFor="lastname">Lastname</label>
                            <input
                                type="text"
                                name="lastname"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastname}
                            />
                            {errors.lastname && touched.lastname && (<span>errors.lastname</span>)}
                        </div>
                        <div>
                            <label htmlFor="email">email</label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && (
                                <span>{errors.email}</span>
                            )}
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password && touched.password && (
                                <span>{errors.password}</span>
                            )}
                        </div>
                        <div>
                            <label htmlFor="confirmpassword">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmpassword"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmpassword}
                            />
                            {errors.confirmpassword && touched.confirmpassword && (
                                <span>{errors.confirmpassword}</span>
                            )}
                        </div>
                        <div>
                            <button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? <ClipLoader size={20} color="white" /> : 'Register'}
                            </button>
                        </div>
                    </form>
                )}
            </Formik>

        </div>
    );
};

export default Register;



import React, { useEffect } from "react";
import { Formik } from 'formik';
import { ClipLoader } from "react-spinners";
import * as Yup from 'yup';
import './Login.css';
import axios from "axios";
// import { Router } from "react-router";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid Email')
        .required('email required'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must contain at least 8 characters')
        .matches(/[a-z]/, 'Must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
        .matches(/\d/, 'Must contain at least one number'),

    confirmpassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords do not match')
        .required('Confirm password is required')
});

const Login = () => {
    
    useEffect(() => {
        document.title = "Login"
        return () => { document.title = "App React" }
    }, [])
    return (
        <div className="login">
            <h1>Login</h1>
            <Formik
                initialValues={{ email: '', password: '', confirmpassword: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);

                    axios.post("https://1941-41-79-219-167.ngrok-free.app/api/auth/login", {
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
                        if (response.data && response.data.token) {
                            localStorage.setItem('token', response.data.token);
                            // Router.push('./Dashboard')
                            navigate('./Dashboard')
                        }
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
                                {isSubmitting ? <ClipLoader size={20} color="white" /> : 'Login'}
                            </button>
                        </div>
                    </form>
                )}
            </Formik>

        </div>
    );
};

export default Login;



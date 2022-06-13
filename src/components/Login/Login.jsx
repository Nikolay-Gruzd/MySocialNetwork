import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import RedTextError from "../../formikElements/RedTextError";
import "../../App.css"
import {connect} from "react-redux";
import {login} from "../../redux/reducers/auth-reducer";
import {Navigate} from "react-router-dom";

const validateLoginForm = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required 1';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    return errors;
};

const validationSchemaLoginForm = Yup.object().shape({
    password: Yup.string()
        .min(6, "Must be longer than 6 characters")
        .max(20, "Must be shorter than 20 characters")
        .required("Required 2")
});

const LoginForm = (props) => {
    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
                rememberMe: false
            }}
            validate={validateLoginForm}
            validationSchema={validationSchemaLoginForm}
            onSubmit={(values, {setStatus, setSubmitting}) => {
                console.log(values)
                props.login(values.email, values.password, values.rememberMe, setStatus)
                setSubmitting(false)
            }}
        >
            {({errors, touched, status}) =>
                (<Form>
                    <div>
                        <Field
                            type={'text'}
                            id={'email'}
                            name={'email'}
                            placeholder={'e-mail'}
                            className={errors.email && touched.email ? "errorInput" : null}
                        />
                        <ErrorMessage name="email" component={RedTextError}/>
                    </div>


                    <div>
                        <Field
                            type={'password'}
                            id={'password'}
                            name={'password'}
                            placeholder={'password'}
                            className={errors.password && touched.password ? "errorInput" : null}
                        />
                        <ErrorMessage name="password" component={RedTextError}/>
                    </div>


                    <div>
                        <Field
                            type={'checkbox'}
                            id='rememberMe'
                            name={'rememberMe'}
                        />
                        <label htmlFor={'rememberMe'}> remember me </label>
                    </div>

                    <div className="error">
                        {status}
                    </div>

                    <button type={'submit'}>Login</button>
                </Form>)}
        </Formik>
    )
}

const Login = (props) => {

    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return (
        <div>
            <h2>... Login ...</h2>

            <LoginForm login={props.login}/>

            <div>
                ... ...
            </div>

        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login);
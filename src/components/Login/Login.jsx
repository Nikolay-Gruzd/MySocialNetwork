import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import RedTextError from "../../formikElements/RedTextError";
import "../../App.css"

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
        .min(2, "Must be longer than 2 characters")
        .max(5, "Must be shorter than 5 characters")
        .required("Required 2")
});

const Login = () => {

    return (
        <div>
            <h2> ... Login 555 </h2>

            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    rememberMe: false
                }}
                validate={validateLoginForm}
                validationSchema={validationSchemaLoginForm}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {({errors, touched}) =>
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

                        <button type={'submit'}>Login</button>
                    </Form>)}
            </Formik>

            <div>
                ...
            </div>

        </div>
    )
}

export default Login;
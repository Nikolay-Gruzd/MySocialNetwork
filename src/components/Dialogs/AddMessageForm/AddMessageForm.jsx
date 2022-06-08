import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import RedTextError from "../../../formikElements/RedTextError";

const validationSchemaMessageForm = Yup.object().shape({
    newMessageBody: Yup.string()
        .max(10, "Must be shorter than 10 characters")
});

const AddMassageForm = (props) => {
    return (
        <Formik
            initialValues={{
                newMessageBody: ""
            }}
            validationSchema={validationSchemaMessageForm}
            onSubmit={(values, {resetForm}) => {
                props.addNewMessage(values);
                resetForm({values: ''});
            }}

        >
            {({values}) => {
                return (
                    <Form>
                        <div>
                            <Field
                                id="newMessageBody"
                                name="newMessageBody"
                                as="textarea"
                                placeholder="enter text"
                            />
                            <ErrorMessage name="newMessageBody" component={RedTextError}/>
                        </div>

                        <button disabled={!values.newMessageBody} type="submit">Send2</button>
                    </Form>)
            }}
        </Formik>
    )
}

export default AddMassageForm;
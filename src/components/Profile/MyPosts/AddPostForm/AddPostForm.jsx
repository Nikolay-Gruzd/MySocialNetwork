import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import RedTextError from "../../../../formikElements/RedTextError";

const validationSchemaPostForm = Yup.object().shape({
    newPostText: Yup.string()
        .max(10, "Must be shorter than 10 characters")
});

function AddPostForm(props) {
    return (
        <Formik
            initialValues={{
                newPostText: ""
            }}
            validationSchema={validationSchemaPostForm}
            onSubmit={(values, {resetForm}) => {
                props.addNewPost(values);
                resetForm({values: ''});
            }}
        >
            {({values}) => {
                return (
                    <Form>
                        <div>
                            <Field
                                id="newPostText"
                                name="newPostText"
                                as="textarea"
                                placeholder="Enter text your post"
                            />
                            <ErrorMessage name="newPostText" component={RedTextError}/>
                        </div>
                        <div>
                            <button disabled={!values.newPostText} type="submit">Add post</button>
                        </div>
                    </Form>)
            }}
        </Formik>
    );
}

export default AddPostForm;
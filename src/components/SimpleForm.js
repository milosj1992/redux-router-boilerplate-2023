import React, {useState} from 'react';
import {Form, Field} from 'react-final-form';

const onSubmit = values => {
    console.log('Submitting form with values:', values);
};



const SimpleForm = () => {
    const validate = (values) => {

        if(resetForm){
            return {}
        }
        const errors = {};
        if (!values.firstName) {
            errors.firstName = "FirstName is required"
        }
        if (!values.licNumber ) {
            errors.licNumber = "lastName is required"
        }
        return errors;
    }
    const objj={
        firstName:"Milos",
        licNumber:1
    }

    const [resetForm,setResetForm]=useState(false);
    return (
        <Form
            initialValues={objj}
            onSubmit={onSubmit}
            validate={validate}
            render={({handleSubmit, form, submitting, pristine,values}) => (
                <form onSubmit={handleSubmit}>
                    <Field name="firstName">
                        {({input, meta}) => (
                            <div>
                                <label>First Name</label>
                                <input {...input} type="text" placeholder="First Name"/>
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <Field name="licNumber" parse={values => values ? parseInt(values): ''}>
                        {({input, meta}) => (
                            <div>
                                <label>licNumber</label>
                                <input {...input} type="number" placeholder="licNumber"/>
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <div className="buttons">
                        <button type="submit" disabled={submitting}>
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                form.reset();
                                setResetForm(true);
                            }}
                            disabled={submitting || pristine}
                        >
                            Reset
                        </button>
                    </div>
                </form>
            )}
        />)
};

export default SimpleForm;

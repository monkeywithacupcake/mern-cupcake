import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import  renderTextField  from '../helpers/textfield'

class SignupForm extends Component {
    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops: </strong>
                    {this.props.errorMessage}
                </div>
            );
        }
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="container">
                <div className="section col m8 offset-m2 s12">
                    {this.renderAlert()}
                    <form onSubmit={handleSubmit}>
                        <Field
                            label="Email"
                            name="email"
                            component={renderTextField}
                            type="text"
                        />

                        <Field
                            label="Name"
                            name="name"
                            component={renderTextField}
                            type="text"
                        />

                        <Field
                            label="Password"
                            name="password"
                            component={renderTextField}
                            type="password"
                        />

                        <Field
                            label="Password Confirmation"
                            name="passwordConfirmation"
                            component={renderTextField}
                            type="password"
                        />
                        <button className="btn-large dark-primary-color" type="submit">
                            Submit
                            <i className="material-icons right">done</i>
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

const validate = values => {
    const errors = {};

    if (values.password !== values.passwordConfirmation) {
        errors.password = 'Passwords must match';
    }

    if (!values.email) {
        errors.email = 'Please enter an email';
    }

    if (!values.name) {
        errors.name = 'Please enter a name';
    }

    if (!values.password) {
        errors.password = 'Please enter a password';
    }

    if (!values.passwordConfirmation) {
        errors.passwordConfirmation = 'Please confirm your password';
    }

    return errors;
};

export default reduxForm({
    form: 'signup',
    validate
})(SignupForm);

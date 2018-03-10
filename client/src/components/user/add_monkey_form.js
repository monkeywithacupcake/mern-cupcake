import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import  renderTextField  from '../helpers/form_helpers'

class AddMonkeyForm extends Component {
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
                            label="Name"
                            name="name"
                            placeholder="Fluffy"
                            component={renderTextField}
                            type="text"
                        />

                    <button className="btn-large dark-primary-color" type="submit">
                            Add Monkey
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

    if (!values.name) {
        errors.email = 'Please enter monkey name';
    }


    return errors;
};

export default reduxForm({
    form: 'addmonkey',
    validate
})(AddMonkeyForm);

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import renderTextField from '../helpers/form_helpers';

class AddMonkeyCupcakeForm extends Component {

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="section">
                <form onSubmit={handleSubmit}>
                    <Field
                        label="Color"
                        name="color"
                        placeholder="Purple"
                        component={renderTextField}
                        type="text"
                    />
                    <button
                        className="btn-large"
                        type="submit"
                    >
                        Add Cupcake
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

const validate = values => {
    const errors = {};

    if (!values.color) {
        errors.color = 'Please enter cupcake color';
    }

    return errors;
};

export default reduxForm({
    form: 'addmonkeycupcake',
    validate
})(AddMonkeyCupcakeForm);

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import renderTextField from '../helpers/form_helpers';

class AddMonkeyCupcakeForm extends Component {

    cancel(e) {
    e.preventDefault()

    if (this.props.onCancel) {
      this.props.onCancel()
    }
  }

    render() {
        if (this.props.isVisible === false)
     return null
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
                    <button
                        className="btn-large danger"
                        type="cancel"
                        onClick={e => this.cancel(e)}
                    >
                        Cancel
                        <i className="material-icons right">times</i>
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

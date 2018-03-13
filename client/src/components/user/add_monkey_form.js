import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import renderTextField from '../helpers/textfield';
import { createMonkey } from '../../actions';

class AddMonkeyForm extends Component {
    // onSubmit(values) {
    //     console.log('trying to submit MONKEY');
    //     this.props.createMonkey(props.userid, values, () =>{
    //         //this.props.history.push('/');
    //     });
    // }
    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="section">
                <form onSubmit={handleSubmit}>
                    <Field
                        label="Name"
                        name="name"
                        placeholder="Fluffy"
                        component={renderTextField}
                        type="text"
                    />

                    <button
                        className="btn-large dark-primary-color"
                        type="submit"
                    >
                        Add Monkey
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Please enter monkey name';
    }

    return errors;
};

export default reduxForm({
    form: 'addmonkey',
    validate
})(connect(null, { createMonkey })(AddMonkeyForm));

//})(connect(null, { createMonkey })(AddMonkeyForm));

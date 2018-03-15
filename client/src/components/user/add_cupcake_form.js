import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import renderTextField from '../helpers/form_helpers';
import { createCupcake } from '../../actions';

class AddCupcakeForm extends Component {
    renderMonkeyChoices() {
        console.log('renderMonkeyChoices');
        if (this.props.monkeys != undefined && this.props.monkeys.length > 0) {
            console.log('renderMonkeyChoices has monkeys!!!');
            const monkeys = this.props.monkeys;
            return (
                <Field label="Monkey" name="monkey" component="select">
                    <option />
                    <option key="1" value="test">
                        {' '}
                        TEST{' '}
                    </option>
                    {monkeys.map((monkey, i) => (
                        <option key={monkey._id} value={monkey._id}>
                            {monkey.name}
                        </option>
                    ))}
                </Field>
            );
        }
    }

    render() {
        const { handleSubmit } = this.props;
        console.log('add CupcakeForm has monkeys', this.props.monkeys);
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
                    <Field label="Monkey" name="monkey" component="select">
                        <option value="">Select a monkey...</option>
                        {this.props.monkeys.map(mon => (
                            <option value={mon._id} key={mon._id}>
                                {mon.name}
                            </option>
                        ))}
                    </Field>
                    <div>
                        <label>Favorite Color</label>
                        <div>
                            <Field name="favoriteColor" component="select">
                                <option />
                                <option value="ff0000">Red</option>
                                <option value="00ff00">Green</option>
                                <option value="0000ff">Blue</option>
                            </Field>
                        </div>
                    </div>

                    <button className="btn-large" type="submit">
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

AddCupcakeForm.propTypes = {
    monkeys: PropTypes.array
};

export default reduxForm({
    form: 'addcupcake',
    validate
})(connect(null, { createCupcake })(AddCupcakeForm));

// {this.renderMonkeyChoices}

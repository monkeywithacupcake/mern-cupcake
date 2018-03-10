import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import  renderTextField  from '../helpers/form_helpers'


class SigninForm extends Component {

  renderAlert() {
    if (this.props.errorMessage) {
      return <div className="alert alert-danger">
        <strong>Oops: </strong>{this.props.errorMessage}
      </div>
    }
  }

  render() {
    const {handleSubmit} = this.props

    return (
      <div className="container">
      <div className="section col m8 offset-m2 s12">
        {this.renderAlert()}
        <form onSubmit={handleSubmit}>

          <Field
            label="email"
            name="email"
            component={renderTextField}
            type="text"/>

          <Field
            label="Password"
            name="password"
            component={renderTextField}
            type="password"/>

            <button className="btn-large dark-primary-color" type="submit">
                Submit
                <i className="material-icons right">done</i>
            </button>
        </form>
      </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'signin'
})(SigninForm)

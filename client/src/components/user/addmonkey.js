import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddMonkeyForm from './add_monkey_form'
import * as actions from '../../actions'
import { Redirect } from 'react-router-dom'

class AddMonkey extends Component {

  componentWillUnmount() {
    if (this.props.errorMessage) {
      this.props.authError(null)
    }
  }

  handleSubmit({name}) {
    this.props.createMonkey({{this.props.user._id}, name})
  }


  render() {
    return
      <div>
        <AddMonkeyForm onSubmit={this.handleSubmit.bind(this)} errorMessage={this.props.errorMessage}/>
      </div>
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    errorMessage: state.auth.error
  }
}

export default connect(mapStateToProps, actions)(Signup)

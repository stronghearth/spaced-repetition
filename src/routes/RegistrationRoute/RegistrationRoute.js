import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import '../../components/RegistrationForm/RegistrationForm.css'

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <section className='RegistrationRoute'>
        <p className='RR_description'>
          Practice learning Catalan with the spaced repetition revision technique and quiz yourself with virtual flash cards!
        </p>
        <h2 className='RR_header'>Sign up</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    );
  }
}

export default RegistrationRoute

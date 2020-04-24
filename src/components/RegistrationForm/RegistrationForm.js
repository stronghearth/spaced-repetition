import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Required, Label } from '../Form/Form'
import ValidationError from '../ValidationError/ValidationError'
import AuthApiService from '../../services/auth-api-service'
import Button from '../Button/Button'
import './RegistrationForm.css'

class RegistrationForm extends Component {

  static defaultProps = {
    onRegistrationSuccess: () => { }
  }

  state = { 
    error: null,
    touched: false,
    password: ''
  }

  firstInput = React.createRef()

  handleSubmit = ev => {
    ev.preventDefault()
    const { name, username, password } = ev.target
    AuthApiService.postUser({
      name: name.value,
      username: username.value,
      password: password.value,
    })
      .then(user => {
        name.value = ''
        username.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(err => {
        this.setState({ error: err.error })
      })
  }

  componentDidMount() {
    this.firstInput.current.focus()
  }

  passwordUpdated = (e) => {
    const { value } = e.currentTarget
    this.setState({
        touched: true,
        password: value
    })
  }

  validatePassword = () => {
    const password = this.state.password;
    const hasNum = /\d/;
    const hasUpperCase = /([A-Z])/;
    const hasSpecialChar = /([!@#$%^&])/;
    if (password.length <= 7) {
        return 'Password needs to be at least 8 characters long'
    }
    else if (!hasNum.test(password)) {
        return 'Password must contain a number'
    }
    else if(!hasUpperCase.test(password)) {
        return 'Password must contain an uppercase letter'
    }
    else if(!hasSpecialChar.test(password)) {
        return 'Password must contain a special character'
    }
    return null
}

  render() {
    const { error, touched } = this.state
    return (
      <form
        onSubmit={this.handleSubmit}
        className='RegistrationForm'
      >
        <div role='alert'>
          {error && <p className='error'>{error}</p>}
          {touched && <ValidationError message={this.validatePassword()}/>}
        </div>
        <fieldset className='RegistrationForm_fields'>
          <div>
            <Label htmlFor='registration-name-input' className='Registration_label'>
              Enter your name<Required />
            </Label>
            <Input
              className='Registration_input'
              ref={this.firstInput}
              id='registration-name-input'
              name='name'
              aria-label="Enter your name"
              aria-required="true"
              aria-describedby="nameError"
              required
            />
          </div>
          <div>
            <Label htmlFor='registration-username-input' className='Registration_label'>
              Choose a username<Required />
            </Label>
            <Input
              className='Registration_input'
              id='registration-username-input'
              name='username'
              aria-label="Choose a username"
              aria-required="true"
              aria-describedby="usernameError"
              required
            />
          </div>
          <div>
            <Label htmlFor='registration-password-input' className='Registration_label'>
              Choose a password<Required />
            </Label>
            <Input
              className='Registration_input'
              id='registration-password-input'
              name='password'
              type='password'
              aria-label="Choose a password"
              aria-required="true"
              aria-describedby="passwordError"
              onChange={e => {this.passwordUpdated(e); this.validatePassword()}}
              required
            />
          </div>
        </fieldset>
        <footer className='Registration_footer'>
          <Button type='submit' className='Registration_button'>
            Sign up
          </Button>
          {' '}
          <Link to='/login' className='RR_toLogin'>
            Already have an account?</Link>
        </footer>
      </form>
    )
  }
}

export default RegistrationForm

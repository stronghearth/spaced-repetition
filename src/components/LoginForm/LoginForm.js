import React, { Component } from 'react'
import { Input, Label } from '../Form/Form'
import AuthApiService from '../../services/auth-api-service'
import UserContext from '../../contexts/UserContext'
import Button from '../Button/Button'
import './LoginForm.css'

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => { }
  }

  static contextType = UserContext

  state = { error: null }

  firstInput = React.createRef()

  handleSubmit = ev => {
    ev.preventDefault()
    const { username, password } = ev.target

    this.setState({ error: null })

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = ''
        password.value = ''
        this.context.processLogin(res.authToken)
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  componentDidMount() {
    this.firstInput.current.focus()
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>
        <fieldset className='LoginForm_fields'>
          <div>
            <Label htmlFor='login-username-input' className='Login_label'>
              Username
            </Label>
            <Input
              className='Login_input'
              ref={this.firstInput}
              id='login-username-input'
              name='username'
              aria-label="Enter your username"
              aria-required="true"
              aria-describedby="usernameError"
              required
            />
          </div>
          <div>
            <Label htmlFor='login-password-input' className='Login_label'>
              Password
            </Label>
            <Input
              className='Login_input'
              id='login-password-input'
              name='password'
              type='password'
              aria-label="Enter your password"
              aria-required="true"
              aria-describedby="passwordError"
              required
            />
          </div>
        </fieldset>
        <Button type='submit' className='Login_button'>
          Login
        </Button>
      </form>
    )
  }
}

export default LoginForm

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'

class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <div>
        <span className="h-userName">
          {this.context.user.name}
        </span>
        <nav className="h-navLinks">
          <Link
            onClick={this.handleLogoutClick}
            to='/login' className="h-Link">
            Logout
          </Link>
        </nav>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <nav className="h-navLinks">
        <Link to='/login' className="h-Link">Login</Link>
        {' '}
        <Link to='/register' className="h-Link">Sign up</Link>
      </nav>
    )
  }

  render() {
    return (
      <header>
        <h1 className="h-websiteHeading">
          <Link to='/' className="h-websiteHeading">
            Spaced Repetition
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header

import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'

class DashboardRoute extends Component {
  static contextType = UserContext;
  render() {
    return (
      <section className='Dashboard'>
        <header className='Dashboard_welcome'>
          Welcome, {this.context.user.name}!
        </header>
        <div className='Dashboard_language'>
          You're learning: Catalan
        </div>
        <div className='Dashboard_history'>
          Brief history of language
        </div>

        <div className='Dashboard_table'>

        </div>
        implement and style me
      </section>
    );
  }
}

export default DashboardRoute

import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import UserContext from '../../contexts/UserContext'
import './DashboardRoute.css'

class DashboardRoute extends Component {
  static contextType = UserContext;
  render() {
    return (
      <section className='Dashboard'>
        <header className='Dashboard_header'>
          Welcome, {this.context.user.name}
          <div className='Dashboard_language'>
            You're learning: Catalan
          </div>
          <div className='Dashboard_history'>
            Brief history of language
          </div>
        </header>
       

        <div className='DB_table DB_table--3cols'>
          <div class="DB_table_cell Title">
            Word 
          </div>
          <div class="DB_table_cell Title">
            Correct
          </div>
          <div class="DB_table_cell Title">
            Incorrect
          </div>
          <div class="DB_table_cell">
            Bon dia! 
          </div>
          <div class="DB_table_cell Correct_count">
            <div className='Count'>
              0
            </div> 
          </div>
          <div class="DB_table_cell Incorrect_count">
            0
          </div>
        </div>

        <div className='Dashboard_total'>
          Total Correct: 
        </div>
        
        <div className='Dashboard_learn'>
          <button className='Dashboard_learn'>
            <Link to='/learn'>
              Start Learning
            </Link>
          </button>
        </div>
        
      </section>
    );
  }
}

export default DashboardRoute

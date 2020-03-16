import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import TableRow from '../../components/TableRow/TableRow'
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
            You're learning: <span style={{color: 'red'}}>Catalan</span>
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
         
          <TableRow 
            word='bon dia' 
            correct='0' 
            incorrect='0'
          />

        </div>

        <div className='Dashboard_total'>
          Total Correct: 
        </div>
        
        <div className='Dashboard_learn'>
          <button className='Dashboard_learn_button'>
            <Link to='/learn' className='Dashboard_learn_link'>
              Start Learning
            </Link>
          </button>
        </div>
        
      </section>
    );
  }
}

export default DashboardRoute

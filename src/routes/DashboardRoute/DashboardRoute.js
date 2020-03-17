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
            You're learning: <span style={{color: '#CE3814'}}>Catalan</span>
          </div>
        </header>
       

        <div className='DB_table DB_table--3cols'>
          <div className="DB_table_cell Title">
            Word 
          </div>
          <div className="DB_table_cell Title">
            Correct
          </div>
          <div className="DB_table_cell Title">
            Incorrect
          </div>
         
          <TableRow 
            key=''
            word='bon dia' 
            correct='0' 
            incorrect='0'
          />

        </div>

        <div className='Dashboard_total'>
          Total Correct: 
        </div>
        
        <div className='Dashboard_learn'>
          <Link to='/learn' className='Dashboard_learn_link'>
            <button className='Dashboard_learn_button'>
              Start Learning
            </button>
          </Link>
          
        </div>
        <div className='Dashboard_knowledge'>
          Did you know? 
          <div className='Dashboard_history'>
            The Catalan language originated from Vulgar Latin in the Pyrenees Mountains between France and Spain. It diverged from the other Romance languages in the 9th century.
          </div>
        </div>
      </section>
    );
  }
}

export default DashboardRoute

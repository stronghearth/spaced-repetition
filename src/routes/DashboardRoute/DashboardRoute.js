import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import UserContext from '../../contexts/UserContext'
import config from '../../config.js'
import TokenService from '../../services/token-service'
import TableRow from '../../components/TableRow/TableRow'

import './DashboardRoute.css'

class DashboardRoute extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props)
    const state = { 
      language: {}, 
      words: [] 
    }

    this.state = state;
  }

  componentDidMount() {
    const token = TokenService.getAuthToken();
    this.getLanguageWords(token);
  }

  getLanguageWords = (token) => {
    return fetch(`${config.API_ENDPOINT}/language`, {
      method: 'GET',
      headers : {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      if(!res.ok){
        return res.json().then(e => Promise.reject(e))
      }
      return res.json()
    })
    .then(res =>{
      //set language from server
      let language = res.language;
      this.setState({
        language
      })
      //set words from server
      let words = res.words
      this.setState({
        words
      })
    })
    .catch(err => {
      console.error(err)
    })
  }
  render() {
    const { language, words } = this.state;
    return (
      <section className='Dashboard'>
        <header className='Dashboard_header'>
          <h1>Welcome, {this.context.user.name}</h1>
          <div className='Dashboard_language'>
            You're learning: {' '}
            <h2 style={{color: '#CE3814'}}>
              {language.name}
            </h2>
          </div>
        </header>

        
        <h3 className='Dashboard_header Practice'>Words to practice</h3>

        <div className='DB_table DB_table--3cols'>
            <li className="DB_table_cell Title" style={{color: '#0080A5'}}>
              Word 
            </li>
            <li className="DB_table_cell Title" style={{color: '#1B8927'}}>
              Correct
            </li>
            <li className="DB_table_cell Title" style={{color: '#CE3814'}}>
              Incorrect
            </li>
          
            <div className='DB_table DB_table--3cols Rows'>
              {words.map(word => {
              return <TableRow 
                key={word.id}
                currWord={word.original}
                correct={word.correct_count} 
                incorrect={word.incorrect_count}
              />}
            )}
            </div>
          
          

        </div>

        <div className='Dashboard_total'>
          Total correct answers: {language.total_score}
        </div>
        
        <div className='Dashboard_learn'>
          <Link to='/learn' className='Dashboard_learn_link'>
            <button className='Dashboard_learn_button'>
              Start practicing
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

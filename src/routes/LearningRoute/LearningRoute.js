import React, { Component } from 'react'
import './LearningRoute.css'
import QuestionCard from '../../components/QuestionCard/QuestionCard'
import FeedbackCard from '../../components/FeedbackCard/FeedbackCard'
import LearningContext from '../../contexts/LearningContext'
import config from '../../config'
import TokenService from '../../services/token-service'

class LearningRoute extends Component {
  static contextType = LearningContext
  
  componentDidMount() {
    const {setCurrentWord, setError} = this.context
    return fetch(`${config.API_ENDPOINT}/language/head`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
        )
      .then(res => {
        setCurrentWord(res)
      })
      .catch(err => setError(err))
  }

  render() {
    const {word, correct, incorrect, total, error} = this.context
    return (
      <section className="lr-section">
        {error && <p className="error">{error}</p>}
        <div className="lr-larger">
        <QuestionCard currentWord={word} />
        <FeedbackCard/>
        <div className="lr-wordStats">
            {/* dynamically inserted word stats, updated when answers submitted */}
            <p className="lr-correctCount">You've answered this word correctly <span className="lr-wordScore">{correct}</span> times</p>
            <p className="lr-incorrectCount">You've answered this word incorrectly <span className="lr-wordScore">{incorrect}</span> times</p>
            <p className="lr-totalScore">Total Score: <span className="lr-currentScore">{total}</span></p>
        </div>
        </div>
            
      </section>
    );
  }
}

export default LearningRoute

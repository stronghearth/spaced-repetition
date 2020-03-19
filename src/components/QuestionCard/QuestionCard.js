import React, { Component } from "react";
import Button from '../Button/Button';
import TokenService from '../../services/token-service'
import config from '../../config'
import LearningContext from '../../contexts/LearningContext'

export default class AnswerForm extends Component {
  static contextType = LearningContext

  state = {
    value: '',
  }

  handleSubmitAnswer(e) {
    e.preventDefault()
    const {learn_guess_input} = e.target
    const guessSubmisson = {guess: learn_guess_input}
    this.postGuess(guessSubmisson)
  }

  postGuess = (guessSubmission) => {
    const {setFeedback, setError} = this.context
    return fetch(`${config.API_ENDPOINT}/language/head`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(
          guessSubmission
      )
    })
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
        )
      .then(res => {
        setFeedback(res)
      })
      .catch(err => setError(err))
  }

   render() {
      const {error} = this.context
       return <>
       <div className="lr-questionCard">
       {error && <p className="error">{error}</p>}
       <h2 className="lr-wordPrompt">Translate the word: <br /><br /><span className="lr-word"> {this.props.currentWord}</span></h2>
       <form className="lr-answerForm" onSubmit={this.handleSubmitAnswer}>
       <label htmlFor="learn_guess_input">What's the translation for this word?</label>
       <input type="text" id="learn_guess_input" name="learn_guess_input" className="lr-answerInput" value={this.state.value} onChange={e => this.setState({value: e.target.value})} placeholder="Enter translation here" required></input>
       <Button type="submit">Sumbit Your Answer</Button>
     </form>
     </div>
     </>
   }
}
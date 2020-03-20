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

  resetValue = () => {
      this.setState({
        value: ''
      })
  }
  postGuess = (guessSubmission) => {
    const {setFeedback, setError, flipToFeedback} = this.context
    return fetch(`${config.API_ENDPOINT}/language/guess`, {
      method: 'POST',
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
        setFeedback(res, guessSubmission.guess)
        flipToFeedback()
        this.resetValue()
      })
      .catch(err => setError(err))
  }

  handleSubmitAnswer(e) {
    e.preventDefault()
    const {learn_guess_input} = e.target
    const guessSubmisson = {guess: learn_guess_input.value}
    this.postGuess(guessSubmisson)
  }

   render() {
      const {currentWord, error, closeError, isFlipped} = this.context
       return <>
       <div className="lr-questionCard">
       {error && <p className="error" role='alert'>{error} <Button aria-label="close error" className="closeError" onClick={e => closeError()}>Close</Button></p>}
       <h2 className="lr-wordPrompt">Translate the word: <br /><br /><span className="lr-word"> {currentWord}</span></h2>
       <form className="lr-answerForm" onSubmit={e => this.handleSubmitAnswer(e)}>
       <label htmlFor="learn_guess_input">What's the translation for this word?</label>
       {isFlipped ? '' :<input type="text" id="learn_guess_input" name="learn_guess_input" aria-label="Input your answer here" aria-required="true" className="lr-answerInput" value={this.state.value} onChange={e => this.setState({value: e.target.value})} placeholder="Enter translation here" ></input>}
       <Button aria-label="Submit Your Answer" type="submit">Sumbit Your Answer</Button>
     </form>
     </div>
     </>
   }
}
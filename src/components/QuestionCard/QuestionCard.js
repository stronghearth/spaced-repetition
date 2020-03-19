import React, { Component } from "react";
import Button from '../Button/Button'

export default class AnswerForm extends Component {
   render() {
       return <>
       <div className="lr-questionCard">
       {/* dynamically inserted word*/}
       <h2 className="lr-wordPrompt">Translate the word: <br /><br /><span className="lr-word"> {this.props.currentWord}</span></h2>
       <form className="lr-answerForm">
       {/* value updates state */}
       <label htmlFor="learn-guess-input">What's the translation for this word?</label>
       <input type="text" className="lr-answerInput" placeholder="Enter translation here" required></input>
       {/* handleSubmit function */}
       <Button type="submit">Sumbit Your Answer</Button>
     </form>
     </div>
     </>
   }
}
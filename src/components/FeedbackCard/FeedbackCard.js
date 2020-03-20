import React, { Component } from 'react'
import LearningContext from '../../contexts/LearningContext'
import Button from '../Button/Button'

export default class FeedbackCard extends Component {
    static contextType = LearningContext

    render() {
        const {currentWord, answer, correctAnswer, isCorrect, error, flipToQuestion, nextWord} = this.context
        return <div className="lr-questionCard">
            {error && <p className="error">{error}</p>}
             {isCorrect ? <h3 className="lr-positiveMessage">Correct!</h3> : <h3 className="lr-negativeMessage">Good try, but not quite right.</h3>}
            <p className="lr-correctTranslation">The correct translation for <span className="lr-word">{currentWord}</span> was <span className="lr-responses">{correctAnswer}</span> and you chose <span className="lr-responses">{answer}</span>.</p>
            <Button className="lr-nextButton" onClick={e => flipToQuestion(nextWord)}>Try another word!</Button>
        </div>
    }
}
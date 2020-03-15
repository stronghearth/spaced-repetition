import React, { Component } from 'react'
import Button from '../../components/Button/Button'

class LearningRoute extends Component {
  // state manipulation and fetch requests handled in LearningContext file and language-service file that way dashboard route has access too
  render() {
    return (
      <section className="lr-section">
        <div className="lr-questionCard">
              {/* dynamically inserted word */}
            <h2 className="lr-wordPrompt">Translate the word: Si us plau</h2>
            {/* create component for this */}
            <form className="lr-answerForm">
              {/* capture value from this into state */}
              <input type="text" className="lr-answerInput" placeholder="Enter translation here"></input>
              {/* handleCheckAnswer function */}
              <Button type="submit">Check Answer</Button>
            </form>
        </div>
        <div className="lr-wordStats">
            {/* dynamically inserted word stats, updated when answers submitted */}
            <p className="lr-correctCount">You've answered this word correctly 15 times</p>
            <p className="lr-incorrectCount">You've answered this word incorrectly 5 times</p>
            <p className="lr-totalScore">Total Score: 45</p>
        </div>
            {/* conditionally render feedback based on when user submits an answer and whether the response is correct or not */}
        <div className="lr-feedback">
            {/* components needed for positive and negative feedback */}
            <h3 className="lr-negativeMessage">Good try, but not quite right.</h3>
            {/* dynamically inserted word, translation, translation attempt */}
            <p className="lr-correctTranslation">The correct translation for Si us plau was Please and you chose Thank You.</p>
            <Button className="lr-nextButton">Try another word!</Button>

            <h3 className="lr-positiveMessage">Correct!</h3>
            <p className="lr-correctTranslation">The correct translation for Si us plau was Please and you chose Please.</p>
            {/* handleNextWordClick function */}
            <Button className="lr-nextButton">Try another word!</Button>
        </div>
      </section>
    );
  }
}

export default LearningRoute

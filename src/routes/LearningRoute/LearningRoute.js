import React, { Component } from 'react'
import Button from '../../components/Button/Button'

class LearningRoute extends Component {
  // state manipulation and fetch requests handled in LearningContext file and language-service file that way dashboard route has access too
  render() {
    return (
      <section className="LearningRoute-section">
        <div className="LearningRoute-questionCard">
              {/* dynamically inserted word */}
            <h2 className="LearningRoute-wordPrompt">Translate the word: Si us plau</h2>
            {/* create component for this */}
            <form className="LearningRoute-answerForm">
              {/* capture value from this into state */}
              <input type="text" className="LearningRoute-answerInput" placeholder="Enter translation here"></input>
              {/* handleCheckAnswer function */}
              <Button type="submit">Check Answer</Button>
            </form>
        </div>
        <div className="LearningRoute-wordStats">
            {/* dynamically inserted word stats, updated when answers submitted */}
            <p className="LearningRoute-correctCount">You've answered this word correctly 15 times</p>
            <p className="LearningRoute-incorrectCount">You've answered this word incorrectly 5 times</p>
            <p className="LearningRoute-totalScore">Total Score: 45</p>
        </div>
            {/* conditionally render feedback based on when user submits an answer and whether the response is correct or not */}
        <div className="LearningRoute-feedback">
            {/* components needed for positive and negative feedback */}
            <h3 className="LearningRoute-negativeMessage">Good try, but not quite right.</h3>
            {/* dynamically inserted word, translation, translation attempt */}
            <p className="LearningRoute-correctTranslation">The correct translation for Si us plau was Please and you chose Thank You.</p>
            <Button className="LearningRoute-nextButton">Try another word!</Button>

            <h3 className="LearningRoute-positiveMessage">Correct!</h3>
            <p className="LearningRoute-correctTranslation">The correct translation for Si us plau was Please and you chose Please.</p>
            {/* handleNextWordClick function */}
            <Button className="LearningRoute-nextButton">Try another word!</Button>
        </div>
      </section>
    );
  }
}

export default LearningRoute

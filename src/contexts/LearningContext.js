import React, { Component } from 'react'

const LearningContext = React.createContext({
        currentWord: '',
        nextWord: '',
        correct: 0,
        incorrect: 0,
        total: 0,
        answer: '',
        correctAnswer: '',
        isFlipped: false,
        isCorrect: null,
        error: null,
        flipToFeedback: () => {},
        flipToQuestion: () => {},
        setCurrentWord: () => {},
        setFeedback: () => {},
        setError: () => {}
})

export default LearningContext

export class LearningProvider extends Component {
    constructor(props) {
        super(props)
        const state = {
            currentWord: '',
            nextWord: '',
            correct: 0,
            incorrect: 0,
            total: 0,
            answer: '',
            correctAnswer: '',
            isFlipped: false,
            isCorrect: null,
            error: null
        }
        this.state = state
    }

    flipToFeedback = () => {
        this.setState({
            isFlipped: true
        })
    }

    flipToQuestion = (nextWord) => {
        this.setState({
            isFlipped: false,
            currentWord: nextWord
        })
    }

    setCurrentWord = (res) => {
        this.setState({
            currentWord: res.nextWord,
            correct: res.wordCorrectCount,
            incorrect: res.wordIncorrectCount,
            total: res.totalScore
        })
    }

    setFeedback = (res, guess) => {
        this.setState({
            nextWord: res.nextWord,
            correct: res.wordCorrectCount,
            incorrect: res.wordIncorrectCount,
            total: res.totalScore,
            isCorrect: res.isCorrect,
            answer: guess,
            correctAnswer: res.answer,
        })
    }

    setError = (error) => {
        this.setState({
            error: error.message
        })
    }
    render() {
        const value = {
            currentWord: this.state.currentWord,
            nextWord: this.state.nextWord,
            correct: this.state.correct,
            incorrect: this.state.incorrect,
            total: this.state.total,
            answer: this.state.answer,
            correctAnswer: this.state.correctAnswer,
            isFlipped: this.state.isFlipped,
            isCorrect: this.state.isCorrect,
            error: this.state.error,
            flipToFeedback: this.flipToFeedback,
            flipToQuestion: this.flipToQuestion,
            setCurrentWord: this.setCurrentWord,
            setFeedback: this.setFeedback,
            setError: this.setError
        }
        return(
            <LearningContext.Provider value={value}>
                {this.props.children}
            </LearningContext.Provider>
        )
    }
}
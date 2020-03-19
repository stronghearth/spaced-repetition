import React, { Component } from 'react'

const LearningContext = React.createContext({
        word: '',
        correct: 0,
        incorrect: 0,
        total: 0,
        answer: '',
        correctAnswer: '',
        isCorrect: null,
        error: null,
        setCurrentWord: () => {},
        setFeedback: () => {},
        setError: () => {}
})

export default LearningContext

export class LearningProvider extends Component {
    constructor(props) {
        super(props)
        const state = {
            word: '',
            correct: 0,
            incorrect: 0,
            total: 0,
            answer: '',
            correctAnswer: '',
            isCorrect: null,
            error: null
        }
        this.state = state
    }

    setCurrentWord = (res) => {
        this.setState({
            word: res.nextWord,
            correct: res.wordCorrectCount,
            incorrect: res.wordIncorrectCount,
            total: res.totalScore
        })
    }

    setFeedback = (res) => {
        this.setState({
            word: res.nextWord,
            correct: res.wordCorrectCount,
            incorrect: res.wordIncorrectCount,
            total: res.totalScore,
            isCorrect: res.isCorrect,
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
            word: this.state.word,
            correct: this.state.correct,
            incorrect: this.state.incorrect,
            total: this.state.total,
            answer: this.state.answer,
            correctAnswer: this.state.correctAnswer,
            isCorrect: this.state.isCorrect,
            error: this.state.error,
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
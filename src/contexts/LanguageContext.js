import React, { Component } from 'react'

const LanguageContext = React.createContext({
  language: {},
  words: [],
  setLanguage: () => {},
  setWords: () => {},
})

export default LanguageContext

export class LanguageProvider extends Component {
  constructor(props) {
    super(props)
    const state = { language: {}, words: [] }

    this.state = state;
  }

  setLanguage = (language) => {
    this.setState({ language })
  }

  setWords = (words) => {
    this.setState({ words })
  }

  render() {
    const value = {
      language: this.state.user,
      words: this.state.error,
      setLanguage: this.setError,
      setWords: this.clearError,
    }
    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}

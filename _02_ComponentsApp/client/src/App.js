import React from 'react'
import './App.css'

import Slider from './components/Slider/Slider'
import Characters from './components/Characters/Characters'

export default class App extends React.Component {

  render () {
    return (
      <div className="container">
        <h1>React Components</h1>
        <Slider />
        <Characters />
      </div>
    )
  }
}



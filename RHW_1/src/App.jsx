import React, { Component } from 'react'
import Ball from './components/Ball/ball.jsx'
import Form from './components/form/form.jsx'
import { data } from './components/constants/constants.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Ball />
        <div className="inputArea">
          <h2 className="title">My form</h2>
          <Form data={data}/>
          <button className="btn">Click</button>
        </div> 
      </div>
    )
  }
}

export default App;

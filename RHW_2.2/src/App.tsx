import React, { Component } from 'react'
import './App.css';
import Test from './component/Test';

interface IProps {

}

interface IState {
  value: number
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      value: 1
    }
  }

  handlerClick = () => {
    this.setState({
      value: this.state.value + 1
    })
  }

  render(): JSX.Element {
    return (
      <div className="App">
        <Test trigger={15} value={this.state.value} handlerClick={this.handlerClick} />
      </div>
    )
  }
}

export default App;



import './App.css';
import React, { Component } from 'react'
import Input from './components/Input'
import TextArea from './components/TextArea'

interface IProps {

}

interface IState {
  value: string
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      value: '',
    }
  }
  handelChange = (e: any): void => {
    this.setState({
      value: e.target.value
    })
  }
  render(): JSX.Element {
    return (
      <div>
        <div className="area">
          <Input metod={this.handelChange} />
          <TextArea value={this.state.value} />
        </div>
      </div>
    )
  }
}

export default App;

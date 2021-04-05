import React, { Component } from 'react';
import './App.css';
import Login from './component/HW_3.1/Login/Login'
import Registration from './component/HW_3.1/Registration/Registration'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Table from './component/HW_3.2/table/table';

class App extends Component {
  render(): JSX.Element {
    return (
      <div className="App">
        <div id="form">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/registration" component={Registration} />
            </Switch>
          </BrowserRouter>
        </div>
        <div id="table">
          <Table />
        </div>

      </div>
    )
  }
}
export default App;

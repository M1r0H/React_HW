import React from 'react';
import Input from './component/Input/Input'
import './App.css';
import Login from './component/Form/Login/Login'
import { Registration } from './component/Form/Registration/Registration'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './component/Form/PrivateRout';

function App(): JSX.Element {
  return (
    <div className="App">
      <Input />
      <div id="form">
        <BrowserRouter>
          <Switch>
            <Route exact path="/registration" component={Registration} />
            <PrivateRoute
              exact
              path="/"
              component={Login}
              signed={true}
            />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;


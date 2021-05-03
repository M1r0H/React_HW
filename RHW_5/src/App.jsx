import './App.css';
import React from 'react';
import { Provider } from 'react-redux'
import store from './store/store.js';
import { Form } from './components/Forms/Form';
import { Text } from './components/Text/Text';

function App() {
  return (
    <Provider store={store}>
      <Form className="singUp" />
      <Text />
    </Provider>
  );
}

export default App;

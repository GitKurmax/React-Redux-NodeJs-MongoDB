import React from 'react';
import Content from './components/content/Content';
import Header from './components/header/Header';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './redux/rootReducer';
import './App.css';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <Content/>
      </div>
    </Provider>
  );
}

export default App;

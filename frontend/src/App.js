import React from 'react';
import Content from './components/content/Content';
import Header from './components/header/Header';
import Login from './components/auth/Login';
import Register from './components/auth/Registration';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import rootReducer from './redux/rootReducer';
import './App.css';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header/>
          </div>
          <Switch>
            <Route path="/" exact component = {Content}/>
            <Route path="/register" component = {Register}/>
            <Route path="/login" component = {Login}/>
            <Route render = {() => <div>
              <h1 style={{marginTop:'250px', textAlign: 'center'}}>Page not found</h1>
            </div>} />
          </Switch>
        </BrowserRouter>
      </Provider>
    
  );
}

export default App;

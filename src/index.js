import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux"
import reducer from './redux/reducers';
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

let myStore = createStore(reducer)

root.render(
  <Provider store = {myStore}>
    <App />
  </Provider>
);


reportWebVitals();

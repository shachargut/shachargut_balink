import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import redux, { createStore } from 'redux';
import {Provider} from 'react-redux';
import { orederReducer } from './redux/orderReducer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(orederReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>  
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

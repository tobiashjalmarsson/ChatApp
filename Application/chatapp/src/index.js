import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChatPage from './pages/ChatPage';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux';
import store from './redux/store';

const root = document.getElementById('root');
console.log(store.getState());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChatPage />
    </Provider>
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

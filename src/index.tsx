import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserDataProvider } from './contexts'


ReactDOM.render(
  <React.StrictMode>
    <UserDataProvider>
      <App />
    </UserDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


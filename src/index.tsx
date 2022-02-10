import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import reportWebVitals from './app/reportWebVitals';
import {PaginationProvider} from './app/context/PaginationContext'
import {PopupProvider} from "./app/context/PopupContext";

ReactDOM.render(
  <React.StrictMode>
    <PopupProvider>
      <PaginationProvider>
        <App/>
      </PaginationProvider>
    </PopupProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
reportWebVitals(console.log)

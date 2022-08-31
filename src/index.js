import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const name = {name:"Vikas Pathak", age:24};
const lastname = "sohail"
root.render(
  // <h1> My name is Vikas</h1>
  // <h2> Welcome to the react</h2>
  <React.StrictMode>
    <App
    name = {name}
     />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

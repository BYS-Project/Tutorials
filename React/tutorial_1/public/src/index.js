import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
// Import of the App
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// This creates the root of the webpage
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render the App Component in the root element
// You can find the html file at ../public/index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

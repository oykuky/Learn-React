import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

import Counter from './components/Counter';
import InputExp from './components/InputExp';
import UseEffect from './components/UseEffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <UseEffect/> */}
    {/* <InputExp/> */}
  </React.StrictMode>
);

reportWebVitals();

// import React from 'react';
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
// import { AppProvider } from './context/Context';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'
import logo from '../src/assets/logo.png'

const AppLazyComponent = lazy(() => new Promise((resolve) => {
  setTimeout(() => {
    resolve(import('./App'))
  }, 5000)
}))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div className='saplashs'>
      <img className='logo' src={logo} alt='logo' />
    </div>}>
      <AppLazyComponent />
    </Suspense>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

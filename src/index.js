import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import App from './App/App';

const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress &&
      <div
      style={{
      width: "100%",
      height: "100",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
      }}
      >
      <Loader type="Oval" color="#00BFFF" height={80} width={80} />
    </div>
    );  
   }

ReactDOM.render(
  <BrowserRouter>
    <App />
    <LoadingIndicator />
  </BrowserRouter>,
  document.getElementById('root')
)
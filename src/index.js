import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";

import App from './App';
import reportWebVitals from './reportWebVitals';
import './plugins.css';
import './App.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  // library.pollingInterval = 8000; // frequency provider is polling
  return library;
};

root.render(
  <StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

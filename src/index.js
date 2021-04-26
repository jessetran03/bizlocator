import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import registerIcons from './registerIcons';
import { BusinessListProvider } from './context/BusinessListContext'
import './index.css';
import App from './App';

registerIcons();

ReactDOM.render(
  <BusinessListProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </BusinessListProvider>,
  document.getElementById('root')
)


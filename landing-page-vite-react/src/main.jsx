import './index.css'
import './App.css'
import App from './App'
import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


const rootElement = document.getElementById('test');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);


/* ReactDOM.createRoot(document.getElementById('login')).render(
  <React.StrictMode>

      <Login />

  </React.StrictMode>,
)

 */
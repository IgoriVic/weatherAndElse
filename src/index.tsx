import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './App_Routes/App_Routes';
// import { setupStore } from './store'; // does not needed yet

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Provider store={Storage}> */}
      <BrowserRouter >
        <AppRoutes />
      </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);

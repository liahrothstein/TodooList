import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { DataProvider } from './components/data-provider/data-provider';
import { store } from './store';
import reportWebVitals from './reportWebVitals';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <DataProvider />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
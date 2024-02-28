import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/_reset.scss';
import './styles/_base.scss';
import AppRouter from './AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);

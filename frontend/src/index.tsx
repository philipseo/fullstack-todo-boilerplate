import React from 'react';
import ReactDOM from 'react-dom';

import App from '@src/pages/App';
import { CssBaseline } from '@material-ui/core';

if (module.hot) module.hot.accept()

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline/>
    <App />
  </React.StrictMode>,
  document.getElementById('app'),
);

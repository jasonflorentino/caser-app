import React from 'react';
import ReactDOM from 'react-dom';
import { MantineProvider } from '@mantine/core';

import App from './App';
import './styles/index.scss';

ReactDOM.render(
  <MantineProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MantineProvider>,
  document.getElementById('root')
);

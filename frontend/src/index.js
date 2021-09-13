import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import {ColorModeScript, ChakraProvider} from '@chakra-ui/react';
import './index.css';
import App from './App';

const customHistory = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
      <App customHistory={customHistory} />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();

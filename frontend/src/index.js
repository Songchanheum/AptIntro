import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import {ColorModeScript, ChakraProvider} from '@chakra-ui/react';
import './index.css';
import App from './App';
import { extendTheme } from "@chakra-ui/react"
import { theme as chakraTheme } from '@chakra-ui/react'
import {Fonts} from 'common/util/Fonts'

const customHistory = createBrowserHistory();
const theme = extendTheme({
  fonts: {
    ...chakraTheme.fonts,
    heading: "ng",
    body: "Raleway",
  },
})
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <ColorModeScript initialColorMode="dark" />
      <App customHistory={customHistory} />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();

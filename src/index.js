import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import './globals.css';
import { ColorModeScript } from '@chakra-ui/react';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </>
);

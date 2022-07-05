import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <ChakraProvider>
      <Header />
      {children}
    </ChakraProvider>
  );
};

export default Layout;

import React from 'react';
import { Container, Box, heading, Heading } from '@chakra-ui/react';

const Header = () => {
  return (
    <Container
      borderBottom="1px solid rgba(0,0,0,0.2)"
      mb="1.4rem"
      as="header"
      minW="100%"
      h="3rem"
    >
      <Box w="90%" h="full" display="flex">
        <Heading as="h1">Platzi Merch</Heading>
      </Box>
    </Container>
  );
};

export default Header;

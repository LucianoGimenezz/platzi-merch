import React from 'react';
import { Container, Box, Text, Heading, Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';
import AppContext from '../context/AppContext';
import { useContext } from 'react';

const Header = () => {
  const {
    state: { cart }
  } = useContext(AppContext);
  return (
    <Container
      borderBottom="1px solid rgba(0,0,0,0.2)"
      mb="1.4rem"
      as="header"
      minW="100%"
      h="3rem"
      p={0}
    >
      <Box
        w="90%"
        h="full"
        display="flex"
        m="0 auto"
        p={0}
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading as="h1">
          <Link to="/">Platzi Merch</Link>
        </Heading>
        <Box display="flex">
          <Text>
            <Link to="/checkout">
              <Icon as={BsFillCartFill} w={6} h={6} />
            </Link>
          </Text>
          {cart.length > 0 && <Text>{cart.length}</Text>}
        </Box>
      </Box>
    </Container>
  );
};

export default Header;

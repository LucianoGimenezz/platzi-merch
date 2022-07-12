import React, { useContext } from 'react';
import {
  Container,
  Box,
  Text,
  Heading,
  IconButton,
  Button
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Checkout = () => {
  const {
    state: { cart },
    removeFromCart
  } = useContext(AppContext);

  const handleDeleteProduct = (product) => {
    removeFromCart(product);
  };

  return (
    <Container
      as="section"
      w="full"
      minH="100vh"
      display="flex"
      flexDirection={{ base: 'column', lg: 'row' }}
    >
      <Box w="100%" display="flex" flexDirection="column">
        <Text>Lista de pedidos:</Text>
        <Box
          mt={1}
          w="full"
          flexDirection="column"
          display="flex"
          alignContent="end"
          justifyContent="space-between"
        >
          {cart.map((product) => (
            <Box
              key={`${product.id}-checkout`}
              display="flex"
              w="full"
              justifyContent="space-between"
              borderBottom="1px solid #000"
            >
              <Text alignSelf="center">{product.title}</Text>
              <Box display="flex" alignItems="center" alignSelf="center">
                <Text>${product.price}</Text>
                <IconButton
                  onClick={() => handleDeleteProduct(product)}
                  _focus={{
                    background: 'transparent'
                  }}
                  _hover={{
                    background: 'transparent',
                    color: 'red'
                  }}
                  fontSize="0.7rem"
                  bg="none"
                  aria-label="Delete product"
                  icon={<CloseIcon />}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        w="100%"
        mt={{ base: 4, lg: 0 }}
        display="flex"
        flexDirection="column"
      >
        <Heading fontSize="1.4rem" as="h4">
          Precio total: $
          {cart.reduce((prev, current) => prev + current.price, 0)}
        </Heading>
        <Link to="/checkout/information">
          <Button
            w="full"
            variant="outline"
            maxW="18rem"
            colorScheme="green"
            mt={2}
            size="sm"
          >
            Continuar pedido
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Checkout;

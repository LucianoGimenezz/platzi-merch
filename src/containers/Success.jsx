import React, { useContext, useEffect } from 'react';
import { Container, Box, Heading, Text } from '@chakra-ui/react';
import AppContext from '../context/AppContext';

const Sucess = () => {
  const position = [51.505, -0.09];
  const {
    state: { buyer }
  } = useContext(AppContext);

  useEffect(() => {
    console.log(buyer);
  }, []);
  return (
    <Container w="full" display="flex" flexDirection="column">
      <Box>
        <Heading as="h4" fontSize="1.2rem">
          Luciano Gimenez, gracias por tu compra!!
        </Heading>
        <Text color="gray.500" fontWeight="bold" pt={2}>
          Tu pedido llegara dentro de 3 dias
        </Text>
      </Box>
    </Container>
  );
};

export default Sucess;

import React from 'react';
import { Container, SimpleGrid } from '@chakra-ui/react';
import initialState from '../initialState';
import ProductItem from '@components/ProductItem';

const Home = () => {
  return (
    <Container
      as="section"
      display="flex"
      flexDirection="column"
      w="100%"
      minH="100vh"
      maxW="6xl"
    >
      <SimpleGrid
        columns={{ base: 1, md: 3, lg: 4 }}
        w="100%"
        h="120px"
        spacing={1}
        gap={10}
      >
        {initialState.products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Home;

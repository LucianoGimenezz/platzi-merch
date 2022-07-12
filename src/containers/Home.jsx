import React from 'react';
import { Container, SimpleGrid } from '@chakra-ui/react';
import ProductItem from '@components/ProductItem';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

const Home = () => {
  const {
    state: { products },
    addToCart,
    addToBuyer
  } = useContext(AppContext);
  const {
    state: { cart }
  } = useContext(AppContext);

  const handleCart = (product) => {
    addToCart(product);
  };

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
        minH="200px"
        spacing={1}
        gap={10}
      >
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            handleCart={handleCart}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Home;

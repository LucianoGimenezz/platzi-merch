import React from 'react';
import { Box, IconButton, Badge, Text, Image } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const ProductItem = ({ product }) => {
  return (
    <Box
      justifySelf="center"
      borderWidth={1}
      maxW="sm"
      h="100%"
      borderRadius="lg"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
    >
      <Box w="full" minH="200px" display="flex" alignItems="center">
        <Image src={product.image} alt={product.title} />
      </Box>
      <Box
        w="100%"
        h="auto"
        display="flex"
        alignItems="flex-end"
        justifyContent="space-between"
        p={4}
      >
        <Box
          w="50%"
          p={8}
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding={0}
        >
          <Text>${product.price}</Text>
          <Badge
            ml={2}
            variant="outline"
            colorScheme="green"
            display="flex"
            alignItems="center"
          >
            {product.title}
          </Badge>
        </Box>
        <IconButton
          bg="green.200"
          color="whiteAlpha.800"
          fontWeight="bold"
          justifySelf="flex-end"
          aria-label="pruchase"
          icon={<AddIcon />}
          mr="2em"
        />
      </Box>
    </Box>
  );
};

export default ProductItem;

import React, { useRef, useContext } from 'react';
import {
  Container,
  Box,
  Stack,
  Input,
  Button,
  Heading,
  Text
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

const CheckoutInformation = () => {
  const navigate = useNavigate();
  const {
    state: { cart },
    addToBuyer
  } = useContext(AppContext);
  const form = useRef(null);

  const handlePay = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      direction: formData.get('direction'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone')
    };
    addToBuyer(buyer);
    navigate('/checkout/payment', { replace: true });
  };

  return (
    <Container
      w="Full"
      maxW="1200px"
      margin="0 auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        w="full"
        direction={['column', 'row']}
        spacing={10}
        justifyContent="center"
      >
        <Box width="50%">
          <form ref={form}>
            <Input name="name" placeholder="Nombre completo" />

            <Input name="email" placeholder="Correo Electronico" />

            <Input name="direction" placeholder="Direccion" />

            <Input name="apto" placeholder="Apto" />

            <Input name="city" placeholder="Ciudad" />

            <Input name="country" placeholder="Pais" />

            <Input name="state" placeholder="Estado" />

            <Input name="cp" placeholder="Codigo postal" />

            <Input name="phone" placeholder="Telefono" />

            <Box w="full" display="flex" justifyContent="space-between" pt={3}>
              <Link to="/checkout">
                <Button>Regresar</Button>
              </Link>
              <Button onClick={handlePay}>Pagar</Button>
            </Box>
          </form>
        </Box>
        <Box w="200px">
          <Heading fontSize="1rem" as="h2">
            Pedido:
          </Heading>
          <Box display="flex" flexDirection="column">
            {cart.map((product) => (
              <Box
                key={`${product.id}-checkInformation`}
                mt={3}
                display="flex"
                justifyContent="space-between"
                w="full"
                borderBottom="1px solid rgba(0,0,0,0.2)"
              >
                <Text>{product.title}</Text>
                <Text>${product.price}</Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Stack>
      <style jsx="true">
        {`
          form > input {
            margin-top: 8px;
          }
        `}
      </style>
    </Container>
  );
};

export default CheckoutInformation;

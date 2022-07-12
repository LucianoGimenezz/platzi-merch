import React, { useState, useRef, useContext } from 'react';
import {
  Container,
  Box,
  Stack,
  Input,
  Button,
  Heading,
  Text,
  FormControl,
  FormErrorMessage
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

const CheckoutInformation = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({
    name: false,
    email: false,
    address: false,
    city: false,
    country: false,
    state: false,
    cp: false,
    phone: false
  });
  const {
    state: { cart },
    addToBuyer
  } = useContext(AppContext);
  const form = useRef(null);

  const handlePay = () => {
    const formData = new FormData(form.current);

    if (formData.get('name').trim() === '') {
      setError({
        ...error,
        name: true
      });
      return;
    }

    if (
      formData.get('email').trim() === '' ||
      !formData.get('email').includes('@')
    ) {
      setError({
        ...error,
        email: true
      });
      return;
    }

    if (formData.get('direction').trim() === '') {
      setError({
        ...error,
        address: true
      });
      return;
    }

    if (formData.get('city').trim() === '') {
      setError({
        ...error,
        city: true
      });
      return;
    }

    if (formData.get('country').trim() === '') {
      setError({
        ...error,
        country: true
      });
      return;
    }

    if (formData.get('state').trim() === '') {
      setError({
        ...error,
        state: true
      });
      return;
    }

    if (formData.get('cp').trim() === '') {
      setError({
        ...error,
        cp: true
      });
      return;
    }

    if (formData.get('phone').trim() === '') {
      setError({
        ...error,
        phone: true
      });
      return;
    }

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
            <FormControl mt={2} isInvalid={error.name}>
              <Input
                name="name"
                placeholder="Nombre completo"
                onChange={() => setError(false)}
              />
              {error.name && (
                <FormErrorMessage>name is required</FormErrorMessage>
              )}
            </FormControl>

            <FormControl mt={2} isInvalid={error.email}>
              <Input
                name="email"
                placeholder="Correo Electronico"
                onChange={() => setError(false)}
              />
              {error.email && (
                <FormErrorMessage>email is required</FormErrorMessage>
              )}
            </FormControl>
            <FormControl mt={2} isInvalid={error.address}>
              <Input
                onChange={() => setError(false)}
                name="direction"
                placeholder="Direccion"
              />
              {error.address && (
                <FormErrorMessage>direction is required</FormErrorMessage>
              )}
            </FormControl>
            <FormControl mt={2}>
              <Input name="apto" placeholder="Apto (opcional)" />
            </FormControl>

            <FormControl mt={2} isInvalid={error.city}>
              <Input
                onChange={() => setError(false)}
                name="city"
                placeholder="Ciudad"
              />
              {error.city && (
                <FormErrorMessage>city is required</FormErrorMessage>
              )}
            </FormControl>
            <FormControl mt={2} isInvalid={error.country}>
              <Input
                onChange={() => setError(false)}
                name="country"
                placeholder="Pais"
              />
              {error.country && (
                <FormErrorMessage>country is required</FormErrorMessage>
              )}
            </FormControl>
            <FormControl mt={2} isInvalid={error.state}>
              <Input
                onChange={() => setError(false)}
                name="state"
                placeholder="Estado"
              />
              {error.state && (
                <FormErrorMessage>state is required</FormErrorMessage>
              )}
            </FormControl>
            <FormControl mt={2} isInvalid={error.cp}>
              <Input
                onChange={() => setError(false)}
                name="cp"
                placeholder="Codigo postal"
              />
              {error.cp && (
                <FormErrorMessage>zip code is required</FormErrorMessage>
              )}
            </FormControl>
            <FormControl mt={2} isInvalid={error.phone}>
              <Input
                onChange={() => setError(false)}
                name="phone"
                placeholder="Telefono"
              />
              {error.phone && (
                <FormErrorMessage>phone is required</FormErrorMessage>
              )}
            </FormControl>

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

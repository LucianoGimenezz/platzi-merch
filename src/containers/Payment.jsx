import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { Container, Box, Text, Spinner } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const { state, addNewOrder } = useContext(AppContext);

  const { cart, buyer } = state;

  const [{ isPending, isResolved, isRejected }] = usePayPalScriptReducer();

  const handleSuccessPayment = (data) => {
    const { orderID, payerID } = data;
    const newOrder = {
      buyer,
      product: cart,
      payment: {
        orderID,
        payerID
      }
    };
    addNewOrder(newOrder);
    navigate('/checkout/success');
  };

  const handleValueToPayment = () => {
    const total = cart.reduce((prev, current) => prev + current.price, 0);
    return total;
  };

  useEffect(() => {
    if (isRejected) {
      console.log('Orden cancelada!');
    }
  }, [isRejected]);

  return (
    <Container w="full" display="flex" flexDirection="column">
      <Box display="flex" flexDirection="column">
        <Text fontSize="1.4rem">Resumen del Pedido:</Text>
        {cart.map((product) => (
          <Box
            key={`${product.id}-payment`}
            display="flex"
            justifyContent="space-between"
            borderBottom="1px dotted rgba(0,0,0,0.2)"
            mt={2}
          >
            <Text>{product.title}</Text>
            <Text>${product.price}</Text>
          </Box>
        ))}
      </Box>
      <Box w="full" mt={6}>
        {isPending && <Spinner />}
        {!isPending && (
          <PayPalButtons
            onCancel={() => {
              console.log('Cancelado...');
            }}
            style={{ layout: 'vertical' }}
            onApprove={(data, actions) => {
              return actions.order.capture().then(() => {
                handleSuccessPayment(data);
              });
            }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: handleValueToPayment()
                    }
                  }
                ]
              });
            }}
          />
        )}
      </Box>
    </Container>
  );
};

export default Payment;

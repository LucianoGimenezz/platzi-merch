import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@containers/Home';
import Notfound from '@containers/Notfound';
import Checkout from '@containers/Checkout';
import CheckoutInformation from '@containers/CheckoutInformation';
import Payment from '@containers/Payment';
import Success from '@containers/Success';
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const App = () => {
  const { state, addToCart, removeFromCart, addToBuyer, addNewOrder } =
    useInitialState();
  return (
    <PayPalScriptProvider
      options={{
        'client-id':
          'Ad9QGp_0dhJ_snJerMVycClvbffSnjVnCfQ4AptDzt_2rvzR0q_0h3ptsQNhfZpz7UX2tOrE0C8V9W4D',
        currency: 'USD'
      }}
    >
      <AppContext.Provider
        value={{
          state,
          addToCart,
          removeFromCart,
          addToBuyer,
          addNewOrder
        }}
      >
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/checkout" element={<Checkout />} />
              <Route
                exact
                path="/checkout/information"
                element={<CheckoutInformation />}
              />
              <Route exact path="/checkout/payment" element={<Payment />} />
              <Route exact path="/checkout/success" element={<Success />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AppContext.Provider>
    </PayPalScriptProvider>
  );
};

export default App;

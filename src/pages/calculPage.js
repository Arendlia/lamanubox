import React from 'react';
import Calculator from './../components/Calculator';
import Box from '../components/Box';
import data from './../data/Data';
import { useState } from 'react';

function CalculPage() {
 const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }

   };const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const Addm2 = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, surface: exist.surface + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, surface: 1 }]);
    }
  };
  const Removem2 = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.surface === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, surface: exist.surface - 1 } : x
        )
      );
    }
  };
  const Addh = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, high: exist.high + 0.5 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, high: 1 }]);
    }
  };
  const Removeh = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.high === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, high: exist.high - 0.5 } : x
        )
      );
    }
  };
    return (
      <>
        <Calculator products={products} onAdd={onAdd}/>
        <Box cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          Addm2={Addm2}
          Removem2={Removem2}
          Addh={Addh}
          Removeh={Removeh}/>
      </>
    );
  }
  
  export default CalculPage;

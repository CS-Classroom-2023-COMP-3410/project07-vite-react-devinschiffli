import React from 'react';
import ShoppingCart from '../components/ShoppingCart';

function CartPage({ cartItems, onRemoveItem }) {

  return (
    <div>
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ShoppingCart
          cartItems={cartItems}
          onRemoveItem={onRemoveItem}
        />
      )}
    </div>
  );
}

export default CartPage;
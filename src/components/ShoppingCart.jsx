import React from 'react';

function ShoppingCart({ cartItems, onRemoveItem }) {

  if (cartItems.length === 0) return null;

  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '15px',
      marginTop: '20px',
      borderRadius: '8px'
    }}>
      <h3>Shopping Cart</h3>

      {cartItems.map((item, index) => (
        <div key={index} style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '8px'
        }}>
          <span>{item.name}</span>

          <button onClick={() => onRemoveItem(index)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;
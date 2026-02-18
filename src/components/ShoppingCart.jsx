import React from 'react';
import Button from './Button';

function ShoppingCart({ cartItems, onRemoveItem }) {

  if (cartItems.length === 0) return null;

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price * (item.quantity || 1)),
    0
  );

  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '15px',
      marginTop: '20px',
      borderRadius: '8px',
      backgroundColor: '#f8f9fa'
    }}>

      <h3>Shopping Cart</h3>

      <ul style={{ padding: 0, listStyle: 'none' }}>
        {cartItems.map((item, index) => (
          <li key={index} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '8px 0',
            borderBottom: '1px solid #ddd'
          }}>

            <div>
              <strong>{item.title}</strong> × {item.quantity || 1}
              <div>${item.price * (item.quantity || 1)}</div>
            </div>

            <Button
              onClick={() => onRemoveItem(index)}
              variant="danger"
            >
              −
            </Button>

          </li>
        ))}
      </ul>

      <div style={{
        marginTop: '15px',
        padding: '10px 0',
        borderTop: '2px solid #ddd',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <strong>Total:</strong>
        <strong>${totalPrice}</strong>
      </div>

    </div>
  );
}

export default ShoppingCart;
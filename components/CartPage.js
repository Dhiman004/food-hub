import React from 'react';
import './styles/cart.css';

function CartPage({ cartItems }) {
  if (!cartItems  === 0) {
    return <div>Your cart is empty.</div>;
  }

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2 className="cart-page__title">Shopping Cart</h2>
      <div className="cart-page__items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item__image" />
            <div className="cart-item__details">
              <h3 className="cart-item__name">{item.name}</h3>
              <p className="cart-item__description">{item.description}</p>
              <div className="cart-item__price-quantity">
                <p className="cart-item__price">Price: ₹{item.price}</p>
                <p className="cart-item__quantity">Quantity: {item.quantity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-page__total">
        <h3 className="cart-page__total-title">Total:</h3>
        <p className="cart-page__total-price">₹{totalPrice.toFixed(2)}</p>
        {/* Add checkout button */}
        {/* You can add this part based on your implementation */}
      </div>
    </div>
  );
}

export default CartPage;
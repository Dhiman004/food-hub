import React from 'react';

const WrapContainer = ({ item, onAddToCart }) => {
  return (
    <div className="wrap-container">
      <div className="wrap-container-img">
        <img src={item.image} alt={item.name} className="wrap-img" />
      </div>
      <div className="wrap-container-text">
        <h4 className="wrap-name">{item.name}</h4>
        <p className="wrap-name">{item.price}</p>
        <button className="add-itm-btn" onClick={() => onAddToCart(item)}>
          Add Item
        </button>
      </div>
    </div>
  );
};

export default WrapContainer;
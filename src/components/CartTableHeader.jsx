import React from 'react'

function CartTableHeader({name, number, price, num, sum}) {
  return (
    <div className="cart-item-wrapper table-header">
      <div className="cart-img"></div>
      <div className="cart-name">{name}</div>
      <div className="cart-number">{number} {num} </div>
      <div className="cart-price">{price} {sum}</div>
      <div className="delete-btn"></div>
    </div>
  );
}

export default CartTableHeader
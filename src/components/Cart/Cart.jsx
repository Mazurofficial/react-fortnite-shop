import React from 'react';
import './Cart.scss';

export default function Cart(props) {
   const { quantity = 0 } = props;
   return (
      <div className="Cart">
         <i className="material-icons">shopping_cart</i>
         {quantity ? <span className="Cart-quantity">{quantity}</span> : null}
      </div>
   );
}

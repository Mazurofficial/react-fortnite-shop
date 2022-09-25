import React from 'react';
import './Cart.scss';

export default function Cart(props) {
   const {
      quantity = 0,
      handleCartShow = Function.prototype,
      isCartShow,
   } = props;
   return (
      <div className="Cart" onClick={handleCartShow}>
         {isCartShow ? (
            <i className="material-icons" onClick={handleCartShow}>
               close
            </i>
         ) : (
            <>
               <i className="material-icons">shopping_cart</i>
               {quantity ? (
                  <span className="Cart-quantity">{quantity}</span>
               ) : null}
            </>
         )}
      </div>
   );
}

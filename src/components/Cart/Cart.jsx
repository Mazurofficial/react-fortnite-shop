import React from 'react';
import './Cart.scss';
import { useContext } from 'react';
import { ShopContext } from '../../context';

export default function Cart() {
   const {
      order,
      handleCartShow = Function.prototype,
      isCartShow,
   } = useContext(ShopContext);
   return (
      <div className="Cart" onClick={handleCartShow}>
         {isCartShow ? (
            <i className="material-icons" onClick={handleCartShow}>
               close
            </i>
         ) : (
            <>
               <i className="material-icons">shopping_cart</i>
               {order.length ? (
                  <span className="Cart-quantity">{order.length}</span>
               ) : null}
            </>
         )}
      </div>
   );
}

import React from 'react';
import CartItem from './CartItem/CartItem';
import './CartList.scss';

export default function CartList(props) {
   const { order = [], handleCartShow = Function.prototype } = props;

   const totalPrice = order.reduce(
      (sum, orderItem) => sum + orderItem.price * orderItem.quantity,
      0
   );

   return (
      <div className="CartList">
         <ul>
            <li className="CartList-heading">
               CART
               <i className="material-icons" onClick={handleCartShow}>
                  close
               </i>
            </li>

            {order.length ? (
               order.map((orderItem) => (
                  <CartItem key={orderItem.id} {...orderItem} />
               ))
            ) : (
               <li>CART IS EMPTY</li>
            )}
            <li className="CartList-heading">SUMMARY: {totalPrice}</li>
         </ul>
      </div>
   );
}

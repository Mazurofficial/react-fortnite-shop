import React, { useContext } from 'react';
import CartItem from './CartItem/CartItem';
import './CartList.scss';
import { ShopContext } from '../../context';

export default function CartList() {
   const { order = [], handleCartShow = Function.prototype } =
      useContext(ShopContext);

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
            <li>
               <ul className="CartList-itemList">
                  {order.length ? (
                     order.map((orderItem) => (
                        <CartItem key={orderItem.id} {...orderItem} />
                     ))
                  ) : (
                     <li className="CartList-item">CART IS EMPTY</li>
                  )}
               </ul>
            </li>
            <li className="CartList-heading">SUMMARY: {totalPrice}</li>
         </ul>
      </div>
   );
}

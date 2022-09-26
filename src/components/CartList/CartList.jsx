import React from 'react';
import CartItem from './CartItem/CartItem';
import './CartList.scss';

export default function CartList(props) {
   const {
      order = [],
      handleCartShow = Function.prototype,
      removeProductFromOrder = Function.prototype,
      changeProductQuantity = Function.prototype,
   } = props;

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
                        <CartItem
                           key={orderItem.id}
                           {...orderItem}
                           removeProductFromOrder={removeProductFromOrder}
                           changeProductQuantity={changeProductQuantity}
                        />
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

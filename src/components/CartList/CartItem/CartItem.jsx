import React from 'react';

export default function CartItem(props) {
   const { id, name, price, quantity } = props;
   return (
      <li id={id} className="CartList-item">
         <p>
            {name} x{quantity} = {price}
         </p>
         <i className="material-icons">close</i>
      </li>
   );
}

import React from 'react';

export default function CartItem(props) {
   const {
      id,
      name,
      price,
      quantity,
      removeProductFromOrder = Function.prototype,
      changeProductQuantity = Function.prototype,
   } = props;
   return (
      <li id={id} className="CartList-item">
         <p>
            {name}{' '}
            <i
               className="material-icons"
               onClick={() => {
                  if (quantity > 1) {
                     changeProductQuantity(id, 'REMOVE');
                  } else {
                     removeProductFromOrder(id);
                  }
               }}
            >
               remove
            </i>{' '}
            x{quantity}{' '}
            <i
               className="material-icons"
               onClick={() => changeProductQuantity(id, 'ADD')}
            >
               add
            </i>{' '}
            = {price}
         </p>

         <i
            className="material-icons"
            onClick={() => removeProductFromOrder(id)}
         >
            close
         </i>
      </li>
   );
}

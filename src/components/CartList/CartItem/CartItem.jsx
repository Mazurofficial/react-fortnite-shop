import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../../../context';

export default function CartItem(props) {
   const { id, name, price, quantity } = props;

   const { removeProductFromOrder, incProductQuantity, decProductQuantity } =
      useContext(ShopContext);
   return (
      <li id={id} className="CartList-item">
         <p>
            {name}{' '}
            <i
               className="material-icons"
               onClick={() => {
                  if (quantity > 1) {
                     decProductQuantity(id);
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
               onClick={() => incProductQuantity(id)}
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

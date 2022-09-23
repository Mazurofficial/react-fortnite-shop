import React from 'react';
import './Good.scss';

export default function Good(props) {
   const { id, name, description, price, full_background, addProductToOrder } =
      props;

   return (
      <div className="Good" id={id}>
         <div className="Good-content">
            <img src={full_background} alt={name} />
            <div className="Good-content-text">
               <h3>{name}</h3>
               <p>{description}</p>
            </div>
         </div>
         <div className="Good-buy">
            <h4>{price}</h4>
            <button
               onClick={() => {
                  addProductToOrder({ id, name, price });
               }}
            >
               BUY
            </button>
         </div>
      </div>
   );
}

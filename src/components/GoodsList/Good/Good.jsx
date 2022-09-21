import React from 'react';
import './Good.scss';

export default function Good(props) {
   const { id, name, description, price, full_background } = props;

   return (
      <div className="Good" id={id}>
         <img src={full_background} alt={name} />
         <div className="Good-content">
            <h1>{name}</h1>
            <p>{description}</p>
            <h3>{price}</h3>
         </div>
      </div>
   );
}

import React from 'react';
import Good from './Good/Good';
import './GoodsList.scss';

export default function GoodsList(props) {
   const { goods = [] } = props;

   if (!goods.length) {
      return (
         <div>
            <h2>Nothing found</h2>
         </div>
      );
   } else {
      return (
         <div className="GoodsList">
            {goods.map((item) => (
               <Good key={item.id} {...item} />
            ))}
         </div>
      );
   }
}

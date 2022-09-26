import React from 'react';
import Good from './Good/Good';
import './GoodsList.scss';
import { useContext } from 'react';
import { ShopContext } from '../../context';

export default function GoodsList() {
   const { goods = [] } = useContext(ShopContext);

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

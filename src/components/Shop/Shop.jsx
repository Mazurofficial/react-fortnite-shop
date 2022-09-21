import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../../config';
import GoodsList from '../GoodsList/GoodsList';
import './Shop.scss';

export default function Shop() {
   const [goods, setGoods] = useState([]);
   const [loading, setLoading] = useState(true);

   // getGoods from API
   useEffect(() => {
      fetch(API_URL, {
         headers: {
            Authorization: API_KEY,
         },
      })
         .then((response) => response.json())
         .then((data) => {
            data.featured && setGoods(data.featured);
            console.log(data.featured);
            setLoading(false);
         });
   }, []);

   return (
      <div className="Shop">
         {loading ? (
            <div className="lds-facebook">
               <div></div>
               <div></div>
               <div></div>
            </div> //Preloaader https://loading.io/css/
         ) : (
            <GoodsList goods={goods} />
         )}
      </div>
   );
}

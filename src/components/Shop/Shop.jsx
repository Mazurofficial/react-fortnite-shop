import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../../config';
import Cart from '../Cart/Cart';
import GoodsList from '../GoodsList/GoodsList';
import './Shop.scss';

export default function Shop() {
   const [goods, setGoods] = useState([]);
   const [loading, setLoading] = useState(true);
   const [order, setOrder] = useState([]);

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
            setLoading(false);
         });
   }, []);

   // const buyProduct = (productId) => {
   //    if (!order.includes(productId)) {
   //       setOrder([...order, productId]);
   //    }
   // };

   const addProductToOrder = (product) => {
      const productIndex = order.findIndex(
         (orderItem) => orderItem.id === product.id
      );

      if (productIndex < 0) {
         const newProduct = {
            ...product,
            quantity: 1,
         };
         setOrder([...order, newProduct]);
      } else {
         const newProduct = order.map((orderItem, index) => {
            if (index === productIndex) {
               return {
                  ...orderItem,
                  quantity: orderItem.quantity + 1,
               };
            } else {
               return orderItem;
            }
         });
         console.log(newProduct);
         setOrder(newProduct);
      }
      console.log(product.id);
      console.log(order);
      console.log(productIndex);
   };

   return (
      <div className="Shop">
         <Cart quantity={order.length} />
         {loading ? (
            <div className="lds-facebook">
               <div></div>
               <div></div>
               <div></div>
            </div> //Preloaader https://loading.io/css/
         ) : (
            <GoodsList goods={goods} addProductToOrder={addProductToOrder} />
         )}
      </div>
   );
}

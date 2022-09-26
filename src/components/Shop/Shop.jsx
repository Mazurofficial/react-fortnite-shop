import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../../config';
import Cart from '../Cart/Cart';
import GoodsList from '../GoodsList/GoodsList';
import './Shop.scss';
import CartList from '../CartList/CartList';
import Alert from '../Alert/Alert';

export default function Shop() {
   const [goods, setGoods] = useState([]);
   const [loading, setLoading] = useState(true);
   const [order, setOrder] = useState([]);
   const [isCartShow, setCartShow] = useState(false);
   const [alertName, setAlertName] = useState('');

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
         setOrder(newProduct);
      }
      setAlertName(product.name);
   };

   const removeProductFromOrder = (productId) => {
      const newOrder = order.filter((orderItem) => orderItem.id !== productId);
      setOrder(newOrder);
   };

   const changeProductQuantity = (productId, operation) => {
      // operation can be 'ADD' or 'REMOVE'
      if (operation === 'ADD') {
         const newProduct = order.map((orderItem) => {
            if (orderItem.id === productId) {
               return {
                  ...orderItem,
                  quantity: orderItem.quantity + 1,
               };
            } else {
               return orderItem;
            }
         });
         setOrder(newProduct);
      } else if (operation === 'REMOVE') {
         const newProduct = order.map((orderItem) => {
            if (orderItem.id === productId && orderItem.quantity > 1) {
               return {
                  ...orderItem,
                  quantity: orderItem.quantity - 1,
               };
            } else {
               return orderItem;
            }
         });
         setOrder(newProduct);
      } else {
         console.log(
            "Operation is not valid! It can be only 'ADD' or 'REMOVE' "
         );
      }
   };

   const closeAlert = () => {
      setAlertName('');
   };

   const handleCartShow = () => setCartShow(!isCartShow);

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

   return (
      <div className="Shop">
         <Cart
            quantity={order.length}
            handleCartShow={handleCartShow}
            isCartShow={isCartShow}
         />
         {isCartShow && (
            <CartList
               order={order}
               handleCartShow={handleCartShow}
               removeProductFromOrder={removeProductFromOrder}
               changeProductQuantity={changeProductQuantity}
            />
         )}
         {loading ? (
            <div className="lds-facebook">
               <div></div>
               <div></div>
               <div></div>
            </div> //Preloaader https://loading.io/css/
         ) : (
            <GoodsList goods={goods} addProductToOrder={addProductToOrder} />
         )}
         {alertName && <Alert alertName={alertName} closeAlert={closeAlert} />}
      </div>
   );
}

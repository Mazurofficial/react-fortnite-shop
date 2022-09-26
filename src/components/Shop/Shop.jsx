import React, { useEffect, useContext } from 'react';
import { ShopContext } from '../../context';
import { API_KEY, API_URL } from '../../config';
import Cart from '../Cart/Cart';
import GoodsList from '../GoodsList/GoodsList';
import './Shop.scss';
import CartList from '../CartList/CartList';
import Alert from '../Alert/Alert';

export default function Shop() {
   const { loading, isCartShow, alertName, setGoods } = useContext(ShopContext);

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
         }); //eslint-disable-next-line
   }, []);

   return (
      <div className="Shop">
         <Cart />
         {isCartShow && <CartList />}
         {loading ? (
            <div className="lds-facebook">
               <div></div>
               <div></div>
               <div></div>
            </div> //Preloaader https://loading.io/css/
         ) : (
            <GoodsList />
         )}
         {alertName && <Alert />}
      </div>
   );
}

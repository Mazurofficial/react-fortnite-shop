import React, { useEffect } from 'react';
import './Alert.scss';
import { useContext } from 'react';
import { ShopContext } from '../../context';

export default function Alert() {
   const { alertName = '', closeAlert = Function.prototype } =
      useContext(ShopContext);

   useEffect(() => {
      const timerId = setTimeout(closeAlert, 3000);

      return () => {
         clearTimeout(timerId);
      };
   }, [alertName]); //eslint-disable-line

   return (
      <div className="Alert">
         <b>{alertName}</b> added to cart !
      </div>
   );
}

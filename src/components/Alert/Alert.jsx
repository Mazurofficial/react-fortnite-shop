import React, { useEffect } from 'react';
import './Alert.scss';

export default function Alert(props) {
   const { alertName = '', closeAlert = Function.prototype } = props;

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

export function reducer(state, action) {
   const { type, payload } = action;

   switch (type) {
      case 'SET_GOODS':
         return {
            ...state,
            goods: payload || [],
            loading: false,
         };
      case 'ADD_PRODUCT_TO_ORDER':
         const productIndex = state.order.findIndex(
            (orderItem) => orderItem.id === payload.id
         );
         let newOrder = null;
         if (productIndex < 0) {
            const newProduct = {
               ...payload,
               quantity: 1,
            };
            newOrder = [...state.order, newProduct];
         } else {
            newOrder = state.order.map((orderItem, index) => {
               if (index === productIndex) {
                  return {
                     ...orderItem,
                     quantity: orderItem.quantity + 1,
                  };
               } else {
                  return orderItem;
               }
            });
         }
         return {
            ...state,
            order: newOrder,
            alertName: payload.name,
         };
      case 'REMOVE_PRODUCT_FROM_ORDER':
         return {
            ...state,
            order: state.order.filter(
               (orderItem) => orderItem.id !== payload.id
            ),
         };
      case 'INCREMENT_QUANTITY':
         return {
            ...state,
            order: state.order.map((orderItem) => {
               if (orderItem.id === payload.id) {
                  return {
                     ...orderItem,
                     quantity: orderItem.quantity + 1,
                  };
               } else {
                  return orderItem;
               }
            }),
         };
      case 'DECREMENT_QUANTITY':
         return {
            ...state,
            order: state.order.map((orderItem) => {
               if (orderItem.id === payload.id && orderItem.quantity > 1) {
                  return {
                     ...orderItem,
                     quantity: orderItem.quantity - 1,
                  };
               } else {
                  return orderItem;
               }
            }),
         };
      case 'CLOSE_ALERT':
         return {
            ...state,
            alertName: '',
         };
      case 'TOGGLE_CART':
         return {
            ...state,
            isCartShow: !state.isCartShow,
         };
      default:
         return state;
   }
}

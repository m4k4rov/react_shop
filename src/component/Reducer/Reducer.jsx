export function reducer(state, {type, payload}) {
  switch (type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload || [],
        loading: false
      }
    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: ''
      };
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter(item => item.mainId !== payload.id)
      };
    case 'TOGGLE_BASKET':
      return {
        ...state,
        isBasketShow: !state.isBasketShow
      };
    case 'ADD_TO_BASKET':
      {
        const itemIndex = state.order.findIndex(orderItem => orderItem.mainId === payload.mainId);

        let newOrder = null;
        if (itemIndex < 0) {
          const newItem = {
            ...payload,
            quantity: 1,
          };
          newOrder = [...state.order, newItem];
        } else {
          newOrder = state.order.map((orderItem, index) => {
            if (index === itemIndex) {
              return {
                ...orderItem,
                quantity: orderItem.quantity + 1
              }
            } else {
              return orderItem;
            }
          })
        }
        return {
          ...state,
          order: newOrder,
          alertName: payload.displayName
        }
      }
    case 'PLUS_QUANTITY_ORDER':
      {
        return {
          ...state,
          order: state.order.map((orderItem) => {
            if (orderItem.mainId === payload.id) {
              return {
                ...orderItem,
                quantity: orderItem.quantity + 1
              }
            } else {
              return orderItem;
            }
          }),
        }
      }
    case 'MINUS_QUANTITY_ORDER':
      {
        const newOrder = state.order.map((orderItem) => {
          if (orderItem.mainId === payload.id) {
            return {
              ...orderItem,
              quantity: orderItem.quantity - 1
            }
          } else {
            return orderItem;
          }
        });
        return {
          ...state,
          order: newOrder.filter(item => item.quantity !== 0)
        }
      }
    default:
      return state;
  }
}
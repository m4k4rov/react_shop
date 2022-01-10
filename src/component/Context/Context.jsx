import {createContext, useReducer} from "react";
import { reducer } from "../Reducer/Reducer";
export const ShopContext = createContext();

export const ContextProvider = ({children}) => {

  const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: ''
  }

  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({type: 'CLOSE_ALERT'})
  };

  value.removeFromBasket = (Id) => {
    dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: Id}})
  };

  value.addToBasket = (item) => {
    dispatch({type: 'ADD_TO_BASKET', payload: item})
  }

  value.handleBasketShow = () => {
    dispatch({type: 'TOGGLE_BASKET'})
  };

  value.plusQuantityOrder = (Id) => {
    dispatch({type: 'PLUS_QUANTITY_ORDER', payload: {id: Id}})
  };

  value.minusQuantityOrder = (Id) => {
    dispatch({type: 'MINUS_QUANTITY_ORDER', payload: {id: Id}})
  };

  value.setGoods = (data) => {
    dispatch({type: 'SET_GOODS', payload: data})
  };




  return <ShopContext.Provider value = {value}>
    {children}
  </ShopContext.Provider>
}
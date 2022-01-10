import svg from './shopping.svg';
import './Cart.css';
import {useContext} from "react";
import { ShopContext } from '../Context/Context';

function Cart(props) {
  const {order = [], handleBasketShow = Function.prototype} = useContext(ShopContext);
  const quantity = order.length;
  return (
  <div className='cart' onClick={handleBasketShow}>
    <img className='cart__img' src={svg} alt="cart" />
    {quantity ? <span className='cart__quantity'>{quantity}</span> : ''}
    {props.children}
  </div>
  )
}

export {Cart};
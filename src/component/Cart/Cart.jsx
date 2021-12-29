import svg from './shopping.svg';
import './Cart.css';

function Cart(props) {
  const {quantity = 0, handleBasketShow = Function.prototype} = props;
  return (
  <div className='cart' onClick={handleBasketShow}>
    <img className='cart__img' src={svg} alt="cart" />
    {quantity ? <span className='cart__quantity'>{quantity}</span> : ''}
    {props.children}
  </div>
  )
}

export {Cart};
import './BasketList.css';
import {BasketItem} from '../BasketItem/BasketItem';
import close from './delete.svg';

function BasketList (props) {

  const {minusQuantityOrder = Function.prototype,
    plusQuantityOrder = Function.prototype,
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    order = []} = props;

  let allPrice = 0;

  if (order.length) {
    allPrice = 0;
    order.forEach(item => allPrice = allPrice + (item.finalPrice * item.quantity));
  }

  return (
    <div className="overlay">
      <div className="basket_list">
        <div className='basket_list_title'>
          Корзина
          <img className='basket_list_close' src={close} alt="close" onClick={handleBasketShow} />
        </div>
        {order.length ? order.map(item =>
          <BasketItem
            key={item.mainId}
            {...item}
            removeFromBasket={removeFromBasket}
            plusQuantityOrder={plusQuantityOrder}
            minusQuantityOrder={minusQuantityOrder}
          />) : ''}
        {allPrice ? <div className='basket_list_title'>Общая стоимость: {allPrice} V</div> : <div className="basket_item">Корзина пуста</div>}
        <div className='basket_list_box'>
          <button className="basket_list_buy">Оформить</button>
        </div>
      </div>
    </div>
  )
}

export {BasketList};
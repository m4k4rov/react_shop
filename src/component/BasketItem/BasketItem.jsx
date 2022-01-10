import minus from './minus.svg';
import plus from './plus.svg';
import close from '../BasketList/delete.svg';
import { ShopContext } from '../Context/Context';
import { useContext } from 'react';

function BasketItem(props) {

  const {removeFromBasket, plusQuantityOrder, minusQuantityOrder} = useContext(ShopContext);
  const {mainId, displayName, quantity, finalPrice } = props;

  return (
    <div className="basket_item">
      <div>
        <div className="basket_item_name">{displayName}</div>
      </div>
      <div className="basket_item_box">
        <img className="basket_item_plus" src={minus} alt="minus" onClick={() => minusQuantityOrder(mainId)} />
        <div className="basket_item_quantity">x{quantity}</div>
        <img className="basket_item_plus" src={plus} alt="plus" onClick={() => plusQuantityOrder(mainId)}/>
        <div className="basket_item_price"> = {finalPrice} V</div>
      </div>
      <img className='basket_list_close' src={close} alt="close" onClick={() => removeFromBasket(mainId)} />
    </div>
  )
}

export {BasketItem};
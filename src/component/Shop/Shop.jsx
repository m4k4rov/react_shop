import {useState, useEffect} from "react";
import {API_KEY, API_URL} from '../../config';
import { Preloader } from "../Preloader/Preloader";
import { GoodsList } from "../GoodsList/GoodsList";
import {Cart} from '../Cart/Cart';
import { BasketList } from "../BasketList/BasketList";
import { Alert } from "../Alert/Alert";
import './Shop.css';

function Shop (props) {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY,
      }
    })
    .then(response => response.json())
    .then(data => {
      data.shop && setGoods(data.shop.slice(0, 20));
      setLoading(false);
    })
    .catch(err => setLoading(false))
  }, []);

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  }

  const removeFromBasket = (Id) => {
    const newOrder = order.filter(item => item.mainId !== Id);
    setOrder(newOrder);
  }

  const plusQuantityOrder = (Id) => {

    const newOrder = order.map((orderItem) => {
      if (orderItem.mainId === Id) {
        return {
          ...orderItem,
          quantity: orderItem.quantity + 1
        }
      } else {
        return orderItem;
      }
    })

    setOrder(newOrder);
  }

  const minusQuantityOrder = (Id) => {

    const newOrder = order.map((orderItem) => {
      if (orderItem.mainId === Id) {
        return {
          ...orderItem,
          quantity: orderItem.quantity - 1
        }
      } else {
        return orderItem;
      }
    })

    setOrder(newOrder.filter(item => item.quantity !== 0));
  }

  const addToBasket = (item) => {
    const itemIndex = order.findIndex(orderItem => orderItem.mainId === item.mainId);

    setAlertName(item.displayName);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        } else {
          return orderItem;
        }
      })
      setOrder(newOrder);
    }
  }

  const closeAlert = () => {
    setAlertName('');
  }

  return (
      <div className="container shop">
        {isBasketShow ?
          <BasketList
            order={order}
            handleBasketShow={handleBasketShow}
            removeFromBasket={removeFromBasket}
            plusQuantityOrder={plusQuantityOrder}
            minusQuantityOrder={minusQuantityOrder}
          />
        : ''}
        <Cart
          quantity={order.length}
          handleBasketShow={handleBasketShow}
        >
          {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
        </Cart>
        {loading ? <Preloader /> :
        <GoodsList
          addToBasket={addToBasket}
          goods={goods}
        />}
      </div>
  )
}

export {Shop};
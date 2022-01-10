import {useEffect, useContext} from "react";
import {API_KEY, API_URL} from '../../config';
import { Preloader } from "../Preloader/Preloader";
import { GoodsList } from "../GoodsList/GoodsList";
import {Cart} from '../Cart/Cart';
import { BasketList } from "../BasketList/BasketList";
import { Alert } from "../Alert/Alert";
import './Shop.css';
import { ShopContext } from "../Context/Context";

function Shop (props) {
  const { loading, isBasketShow, alertName, setGoods} = useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY,
      }
    })
    .then(response => response.json())
    .then(data => {
      data.shop && setGoods(data.shop.slice(0, 20));
    })// eslint-disable-next-line
  }, []);

  return (
      <div className="container shop">
        {isBasketShow ? <BasketList /> : ''}
        <Cart >
          {alertName && <Alert />}
        </Cart>
        {loading ? <Preloader /> :
        <GoodsList />}
      </div>
  )
}

export {Shop};
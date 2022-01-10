import {GoodsItem} from '../GoodsItem/GoodsItem';
import './GoodsList.css';
import { useContext } from 'react';
import { ShopContext } from '../Context/Context';


function GoodsList() {
  const {goods = []} = useContext(ShopContext);

  if (!goods.length) {
    return <h3>Nothing here</h3>
  }

  return (
    <div className='goods'>
      {goods.map(item => <GoodsItem key={item.mainId} {...item}/>)}
    </div>
  )
}

export {GoodsList}
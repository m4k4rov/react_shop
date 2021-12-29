import {GoodsItem} from '../GoodsItem/GoodsItem';
import './GoodsList.css';

function GoodsList(props) {
  const {goods = [], addToBasket} = props;

  if (!goods.length) {
    return <h3>Nothing here</h3>
  }

  return (
    <div className='goods'>
      {goods.map(item => <GoodsItem addToBasket={addToBasket} key={item.mainId} {...item}/>)}
    </div>
  )
}

export {GoodsList}
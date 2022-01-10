import { ShopContext } from "../Context/Context";
import { useContext } from "react";

function GoodsItem (props) {
  const {mainId, displayName, displayDescription, price, displayAssets} = props;
  const {full_background} = displayAssets[0];
  const {finalPrice} = price;
  const {addToBasket} = useContext(ShopContext);
  return (
      <div target="_blank" rel="noreferrer" className="card">
        <div>
          <img className="card__img" src={full_background} alt={displayName} />
          <div className="card__content">
            <h2 className="card__name">{displayName}</h2>
            <span className="card__desc">{displayDescription}</span>
          </div>
        </div>
        <div className="card__footer">
          <button className="button_buy" onClick={() => addToBasket({mainId, displayName, finalPrice})}>КУПИТЬ</button>
          <div className="card__price">{finalPrice} V</div>
        </div>
      </div>
  )
}

export {GoodsItem};
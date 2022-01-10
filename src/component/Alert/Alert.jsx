import { useEffect, useContext } from "react";
import { ShopContext } from "../Context/Context";

function Alert() {

  const {alertName = '', closeAlert = Function.prototype} = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);
    return () => {
      clearTimeout(timerId);
    }
// eslint-disable-next-line
  }, [alertName])

  return (
      <div className="toast">{alertName} добавлен в корзину</div>
  )
}

export {Alert};
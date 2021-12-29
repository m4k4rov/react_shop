import './Modal.css';

function Modal(props) {
  return (
    <div className="modal">
      <div className="modal__box">
        <span></span> Пример функциональности онлайн-магазина без backend состовляющей с добавлением и удалением товаров в корзине. Используется API FortniteApi.io для контента карточек. В подборке выдаёт 20 элементов, содержащих постер продукта, его название, описание и стоимость. В проекте используется библиотека React, функциональные компоненты, асинхронные запросы, хуки.
        <div className="modal__close" onClick={props.toggle}>x</div>
      </div>
    </div>
  )
}

export {Modal};
function CartItem( props) {
  return (
    <div className="cart-item-wrapper" id={props.id}>
      <div className="cart-img">
        <img src={props.src} alt={props.alt} />
      </div>
      <div className="cart-name">
        <h3>{props.cardTitle}</h3>

        <small>розмір: {props.itemWeigth} гр</small>
      </div>
      <div className="cart-number">
        <div>{props.number}</div>
        <div className="counter-buttons">
          <button
            onClick={() => {
              props.addNum(props.id);
            }}
          >
            <i className="fa-solid fa-angle-up"></i>
          </button>
          <button
            onClick={() => {
              props.deductNum(props.id);
            }}
          >
            <i className="fa-solid fa-angle-down"></i>
          </button>
        </div>
      </div>
      <div className="cart-price">{props.amount} грн.</div>
      <button onClick={props.onClick} className="delete-btn">
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
}

export default CartItem
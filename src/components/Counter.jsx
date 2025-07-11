
function Counter( props ) {
  return (
    <div className="counter">
      <button
        onClick={props.minusNumber}
      >
        <i className="fa-solid fa-minus"></i>
      </button>
      <div>{props.numberOfPizza}</div>
      <button
        onClick={props.addNumber}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

export default Counter;

import { useState } from "react";
// import { useEffect, useState } from "react";
import Counter from "./Counter.jsx";
import TabSize from "./TabSize.jsx";

function ProductCard(props) {
  
  const [selectedSize, setSelectedSize] = useState(0);
  const [numberOfPizza, setNumberOfPizza] = useState(1);

const AddPizza = () => {
  const item = {
    id: props.id / props.itemWeigth[selectedSize],
    cardTitle: props.cardTitle,
    itemWeigth: props.itemWeigth[selectedSize],
    price: props.price[selectedSize],
    alt: props.alt,
    src: props.src,
    number: numberOfPizza,
  };
  props.onClickToCart(item);
  setNumberOfPizza(1)
}


  return (
    <div className="product-card" id={props.id}>
      <div className="product-img">
        <img src={props.src} alt={props.alt} />
        <small>{props.itemWeigth[selectedSize]} г</small>
      </div>

      <div className="product-description">
        <div className="product-name">
          <h2 className="product-title">{props.cardTitle}</h2>
          <p className="product-ingredient">{props.ingredient}</p>
        </div>

        <TabSize
          selectedSize={selectedSize}
          selectSize={(tab) => setSelectedSize(tab)}
        />
        <div className="price-wrapper">
          <Counter
            numberOfPizza={numberOfPizza}
            minusNumber={() => {           
              if (numberOfPizza !== 1) {
                return setNumberOfPizza((num) => num - 1);
              }
            }}
             addNumber={() => setNumberOfPizza((num) => num +1)}
          />

          <div className="price">
            
            {props.price[selectedSize]}
            <span> грн</span>
          </div>
        </div>
        <button onClick={AddPizza} className="add-btn">
          В кошик
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

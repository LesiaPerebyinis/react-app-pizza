import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import CartTableHeader from "../components/CartTableHeader";
import {
  deleteFromCart,
  addNumberInCart,
  deductNumberInCart,
} from "../redux/reducers/cartSlice";


function Cart() {
  
  const { items, totalPrice, totalCount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(items);
  return (
    
      <main>
        <div className="container">
          {items.length > 0 && (
            <>
              <h2 className="main-title">Кошик</h2>
              <CartTableHeader
                name="Найменування"
                number="Кількість"
                price="Вартість"
              />
              {items.map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    cardTitle={item.cardTitle}
                    price={item.price}
                    itemWeigth={item.itemWeigth}
                    src={item.src}
                    alt={item.alt}
                    number={item.number}
                    amount={item.amount}
                    addNum={() => dispatch(addNumberInCart(item.id))}
                    deductNum={() => dispatch(deductNumberInCart(item.id))}
                    onClick={() => dispatch(deleteFromCart(item.id))}
                  />
                );
              })}
              <CartTableHeader
                name="Всього"
                number={totalCount}
                price={totalPrice}
                num="шт"
                sum="грн"
              />
            </>
          )}
          {items.length === 0 && (
            <h2 className="main-title">Кошик порожній!!!</h2>
          )}
        </div>
      </main>
    
  );
}

export default Cart;

import { Link, NavLink} from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";
import { useSelector } from "react-redux";


function Header() {
  const {  totalPrice, totalCount } = useSelector((state) => state.cart);
  const [showModal, setShowModal] = useState(false);
  return (
    <header>
      <div className="container">
        <nav className="nav-row">
          <div className="nav-list">
            <img className="logo" src="./../img/logo2.png" alt="logo-pizza" />
            <NavLink className="nav-link" to="/">
              Головна
            </NavLink>
            <NavLink className="nav-link" to="/sale">
              Акції
            </NavLink>
          </div>
          {totalCount > 0 ? (
            <Link to="/cart" className="nav-cart">
              <button className="cart-btn">
                <div className="nav-cart__cost">{totalPrice} грн</div>
                <i className="fa-solid fa-cart-shopping"></i>
                <sup className="nav-cart__number">{totalCount} </sup>
              </button>
            </Link>
          ) : (
            <div className="nav-cart">
              <button onClick={() => setShowModal(true)} className="cart-btn">
                <div className="nav-cart__cost">{totalPrice} грн</div>
                <i className="fa-solid fa-cart-shopping"></i>
                <sup className="nav-cart__number">{totalCount} </sup>
              </button>
            </div>

            // <button onClick={() => setShowModal(true)}>показати</button>
          )}
        </nav>
      </div>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <span>
          <i className="fa-solid fa-circle-exclamation"></i>
        </span>

        <h2 className="modal-title">Кoшик порожній!</h2>
        <p>Щоб зробити замовлення необхідно вибрати піцу, що вам до вподоби</p>
      </Modal>
    </header>
  );
}

export default Header;

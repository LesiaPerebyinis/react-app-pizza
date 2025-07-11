import {  NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-nav">
          <img className="logo" src="./../img/logo2.png" alt="logo-pizza" />
          <NavLink className="footer-link" to="/">
            Головна
          </NavLink>
          <NavLink className="footer-link" to="/sale">
            Акції
          </NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

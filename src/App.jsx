import { Routes, Route } from "react-router-dom";

import Home from './pages/Home.jsx';
import Sale from "./pages/Sale.jsx";
import Cart from "./pages/Cart.jsx";
import Layout from "./components/Layout.jsx";
// import { useSelector } from "react-redux";



function App() {

  
  return (
   
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sale" element={<Sale />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>  
    </div>
  )
}

export default App;

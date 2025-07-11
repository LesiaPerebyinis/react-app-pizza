import { useState } from "react";
import productData from "./../data/productData.js";
import ProductCard from "./ProductCard.jsx";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducers/cartSlice.js";
import SearchInput from "./SearchInput.jsx";


function ProductList() {
  const [searchText, setSearchText] = useState("");
  const keys = ['ingredient', 'cardTitle'];
  const dispatch = useDispatch();

  return (
    <section className="section-product">
      <div className="container">
        <SearchInput onChangeValue={(e) => setSearchText(e.target.value)} />
        <div className="product-wrapper">
          {productData
            .filter((product) =>
              keys.some((key) =>
                product[key].toLowerCase().includes(searchText)
              )
            )
            .map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onClickToCart={(product) => dispatch(addToCart(product))}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;

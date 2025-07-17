import { useState } from "react";
import ProductCard from "./ProductCard";
import Header from "./Header";
import products from "../mock/mockProducts";

const ProductList = () => {
  const [cartItems, setCartItems] = useState([]);

  const updateUnit = (productId, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, unit: Math.max(1, item.unit + delta) }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const addToCart = (product) => {
    console.log("Adding product to cart:", product);
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.id === product.id
      );

      if (existingIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingIndex] = {
          ...updatedItems[existingIndex],
          unit: updatedItems[existingIndex].unit + 1,
        };
        return updatedItems;
      }

      return [...prevItems, { ...product, unit: 1 }];
    });
  };

  return (
    <>
      <Header
        cartItems={cartItems}
        updateUnit={updateUnit}
        removeFromCart={removeFromCart}
      />
      <div className="store-title">
        {" "}
        <h2>Fingertips </h2>
        <h2> Store</h2>
      </div>

      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} onAddToCart={addToCart} />
        ))}
      </div>
    </>
  );
};

export default ProductList;

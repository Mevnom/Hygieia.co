import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa"; 
import Cart from "./Cart";
import "./ProductCatalogue.css";

const products = {
  accessories: [
    { id: 1, name: "Leather Belt", price: 49.99, image: "belt.jpg" },
    { id: 2, name: "Sunglasses", price: 79.99, image: "sunglasses.jpg" },
    { id: 3, name: "Wrist Watch", price: 129.99, image: "watch.jpg" },
  ],
  smartWear: [
    { id: 4, name: "Formal Shirt", price: 123.49, image: "shirt.jpg" },
    { id: 5, name: "Smart Blazer", price: 199.99, image: "blazer.jpg" },
    { id: 6, name: "Casual Polo", price: 59.99, image: "polo.jpg" },
  ],
  footWear: [
    { id: 7, name: "Sneakers", price: 89.99, image: "sneakers.jpg" },
    { id: 8, name: "Loafers", price: 99.99, image: "loafers.jpg" },
    { id: 9, name: "Formal Shoes", price: 149.99, image: "shoes.jpg" },
  ],
};

const ProductCatalogue = () => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(null);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setNotification(`${product.name} added to cart!`);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="catalogue-container">
      <h1 className="catalogue-heading">Product Catalogue</h1>
      {notification && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="notification">
          <FaCheckCircle /> {notification}
        </motion.div>
      )}
      <div className="catalogue-grid">
        {Object.entries(products).map(([category, items]) => (
          <div key={category} className="category-section">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="category-heading">
              {category.toUpperCase()}
            </motion.h2>
            <div className="product-grid">
              {items.map((product) => (
                <motion.div 
                  key={product.id} 
                  className="product-card"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  <img src={product.image} alt={product.name} className="product-image" />
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                  <button onClick={() => addToCart(product)} className="add-to-cart-btn">
                    Add to Cart
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Cart cart={cart} />
    </div>
  );
};

export default ProductCatalogue;

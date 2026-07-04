import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import TrendingProducts from "./components/TrendingProducts";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Brands from "./components/Brands";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CartDrawer from "./components/funComponents/CartDrawer";
import ProductModal from "./components/funComponents/ProductModal";
import SearchOverlay from "./components/funComponents/SearchOverlay";

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const addToCart = (product, qty = 1) => {
    setCart(prev => {
      const ex = prev.find(i => i.id === product.id);
      if (ex) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + qty } : i);
      return [...prev, { ...product, qty }];
    });
  };
  const increase = id => setCart(prev => prev.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i));
  const decrease = id => setCart(prev => {
    const item = prev.find(i => i.id === id);
    if (item.qty <= 1) return prev.filter(i => i.id !== id);
    return prev.map(i => i.id === id ? { ...i, qty: i.qty - 1 } : i);
  });
  const remove = id => setCart(prev => prev.filter(i => i.id !== id));

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} onSearchOpen={() => setSearchOpen(true)} />
      <Hero onShopClick={() => document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" })}
      onView={setSelectedProduct} />
      <Categories />
      <FeaturedProducts onAddToCart={addToCart} onView={setSelectedProduct} />
      <TrendingProducts onAddToCart={addToCart} onView={setSelectedProduct} />
      <WhyUs />
      <Testimonials />
      <Brands />
      <Newsletter />
      <Contact />
      <Footer />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} cart={cart} onIncrease={increase} onDecrease={decrease} onRemove={remove} />
      <AnimatePresence>
        {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onAddToCart={addToCart} />}
      </AnimatePresence>
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} onProductClick={setSelectedProduct} />
    </div>
  );
}

export default App

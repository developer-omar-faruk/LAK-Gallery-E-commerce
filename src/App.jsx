import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FiShoppingCart, FiSearch, FiMenu, FiX, FiStar, FiHeart,
  FiTruck, FiShield, FiAward, FiHeadphones, FiArrowRight,
  FiPlus, FiMinus, FiTrash2, FiMail, FiPhone, FiMapPin,
  FiInstagram, FiTwitter, FiFacebook, FiLinkedin,
  FiChevronLeft, FiChevronRight, FiSend, FiPackage, FiEye, FiZap,
} from "react-icons/fi";

// ─── DATA ────────────────────────────────────────────────────────────────────
const navLinks = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "Shop", href: "#shop" },
  { id: 3, label: "Categories", href: "#categories" },
  { id: 4, label: "Featured", href: "#featured" },
  { id: 5, label: "Reviews", href: "#reviews" },
  { id: 6, label: "Contact", href: "#contact" },
];
const categories = [
  { id: 1, name: "Electronics", count: 124, emoji: "💻", color: "from-blue-500/20 to-indigo-500/20", border: "border-blue-200" },
  { id: 2, name: "Fashion", count: 89, emoji: "👗", color: "from-pink-500/20 to-rose-500/20", border: "border-pink-200" },
  { id: 3, name: "Shoes", count: 56, emoji: "👟", color: "from-amber-500/20 to-orange-500/20", border: "border-amber-200" },
  { id: 4, name: "Watches", count: 43, emoji: "⌚", color: "from-slate-500/20 to-gray-500/20", border: "border-slate-200" },
  { id: 5, name: "Accessories", count: 77, emoji: "👜", color: "from-violet-500/20 to-purple-500/20", border: "border-violet-200" },
  { id: 6, name: "Furniture", count: 38, emoji: "🪑", color: "from-emerald-500/20 to-teal-500/20", border: "border-emerald-200" },
];
const products = [
  { id: 1, name: "Arc Pro Laptop", category: "Electronics", price: 1299, originalPrice: 1599, discount: 19, rating: 4.8, reviews: 312, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80", description: "Ultra-thin 14-inch laptop with M3 chip, 16GB RAM, and 512GB SSD.", features: ["M3 Chip", "16GB RAM", "512GB SSD", "Retina Display", "18hr Battery"], tag: "Best Seller" },
  { id: 2, name: "Meridian Jacket", category: "Fashion", price: 189, originalPrice: 249, discount: 24, rating: 4.6, reviews: 198, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80", description: "Premium wool-blend jacket with a tailored silhouette. Timeless design meets modern comfort.", features: ["Wool Blend", "Tailored Fit", "Dry Clean", "3 Colors", "S–XXL"], tag: "New" },
  { id: 3, name: "Apex Runner X", category: "Shoes", price: 149, originalPrice: 179, discount: 17, rating: 4.9, reviews: 541, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80", description: "High-performance running shoe with responsive foam cushioning and breathable mesh upper.", features: ["Foam Cushion", "Mesh Upper", "Carbon Plate", "Lightweight", "All-terrain"], tag: "Top Rated" },
  { id: 4, name: "Chronos S1 Watch", category: "Watches", price: 499, originalPrice: 649, discount: 23, rating: 4.7, reviews: 276, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80", description: "Swiss-inspired automatic watch with sapphire crystal glass and stainless steel bracelet.", features: ["Sapphire Crystal", "Auto Movement", "100m Water Resistant", "42mm Case", "Stainless Steel"], tag: "Limited" },
  { id: 5, name: "Nova Wireless Buds", category: "Electronics", price: 129, originalPrice: 179, discount: 28, rating: 4.5, reviews: 423, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80", description: "True wireless earbuds with active noise cancellation and 30-hour total battery life.", features: ["ANC", "30hr Battery", "IPX5", "Spatial Audio", "Touch Controls"], tag: "Sale" },
  { id: 6, name: "Luma Tote Bag", category: "Accessories", price: 89, originalPrice: 119, discount: 25, rating: 4.4, reviews: 167, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80", description: "Handcrafted full-grain leather tote with interior organizer pockets and magnetic closure.", features: ["Full-grain Leather", "Magnetic Closure", "Interior Pockets", "Shoulder Strap", "2 Colors"], tag: "New" },
  { id: 7, name: "Drift Lounge Chair", category: "Furniture", price: 649, originalPrice: 849, discount: 24, rating: 4.8, reviews: 89, image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80", description: "Scandinavian-inspired lounge chair with solid oak legs and premium bouclé upholstery.", features: ["Solid Oak Legs", "Bouclé Upholstery", "360° Swivel", "Ergonomic", "Assembly Included"], tag: "Best Seller" },
  { id: 8, name: "Pixel Smart Watch", category: "Watches", price: 299, originalPrice: 349, discount: 14, rating: 4.6, reviews: 334, image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&q=80", description: "Advanced smartwatch with health monitoring, GPS, and 7-day battery life in a sleek design.", features: ["Health Monitor", "Built-in GPS", "7-day Battery", "45mm AMOLED", "Always-on Display"], tag: "Hot" },
];
const trendingProducts = [
  { id: 101, name: "Studio Headphones", category: "Electronics", price: 349, originalPrice: 429, rating: 4.9, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80", tag: "Trending #1" },
  { id: 102, name: "Slim Leather Wallet", category: "Accessories", price: 65, originalPrice: 89, rating: 4.7, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80", tag: "Trending #2" },
  { id: 103, name: "Urban Sneakers", category: "Shoes", price: 119, originalPrice: 149, rating: 4.8, image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80", tag: "Trending #3" },
  { id: 104, name: "Marble Desk Lamp", category: "Furniture", price: 129, originalPrice: 169, rating: 4.6, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80", tag: "Trending #4" },
  { id: 105, name: "Compact Camera", category: "Electronics", price: 799, originalPrice: 999, rating: 4.9, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80", tag: "Trending #5" },
];
const testimonials = [
  { id: 1, name: "Sophie Laurent", role: "Interior Designer", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80", rating: 5, text: "Absolutely love the quality. The Drift Lounge Chair exceeded every expectation — the craftsmanship is exceptional and delivery was flawless." },
  { id: 2, name: "Marcus Chen", role: "Tech Entrepreneur", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80", rating: 5, text: "The Arc Pro Laptop is a game-changer. Unbelievable performance and the customer service team was incredibly helpful throughout." },
  { id: 3, name: "Amara Osei", role: "Fitness Coach", avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80", rating: 5, text: "Apex Runner X changed my morning runs completely. Lightweight, responsive, and they look amazing. Already ordered a second pair!" },
  { id: 4, name: "Elena Vasquez", role: "Fashion Stylist", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80", rating: 4, text: "The Meridian Jacket is timeless. The quality of the wool blend and the tailoring is on par with luxury brands at a fraction of the price." },
  { id: 5, name: "James Whitmore", role: "Photographer", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80", rating: 5, text: "Fast shipping, beautiful packaging, and the product quality is phenomenal. This is my go-to store for premium goods." },
];
const brands = ["Apple", "Nike", "Sony", "Samsung", "Adidas", "Dyson", "Bose", "Leica", "Bang & Olufsen", "Hermès"];
const features = [
  { id: 1, Icon: FiTruck, title: "Free Delivery", description: "On all orders above $99. Fast and reliable worldwide shipping.", color: "text-blue-500", bg: "bg-blue-50" },
  { id: 2, Icon: FiShield, title: "Secure Payment", description: "256-bit SSL encryption. Your payment data is always safe.", color: "text-emerald-500", bg: "bg-emerald-50" },
  { id: 3, Icon: FiAward, title: "Premium Quality", description: "Curated selection of the world's finest products.", color: "text-amber-500", bg: "bg-amber-50" },
  { id: 4, Icon: FiHeadphones, title: "24/7 Support", description: "Round-the-clock expert customer service at your fingertips.", color: "text-violet-500", bg: "bg-violet-50" },
];
const footerLinks = {
  company: ["About Us", "Careers", "Press", "Blog"],
  support: ["Help Center", "Returns", "Order Status", "Warranty"],
  categories: ["Electronics", "Fashion", "Shoes", "Furniture"],
};

// ─── UTILS ────────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(s => (
        <FiStar key={s} size={12} className={s <= Math.round(rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"} />
      ))}
    </div>
  );
}

function Section({ id, children, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id={id} ref={ref} className={`py-20 lg:py-28 ${className}`}>
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="max-w-7xl mx-auto px-4 sm:px-6">
        {children}
      </motion.div>
    </section>
  );
}

function SectionLabel({ children }) {
  return <motion.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">{children}</motion.span>;
}
function SectionTitle({ children, dark }) {
  return <motion.h2 variants={fadeUp} className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${dark ? "text-white" : "text-gray-900"}`}>{children}</motion.h2>;
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar({ cartCount, onCartOpen, onSearchOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <motion.nav initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 lg:h-20">
        <motion.a href="#home" whileHover={{ scale: 1.03 }} className="text-xl font-bold tracking-tight">
          <span className="text-gray-900">LAK</span><span className="text-gray-400 font-light ml-1">Gallery</span>
        </motion.a>
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(l => (
            <motion.a key={l.id} href={l.href} whileHover={{ y: -1 }}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors relative group">
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gray-900 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={onSearchOpen} className="p-2 text-gray-600 hover:text-gray-900"><FiSearch size={18} /></motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={onCartOpen} className="relative p-2 text-gray-600 hover:text-gray-900">
            <FiShoppingCart size={18} />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span key="b" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gray-900 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
          <motion.button whileTap={{ scale: 0.9 }} onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-gray-600">
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }} className="lg:hidden overflow-hidden bg-white border-t border-gray-100">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map(l => <a key={l.id} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm font-medium text-gray-700 hover:text-gray-900 py-1">{l.label}</a>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero({ onShopClick }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#f5f4f0]">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(#d1cfc8 1px,transparent 1px),linear-gradient(90deg,#d1cfc8 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 lg:pt-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
              <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gray-500 uppercase border border-gray-300 px-4 py-2 rounded-full">
                <FiZap size={12} className="text-amber-500" /> New Collection 2026
              </motion.span>
              <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight">
                Curated for<br /><span className="text-gray-400 font-light italic">the discerning</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-base text-gray-500 max-w-md leading-relaxed">
                A gallery of premium objects — from cutting-edge electronics to handcrafted furniture. Each piece selected for quality, design, and longevity.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
                <motion.button whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} onClick={onShopClick}
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3.5 rounded-full text-sm font-semibold shadow-lg hover:bg-gray-800 transition-colors">
                  Shop Collection <FiArrowRight size={15} />
                </motion.button>
                <motion.a href="#categories" whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-white text-gray-800 border border-gray-200 px-6 py-3.5 rounded-full text-sm font-semibold hover:border-gray-400 transition-colors">
                  Browse Categories
                </motion.a>
              </motion.div>
              <motion.div variants={fadeUp} className="flex items-center gap-6 pt-4">
                {[["8k+","Products"],["98%","Satisfaction"],["150+","Brands"]].map(([n,l]) => (
                  <div key={l}><p className="text-xl font-bold text-gray-900">{n}</p><p className="text-xs text-gray-500">{l}</p></div>
                ))}
              </motion.div>
            </motion.div>
          </div>
          <div className="relative h-[480px] lg:h-[560px]">
            {[
              { img: products[0].image, name: products[0].name, price: `$${products[0].price}`, top: "0%", left: "5%", delay: 0 },
              { img: products[2].image, name: products[2].name, price: `$${products[2].price}`, top: "15%", left: "52%", delay: 0.15 },
              { img: products[6].image, name: products[6].name, price: `$${products[6].price}`, top: "54%", left: "20%", delay: 0.3 },
            ].map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + card.delay, ease: [0.22,1,0.36,1] }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="absolute bg-white rounded-2xl shadow-xl overflow-hidden w-44 sm:w-52 cursor-pointer"
                style={{ top: card.top, left: card.left }}>
                <div className="aspect-square overflow-hidden">
                  <img src={card.img} alt={card.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-3">
                  <p className="text-xs font-semibold text-gray-800 truncate">{card.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{card.price}</p>
                </div>
              </motion.div>
            ))}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CATEGORIES ───────────────────────────────────────────────────────────────
function Categories() {
  return (
    <Section id="categories" className="bg-white">
      <div className="mb-12"><SectionLabel>Browse by</SectionLabel><SectionTitle>Categories</SectionTitle></div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat, i) => (
          <motion.div key={cat.id} variants={fadeUp} custom={i} whileHover={{ y: -6, scale: 1.03 }}
            className={`flex flex-col items-center gap-3 p-6 rounded-2xl border ${cat.border} bg-gradient-to-br ${cat.color} cursor-pointer transition-shadow hover:shadow-md`}>
            <span className="text-3xl">{cat.emoji}</span>
            <span className="text-sm font-semibold text-gray-800">{cat.name}</span>
            <span className="text-xs text-gray-500">{cat.count} items</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// ─── PRODUCT CARD ─────────────────────────────────────────────────────────────
function ProductCard({ product, onAddToCart, onView, i = 0 }) {
  const [wished, setWished] = useState(false);
  return (
    <motion.div variants={fadeUp} custom={i} whileHover={{ y: -6 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="relative overflow-hidden aspect-square bg-gray-50 cursor-pointer" onClick={() => onView(product)}>
        <motion.img src={product.image} alt={product.name} className="w-full h-full object-cover" whileHover={{ scale: 1.08 }} transition={{ duration: 0.5 }} />
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tag && <span className="bg-gray-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{product.tag}</span>}
          {product.discount > 0 && <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">-{product.discount}%</span>}
        </div>
        <motion.button whileTap={{ scale: 0.85 }} onClick={e => { e.stopPropagation(); setWished(!wished); }}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
          <FiHeart size={14} className={wished ? "fill-red-500 text-red-500" : "text-gray-500"} />
        </motion.button>
        <div className="absolute inset-x-0 bottom-0 flex justify-center pb-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <motion.button whileTap={{ scale: 0.95 }} onClick={e => { e.stopPropagation(); onView(product); }}
            className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow">
            <FiEye size={12} /> Quick View
          </motion.button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider mb-1">{product.category}</p>
        <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-snug">{product.name}</h3>
        <div className="flex items-center gap-2 mb-3"><Stars rating={product.rating} /><span className="text-xs text-gray-400">({product.reviews || "—"})</span></div>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-bold text-gray-900">${product.price}</span>
            {product.originalPrice > product.price && <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>}
          </div>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => onAddToCart(product)}
            className="inline-flex items-center gap-1.5 bg-gray-900 text-white text-xs font-semibold px-3 py-2 rounded-full hover:bg-gray-700 transition-colors">
            <FiPlus size={11} /> Add
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── FEATURED PRODUCTS ────────────────────────────────────────────────────────
function FeaturedProducts({ onAddToCart, onView }) {
  return (
    <Section id="featured" className="bg-[#f5f4f0]">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
        <div><SectionLabel>Handpicked</SectionLabel><SectionTitle>Featured Products</SectionTitle></div>
        <motion.a variants={fadeUp} href="#shop" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
          View all <FiArrowRight size={14} />
        </motion.a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((p, i) => <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} onView={onView} i={i} />)}
      </div>
    </Section>
  );
}

// ─── TRENDING ─────────────────────────────────────────────────────────────────
function TrendingProducts({ onAddToCart, onView }) {
  const scrollRef = useRef(null);
  const scroll = dir => scrollRef.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  return (
    <Section id="shop" className="bg-white overflow-hidden">
      <div className="flex items-end justify-between mb-12">
        <div><SectionLabel>Hot right now</SectionLabel><SectionTitle>Trending</SectionTitle></div>
        <div className="flex gap-2">
          {[FiChevronLeft, FiChevronRight].map((Icon, i) => (
            <motion.button key={i} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => scroll(i === 0 ? -1 : 1)}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors">
              <Icon size={16} />
            </motion.button>
          ))}
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-2" style={{ scrollSnapType: "x mandatory", msOverflowStyle: "none", scrollbarWidth: "none" }}>
        {trendingProducts.map((p, i) => (
          <div key={p.id} style={{ scrollSnapAlign: "start", minWidth: "260px" }} className="flex-shrink-0">
            <ProductCard product={p} onAddToCart={onAddToCart} onView={onView} i={i} />
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── PRODUCT MODAL ────────────────────────────────────────────────────────────
function ProductModal({ product, onClose, onAddToCart }) {
  const [qty, setQty] = useState(1);
  if (!product) return null;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }} onClick={e => e.stopPropagation()}
        className="bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="grid sm:grid-cols-2">
          <div className="aspect-square sm:aspect-auto relative overflow-hidden bg-gray-50">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow sm:hidden"><FiX size={16} /></button>
          </div>
          <div className="p-7 flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">{product.category}</span>
                <h2 className="text-xl font-bold text-gray-900 mt-0.5">{product.name}</h2>
              </div>
              <button onClick={onClose} className="hidden sm:block p-1.5 text-gray-400 hover:text-gray-700"><FiX size={18} /></button>
            </div>
            <div className="flex items-center gap-2 mb-4"><Stars rating={product.rating} /><span className="text-xs text-gray-500">({product.reviews} reviews)</span></div>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">{product.description}</p>
            {product.features && (
              <div className="flex flex-wrap gap-1.5 mb-6">
                {product.features.map(f => <span key={f} className="text-[11px] bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full font-medium">{f}</span>)}
              </div>
            )}
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-2xl font-bold text-gray-900">${product.price}</span>
              {product.originalPrice > product.price && <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>}
              {product.discount > 0 && <span className="text-xs bg-red-100 text-red-600 font-bold px-2 py-0.5 rounded-full">-{product.discount}%</span>}
            </div>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-sm text-gray-600 font-medium">Qty:</span>
              <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                <button onClick={() => setQty(Math.max(1, qty-1))} className="px-3 py-2 text-gray-600 hover:bg-gray-50"><FiMinus size={12} /></button>
                <span className="px-3 text-sm font-semibold text-gray-900 min-w-[32px] text-center">{qty}</span>
                <button onClick={() => setQty(qty+1)} className="px-3 py-2 text-gray-600 hover:bg-gray-50"><FiPlus size={12} /></button>
              </div>
            </div>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} onClick={() => { onAddToCart(product, qty); onClose(); }}
              className="w-full bg-gray-900 text-white py-3.5 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors mt-auto">
              Add to Cart — ${(product.price * qty).toFixed(2)}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── CART DRAWER ─────────────────────────────────────────────────────────────
function CartDrawer({ isOpen, onClose, cart, onIncrease, onDecrease, onRemove }) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />
          <motion.aside initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 300, damping: 35 }}
            className="fixed top-0 right-0 h-full w-full max-w-md z-50 bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-gray-900 text-lg">Cart</h2>
                {count > 0 && <span className="bg-gray-900 text-white text-xs font-bold px-2 py-0.5 rounded-full">{count}</span>}
              </div>
              <motion.button whileTap={{ scale: 0.9 }} onClick={onClose} className="p-2 text-gray-500 hover:text-gray-900"><FiX size={20} /></motion.button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <FiShoppingCart size={40} className="text-gray-200" />
                  <p className="text-gray-400 text-sm">Your cart is empty</p>
                  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={onClose}
                    className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold">Start Shopping</motion.button>
                </div>
              ) : (
                <AnimatePresence>
                  {cart.map(item => (
                    <motion.div key={item.id} layout initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="flex gap-4 items-center">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 truncate">{item.name}</p>
                        <p className="text-xs text-gray-400 mt-0.5">${item.price}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button onClick={() => onDecrease(item.id)} className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200"><FiMinus size={10} /></button>
                          <span className="text-sm font-bold text-gray-900 w-5 text-center">{item.qty}</span>
                          <button onClick={() => onIncrease(item.id)} className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200"><FiPlus size={10} /></button>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-sm font-bold text-gray-900">${(item.price * item.qty).toFixed(2)}</p>
                        <button onClick={() => onRemove(item.id)} className="mt-2 text-gray-300 hover:text-red-500 transition-colors"><FiTrash2 size={14} /></button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>
            {cart.length > 0 && (
              <div className="px-6 py-5 border-t border-gray-100 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Subtotal ({count} items)</span>
                  <span className="font-semibold text-gray-900">${total.toFixed(2)}</span>
                </div>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="w-full bg-gray-900 text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors">
                  <FiPackage size={16} /> Checkout — ${total.toFixed(2)}
                </motion.button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── WHY US ───────────────────────────────────────────────────────────────────
function WhyUs() {
  return (
    <Section className="bg-gray-900">
      <div className="text-center mb-12">
        <SectionLabel><span className="text-gray-600">Our promise</span></SectionLabel>
        <SectionTitle dark>Why Choose Us</SectionTitle>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((f, i) => (
          <motion.div key={f.id} variants={fadeUp} custom={i} whileHover={{ y: -6, scale: 1.03 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
            <div className={`w-12 h-12 rounded-xl ${f.bg} mx-auto mb-4 flex items-center justify-center`}>
              <f.Icon size={22} className={f.color} />
            </div>
            <h3 className="font-semibold text-white mb-2 text-sm">{f.title}</h3>
            <p className="text-xs text-gray-400 leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
function Testimonials() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <Section id="reviews" className="bg-[#f5f4f0]">
      <div className="text-center mb-12"><SectionLabel>What customers say</SectionLabel><SectionTitle>Reviews</SectionTitle></div>
      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.slice(0, 3).map((t, i) => (
          <motion.div key={t.id} variants={fadeUp} custom={i} whileHover={{ y: -6 }}
            className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
            <Stars rating={t.rating} />
            <p className="text-sm text-gray-600 leading-relaxed mt-3 mb-5">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
              <div><p className="text-sm font-semibold text-gray-900">{t.name}</p><p className="text-xs text-gray-400">{t.role}</p></div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => setActive(i)}
            className={`transition-all duration-300 rounded-full ${i === active ? "w-6 h-2 bg-gray-900" : "w-2 h-2 bg-gray-300"}`} />
        ))}
      </div>
    </Section>
  );
}

// ─── BRANDS ───────────────────────────────────────────────────────────────────
function Brands() {
  const doubled = [...brands, ...brands];
  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <p className="text-center text-xs text-gray-400 uppercase tracking-widest font-medium mb-8">Trusted brand partners</p>
      <div className="relative overflow-hidden">
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="flex gap-12 whitespace-nowrap">
          {doubled.map((b, i) => <span key={i} className="text-base font-semibold text-gray-300 hover:text-gray-600 transition-colors cursor-default shrink-0">{b}</span>)}
        </motion.div>
      </div>
    </section>
  );
}

// ─── NEWSLETTER ───────────────────────────────────────────────────────────────
function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <Section className="bg-gray-900">
      <div className="max-w-2xl mx-auto text-center">
        <SectionLabel><span className="text-gray-600">Stay in the loop</span></SectionLabel>
        <SectionTitle dark>Get Early Access</SectionTitle>
        <motion.p variants={fadeUp} className="text-gray-400 text-sm mb-8 mt-3">Be first to know about new arrivals, exclusive offers, and curated drops.</motion.p>
        <motion.form variants={fadeUp} onSubmit={e => { e.preventDefault(); if(email){setSubmitted(true);setEmail("");} }}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com"
            className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-white/50 transition-colors" />
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit"
            className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
            {submitted ? "✓ Subscribed!" : <><FiSend size={14} /> Subscribe</>}
          </motion.button>
        </motion.form>
      </div>
    </Section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <Section id="contact" className="bg-white">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <SectionLabel>Get in touch</SectionLabel><SectionTitle>Contact</SectionTitle>
          <motion.p variants={fadeUp} className="text-gray-500 text-sm mt-4 mb-8 leading-relaxed max-w-sm">
            Have a question about a product, your order, or anything else? Our team is happy to help.
          </motion.p>
          <motion.div variants={stagger} className="space-y-4">
            {[[FiMapPin,"14 Rue du Faubourg, Paris, France"],[FiMail,"hello@lakgallery.com"],[FiPhone,"+33 1 23 45 67 89"]].map(([Icon,text],i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0"><Icon size={15} className="text-gray-500" /></div>
                <span>{text}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="flex gap-3 mt-8">
            {[FiInstagram,FiTwitter,FiFacebook,FiLinkedin].map((Icon,i) => (
              <motion.a key={i} href="#" whileHover={{ scale: 1.15, y: -3 }}
                className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                <Icon size={14} />
              </motion.a>
            ))}
          </motion.div>
        </div>
        <motion.form variants={fadeUp} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            {["First Name","Last Name"].map(p => (
              <input key={p} placeholder={p} className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-100 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-300 transition-colors" />
            ))}
          </div>
          <input placeholder="Email address" className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-100 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-300 transition-colors" />
          <textarea placeholder="Your message…" rows={4} className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-100 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-300 transition-colors resize-none" />
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} type="submit"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors">
            Send Message <FiArrowRight size={14} />
          </motion.button>
        </motion.form>
      </div>
    </Section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#f5f4f0] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="col-span-2">
            <a href="#home" className="text-xl font-bold text-gray-900">LAK <span className="font-light text-gray-400">Gallery</span></a>
            <p className="text-xs text-gray-500 mt-3 max-w-xs leading-relaxed">A curated marketplace of premium goods — thoughtfully designed, rigorously tested, built to last.</p>
            <div className="flex gap-2 mt-5">
              {[FiInstagram,FiTwitter,FiFacebook,FiLinkedin].map((Icon,i) => (
                <a key={i} href="#" className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-400 transition-colors"><Icon size={13} /></a>
              ))}
            </div>
          </div>
          {[
            { title: "Company", links: footerLinks.company },
            { title: "Support", links: footerLinks.support },
            { title: "Shop", links: footerLinks.categories },
          ].map(col => (
            <div key={col.title}>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map(l => <li key={l}><a href="#" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">© 2026 LAK Gallery. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-gray-400">
            {["Privacy Policy","Terms","Cookies"].map(l => <a key={l} href="#" className="hover:text-gray-700 transition-colors">{l}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── SEARCH ───────────────────────────────────────────────────────────────────
function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const results = query.length > 1 ? products.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) : [];
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-start justify-center pt-24 px-4">
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }} onClick={e => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
              <FiSearch size={18} className="text-gray-400" />
              <input autoFocus value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products…"
                className="flex-1 text-sm text-gray-900 placeholder-gray-400 outline-none" />
              <button onClick={onClose}><FiX size={18} className="text-gray-400 hover:text-gray-700" /></button>
            </div>
            {results.length > 0 && (
              <div className="max-h-72 overflow-y-auto divide-y divide-gray-50">
                {results.map(p => (
                  <div key={p.id} onClick={onClose} className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
                    <img src={p.image} alt={p.name} className="w-10 h-10 rounded-lg object-cover" />
                    <div><p className="text-sm font-medium text-gray-900">{p.name}</p><p className="text-xs text-gray-400">{p.category} · ${p.price}</p></div>
                  </div>
                ))}
              </div>
            )}
            {query.length > 1 && results.length === 0 && <p className="text-sm text-gray-400 text-center py-8">No products found for "{query}"</p>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
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
      <Hero onShopClick={() => document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" })} />
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
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
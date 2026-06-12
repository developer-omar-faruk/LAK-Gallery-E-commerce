import { products } from "../data";
import { fadeUp } from "./utilits/UTILS";
import { Section, SectionLabel, SectionTitle, Stars } from "./utilits/UTILS";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiHeart, FiArrowRight, FiPlus, FiEye,
} from "react-icons/fi";


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

export default FeaturedProducts
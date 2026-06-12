import { Stars } from "../utilits/UTILS";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiX, FiPlus, FiMinus } from "react-icons/fi";


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

export default ProductModal

import { products } from "../../data";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiX } from "react-icons/fi";


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

export default SearchOverlay

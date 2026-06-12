import { navLinks } from "../data.js";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiShoppingCart, FiSearch,
  FiMenu, FiX,
} from "react-icons/fi";

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

export default Navbar

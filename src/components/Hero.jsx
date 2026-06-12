import { products } from "../data";

import { motion } from "framer-motion";
import { FiArrowRight, FiZap } from "react-icons/fi";


// ─── UTILS ────────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };


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

export default Hero

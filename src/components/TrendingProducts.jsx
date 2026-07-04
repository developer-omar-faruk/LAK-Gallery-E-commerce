import { trendingProducts } from "../data";
import { Section, SectionLabel, SectionTitle } from "./utilits/UTILS";
import ProductCard from "./ProductCard";

import { useRef } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


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
          <div key={p.id} style={{ scrollSnapAlign: "start", minWidth: "260px" }} className="md:flex-shrink-0">
            <ProductCard product={p} onAddToCart={onAddToCart} onView={onView} i={i} />
          </div>
        ))}
      </div>
    </Section>
  );
}

export default TrendingProducts
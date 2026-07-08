import { products } from "../data";
import { fadeUp } from "./utilits/UTILS";
import { Section, SectionLabel, SectionTitle } from "./utilits/UTILS";
import ProductCard from "./ProductCard";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiHeart, FiArrowRight, FiPlus, FiEye,
} from "react-icons/fi";


// ─── FEATURED PRODUCTS ────────────────────────────────────────────────────────
function FeaturedProducts() {
  return (
    <Section id="featured" className="bg-[#f5f4f0]">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
        <div><SectionLabel>Handpicked</SectionLabel><SectionTitle>Featured Products</SectionTitle></div>
        <motion.a variants={fadeUp} href="#shop" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
          View all <FiArrowRight size={14} />
        </motion.a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((p, i) => <ProductCard key={p.id} product={p} i={i} />)}
      </div>
    </Section>
  );
}

export default FeaturedProducts
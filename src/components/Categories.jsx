import { categories } from "../data";
import { fadeUp } from "./utilits/UTILS";
import { SectionLabel, Section, SectionTitle } from "./utilits/UTILS";

import { motion } from "framer-motion";


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

export default Categories

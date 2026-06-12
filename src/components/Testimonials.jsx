import { testimonials } from "../data";
import {
  Section, SectionLabel, SectionTitle, Stars, fadeUp,
} from "./utilits/UTILS";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";


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

export default Testimonials

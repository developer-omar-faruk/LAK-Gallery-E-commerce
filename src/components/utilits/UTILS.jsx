import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiStar } from "react-icons/fi";


// ─── UTILS ────────────────────────────────────────────────────────────────────
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
};
export const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

export function Stars({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(s => (
        <FiStar key={s} size={12} className={s <= Math.round(rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"} />
      ))}
    </div>
  );
}

export function Section({ id, children, className = "" }) {
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

export function SectionLabel({ children }) {
  return <motion.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">{children}</motion.span>;
}
export function SectionTitle({ children, dark }) {
  return <motion.h2 variants={fadeUp} className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${dark ? "text-white" : "text-gray-900"}`}>{children}</motion.h2>;
}
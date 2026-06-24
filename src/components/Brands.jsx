import { motion } from "framer-motion";


const brands = ["Apple", "Nike", "Sony", "Samsung", "Adidas", "Dyson", "Bose", "Leica", "Hermès","payoneer","PayPal"];

function Brands() {
  const doubled = [...brands, ...brands];
  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <p className="text-center text-xs text-gray-400 uppercase tracking-widest font-medium mb-8">Trusted brand partners</p>
      <div className="relative overflow-hidden">
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="flex gap-12 whitespace-nowrap">
          {doubled.map((b, i) => <span key={i} className="text-base font-semibold text-gray-300 hover:text-gray-600 transition-colors cursor-default shrink-0">{b}</span>)}
        </motion.div>
      </div>
    </section>
  );
}

export default Brands
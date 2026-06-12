import { features } from "../data";
import { Section, SectionLabel, SectionTitle, fadeUp } from "./utilits/UTILS";

import { motion } from "framer-motion";


function WhyUs() {
  return (
    <Section className="bg-gray-900">
      <div className="text-center mb-12">
        <SectionLabel><span className="text-gray-600">Our promise</span></SectionLabel>
        <SectionTitle dark>Why Choose Us</SectionTitle>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((f, i) => (
          <motion.div key={f.id} variants={fadeUp} custom={i} whileHover={{ y: -6, scale: 1.03 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
            <div className={`w-12 h-12 rounded-xl ${f.bg} mx-auto mb-4 flex items-center justify-center`}>
              <f.Icon size={22} className={f.color} />
            </div>
            <h3 className="font-semibold text-white mb-2 text-sm">{f.title}</h3>
            <p className="text-xs text-gray-400 leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default WhyUs
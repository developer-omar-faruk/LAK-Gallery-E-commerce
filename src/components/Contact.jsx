import { Section, SectionLabel, SectionTitle, fadeUp, stagger} from "./utilits/UTILS";

import { motion } from "framer-motion";
import {
  FiArrowRight, FiMail, FiPhone, FiMapPin,
  FiInstagram, FiTwitter, FiFacebook, FiLinkedin,
} from "react-icons/fi";


function Contact() {
  return (
    <Section id="contact" className="bg-white">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <SectionLabel>Get in touch</SectionLabel><SectionTitle>Contact</SectionTitle>
          <motion.p variants={fadeUp} className="text-gray-500 text-sm mt-4 mb-8 leading-relaxed max-w-sm">
            Have a question about a product, your order, or anything else? Our team is happy to help.
          </motion.p>
          <motion.div variants={stagger} className="space-y-4">
            {[[FiMapPin,"3651 Gazipur, Faridganj, Chandpur"],[FiMail,"hello@lakgallery.com"],[FiPhone,"+880 1624471890"]].map(([Icon,text],i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0"><Icon size={15} className="text-gray-500" /></div>
                <span>{text}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="flex gap-3 mt-8">
            {[FiInstagram,FiTwitter,FiFacebook,FiLinkedin].map((Icon,i) => (
              <motion.a key={i} href="#" whileHover={{ scale: 1.15, y: -3 }}
                className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                <Icon size={14} />
              </motion.a>
            ))}
          </motion.div>
        </div>
        <motion.form variants={fadeUp} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            {["First Name","Last Name"].map(p => (
              <input key={p} placeholder={p} className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-100 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-300 transition-colors" />
            ))}
          </div>
          <input placeholder="Email address" className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-100 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-300 transition-colors" />
          <textarea placeholder="Your message…" rows={4} className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-100 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-300 transition-colors resize-none" />
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} type="submit"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors">
            Send Message <FiArrowRight size={14} />
          </motion.button>
        </motion.form>
      </div>
    </Section>
  );
}

export default Contact

import { Section, SectionLabel, SectionTitle, fadeUp } from "./utilits/UTILS";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";


function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <Section className="bg-gray-900">
      <div className="max-w-2xl mx-auto text-center">
        <SectionLabel><span className="text-gray-600">Stay in the loop</span></SectionLabel>
        <SectionTitle dark>Get Early Access</SectionTitle>
        <motion.p variants={fadeUp} className="text-gray-400 text-sm mb-8 mt-3">Be first to know about new arrivals, exclusive offers, and curated drops.</motion.p>
        <motion.form variants={fadeUp} onSubmit={e => { e.preventDefault(); if(email){setSubmitted(true);setEmail("");} }}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com"
            className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-white/50 transition-colors" />
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit"
            className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
            {submitted ? "✓ Subscribed!" : <><FiSend size={14} /> Subscribe</>}
          </motion.button>
        </motion.form>
      </div>
    </Section>
  );
}

export default Newsletter

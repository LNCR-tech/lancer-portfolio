import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import GlobeScene from '../three/GlobeScene'

export default function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <SectionHeading label="// ABOUT ME" title="WHO I AM" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-8">
        <motion.div initial={{ x: -60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="flex flex-col items-center gap-6">
          <div className="w-60 h-60 rounded-lg border-2 border-cyan-400 bg-navy-800 overflow-hidden">
            <GlobeScene />
          </div>
          <div className="space-y-2 text-sm font-mono text-text-secondary text-left">
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/> Open to Opportunities</div>
            <div>Jose Rizal Memorial State University</div>
            <div>BS Computer Engineering (Oct 2024 – Jun 2028)</div>
            <div>ICompE Student Edition – JRMSU Chapter</div>
          </div>
          <div className="flex gap-3 mt-4">
            <div className="bg-navy-800 border border-cyan-400/30 px-4 py-2 rounded font-mono text-xs text-cyan-400">3 Projects</div>
            <div className="bg-navy-800 border border-cyan-400/30 px-4 py-2 rounded font-mono text-xs text-cyan-400">7+ Certs</div>
            <div className="bg-navy-800 border border-cyan-400/30 px-4 py-2 rounded font-mono text-xs text-cyan-400">Since 2025</div>
          </div>
        </motion.div>

        <motion.div initial={{ x: 60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
          <div className="font-mono text-cyan-400 text-sm mb-2">// ABOUT ME</div>
          <h3 className="font-display text-3xl text-text-primary font-bold mb-4">WHO I AM</h3>
          <p className="text-text-secondary leading-relaxed">I am a Bachelor of Science in Computer Engineering student at Jose Rizal Memorial State University with a strong interest in software development, artificial intelligence, cybersecurity, automation, and digital innovation. I am currently building real-world software projects focused on school systems, attendance automation, academic scheduling, and AI-powered solutions. My work includes Aura App, a face recognition attendance system, and OptiPlan / EngiSync, an academic scheduling platform designed for engineering colleges. I have hands-on experience with software development, database design, AI concepts, computer hardware, networking, electronics, and technical troubleshooting. I also continue to improve my skills through certifications in AI development, cybersecurity, data entry, and product-focused AI solutions. My goal is to grow as a reliable software developer and technology professional who can build practical, secure, and scalable digital systems.</p>
        </motion.div>
      </div>
    </section>
  )
}

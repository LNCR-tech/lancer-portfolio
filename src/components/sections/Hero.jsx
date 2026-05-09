import React from 'react'
import { motion } from 'framer-motion'
import TypewriterText from '../ui/TypewriterText'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const roles = [
    'Computer Engineering Student',
    'Software Developer',
    'AI Systems Builder',
    'Full-Stack Developer',
    'Electronics & Hardware Engineer'
  ]

  return (
    <section id="hero" className="h-screen flex flex-col items-center justify-center relative text-center py-24">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="font-mono text-sm text-cyan-400 mb-4">[ PORTFOLIO ]</motion.div>

      <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="font-display font-bold tracking-widest text-5xl md:text-7xl lg:text-8xl text-text-primary uppercase">LANCER CELICIOUS</motion.h1>

      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="mt-4">
        <TypewriterText roles={roles} />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="text-sm text-text-secondary mt-2">📍 Dapitan, Zamboanga Peninsula, Philippines</motion.div>

      <div className="mt-8 flex gap-4">
        <motion.button whileHover={{ scale: 1.05 }} onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="bg-cyan-400 text-navy-950 font-display font-bold uppercase px-8 py-3 rounded">VIEW PROJECTS</motion.button>
        <motion.button whileHover={{ scale: 1.02 }} onClick={() => console.log('CV download')} className="border border-cyan-400 text-cyan-400 font-display uppercase px-8 py-3 rounded">DOWNLOAD CV</motion.button>
      </div>

      <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400/60">
        <ChevronDown />
      </motion.div>
    </section>
  )
}

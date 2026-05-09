import React from 'react'
import { motion } from 'framer-motion'

export default function SectionHeading({ label, title, centered }) {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''}`}>
      <div className="text-sm font-mono text-cyan-400">{label}</div>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl text-text-primary font-bold mt-2"
      >
        {title}
      </motion.h2>
    </div>
  )
}

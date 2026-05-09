import React from 'react'
import { motion } from 'framer-motion'

export default function SkillPill({ label, index }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: (index || 0) * 0.02 }}
      className="font-mono text-xs px-3 py-1 rounded border border-navy-600 text-text-secondary hover:bg-cyan-400/10 hover:border-cyan-400/60 hover:text-cyan-400"
    >
      {label}
    </motion.span>
  )
}

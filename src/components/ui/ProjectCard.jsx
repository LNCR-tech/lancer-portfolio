import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.article
      className="bg-navy-800 border border-navy-700 rounded-xl p-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-start mb-2">
        <div className="font-mono text-xs text-text-secondary">{project.tag}</div>
        <div className="text-xs font-mono text-text-secondary">{project.year}</div>
      </div>
      <h3 className="font-display text-2xl text-text-primary font-bold">{project.title}</h3>
      <div className="italic text-cyan-400 text-sm">{project.role}</div>
      <p className="mt-3 text-text-secondary text-sm">{project.description}</p>
      <ul className="mt-3 space-y-1 text-text-secondary text-sm">
        {project.features.map((f, i) => (
          <li key={i}>→ {f}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="font-mono text-xs px-2 py-1 rounded border border-cyan-400/30">{t}</span>
        ))}
      </div>
    </motion.article>
  )
}

import React from 'react'
import { motion } from 'framer-motion'

export default function CertCard({ cert }) {
  const isUdemy = cert.issuer && cert.issuer.toLowerCase().includes('udemy')
  return (
    <motion.article
      className="bg-navy-800 border border-navy-700 rounded-xl p-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true }}
    >
      <div className={`font-mono text-xs inline-block px-2 py-1 rounded ${isUdemy ? 'bg-amber-500/20 text-amber-400' : 'bg-blue-500/20 text-blue-400'}`}>
        {cert.issuer?.toUpperCase() || 'CERT'}
      </div>
      <h4 className="font-display text-lg text-text-primary font-semibold mt-2">{cert.title}</h4>
      <div className="text-sm text-text-secondary mt-1">{cert.date}</div>
      {cert.credentialId && <div className="font-mono text-xs text-text-muted truncate mt-2">{cert.credentialId}</div>}
      <div className="mt-3 flex flex-wrap gap-2">
        {cert.skills.map((s) => (
          <span key={s} className="font-mono text-xs px-2 py-1 rounded border border-cyan-400/20 text-text-secondary">{s}</span>
        ))}
      </div>
    </motion.article>
  )
}

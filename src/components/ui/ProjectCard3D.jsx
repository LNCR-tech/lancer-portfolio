import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard3D({ project }) {
  const cardRef = useRef(null)
  const sheenRef = useRef(null)
  const [state, setState] = useState({ x: 0, y: 0, rotateX: 0, rotateY: 0 })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotateX = (y - 0.5) * 20
    const rotateY = (x - 0.5) * -20

    setState({ x, y, rotateX, rotateY })

    // Sheen effect
    if (sheenRef.current) {
      sheenRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(0, 212, 255, 0.15) 0%, transparent 60%)`
    }

    // Apply transform
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
  }

  const handleMouseLeave = () => {
    setState({ x: 0.5, y: 0.5, rotateX: 0, rotateY: 0 })
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
    }
    if (sheenRef.current) {
      sheenRef.current.style.background = 'radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0) 0%, transparent 60%)'
    }
  }

  return (
    <motion.article
      ref={cardRef}
      className="relative bg-navy-800 border border-navy-700 rounded-xl p-6 h-full"
      style={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out'
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Sheen overlay */}
      <div
        ref={sheenRef}
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0) 0%, transparent 60%)',
          transition: 'background 0.05s ease-out'
        }}
      />

      {/* Content */}
      <div className="relative z-10" style={{ transform: 'translateZ(10px)' }}>
        <div className="flex justify-between items-start mb-2">
          <div className="font-mono text-xs text-text-secondary">{project.tag}</div>
          <div className="text-xs font-mono text-text-secondary font-display" style={{ transform: 'translateZ(20px)' }}>
            {project.year}
          </div>
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
            <span
              key={t}
              className="font-mono text-xs px-2 py-1 rounded border border-cyan-400/30"
              style={{ transform: 'translateZ(10px)' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

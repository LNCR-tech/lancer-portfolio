import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function CertCard({ cert }) {
  const [flipped, setFlipped] = useState(false)
  const cardRef = useRef(null)
  const [state, setState] = useState({ rotateX: 0, rotateY: 0 })

  const isUdemy = cert.issuer && cert.issuer.toLowerCase().includes('udemy')

  const handleMouseMove = (e) => {
    if (flipped || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotateX = (y - 0.5) * 8
    const rotateY = (x - 0.5) * -8
    setState({ rotateX, rotateY })

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseLeave = () => {
    setState({ rotateX: 0, rotateY: 0 })
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative h-64 cursor-pointer"
      style={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.15s ease-out'
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setFlipped(!flipped)}
    >
      {/* Card inner container */}
      <div
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          width: '100%',
          height: '100%'
        }}
      >
        {/* Front face */}
        <article
          className="absolute w-full h-full bg-navy-800 border border-navy-700 rounded-xl p-6"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className={`font-mono text-xs inline-block px-2 py-1 rounded ${isUdemy ? 'bg-amber-500/20 text-amber-400' : 'bg-blue-500/20 text-blue-400'}`}>
            {cert.issuer?.toUpperCase() || 'CERT'}
          </div>
          <h4 className="font-display text-lg text-text-primary font-semibold mt-2">{cert.title}</h4>
          <div className="text-sm text-text-secondary mt-1">{cert.date}</div>
          {cert.credentialId && (
            <div className="font-mono text-xs text-text-muted truncate mt-2">{cert.credentialId}</div>
          )}
          <div className="mt-3 flex flex-wrap gap-2">
            {cert.skills.slice(0, 4).map((s) => (
              <span key={s} className="font-mono text-xs px-2 py-1 rounded border border-cyan-400/20 text-text-secondary">
                {s}
              </span>
            ))}
          </div>
          <div className="absolute bottom-4 left-4 text-xs text-text-muted font-mono">[ CLICK TO REVEAL ]</div>
        </article>

        {/* Back face */}
        <article
          className="absolute w-full h-full bg-navy-800 border border-cyan-400 rounded-xl p-6 flex flex-col justify-between"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div>
            {cert.credentialId && (
              <div className="text-center mb-3">
                <div className="font-mono text-xs text-cyan-400 break-all font-bold">{cert.credentialId}</div>
              </div>
            )}
            <div className="relative w-20 h-20 mx-auto mb-3">
              <div className="absolute inset-0 border-2 border-cyan-400 rounded-full flex items-center justify-center">
                <span className="text-cyan-400 font-mono text-xs font-bold">✓</span>
              </div>
              <div
                className="absolute inset-0 border-2 border-cyan-400 rounded-full"
                style={{
                  transform: 'rotate(-45deg)',
                  opacity: 0.3
                }}
              />
            </div>
            <p className="text-center font-mono text-xs text-cyan-400 font-bold">VERIFIED</p>
          </div>
          <div className="flex flex-wrap gap-1 justify-center">
            {cert.skills.map((s) => (
              <span key={s} className="font-mono text-xs px-2 py-1 rounded border border-cyan-400/40 text-cyan-300">
                {s}
              </span>
            ))}
          </div>
        </article>
      </div>
    </motion.div>
  )
}

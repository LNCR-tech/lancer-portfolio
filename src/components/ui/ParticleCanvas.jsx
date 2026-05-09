import React, { useRef, useEffect } from 'react'
import useTheme from '../../hooks/useTheme'

export default function ParticleCanvas() {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)
  const { isDark } = useTheme()

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const canvas = canvasRef.current
    if (!canvas || prefersReduced) return
    const ctx = canvas.getContext('2d')
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const particles = []
    const PARTICLE_COUNT = 100

    function rand(min, max) { return Math.random() * (max - min) + min }

    function initParticles() {
      particles.length = 0
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: rand(-0.3, 0.3),
          vy: rand(-0.3, 0.3),
          r: 1.5,
          o: rand(0.3, 0.6)
        })
      }
    }

    let mouse = { x: -9999, y: -9999 }
    function onMove(e) {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    function onResize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      initParticles()
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)
      const pColor = isDark ? '#00d4ff' : '#0066cc'
      const lColor = isDark ? 'rgba(0,212,255,0.12)' : 'rgba(0,102,204,0.1)'

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        // mouse push
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 150) {
          const force = (150 - dist) / 150 * 0.6
          p.vx += (dx / dist) * force
          p.vy += (dy / dist) * force
        }

        ctx.beginPath()
        ctx.fillStyle = hexWithOpacity(pColor, p.o)
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      // lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 120) {
            ctx.beginPath()
            ctx.strokeStyle = lineWithOpacity(lColor, 1 - d / 120)
            ctx.lineWidth = 0.8
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    function hexWithOpacity(hex, alpha) {
      // simple converter for #rrggbb
      const c = hex.replace('#', '')
      const r = parseInt(c.substr(0,2),16)
      const g = parseInt(c.substr(2,2),16)
      const b = parseInt(c.substr(4,2),16)
      return `rgba(${r},${g},${b},${alpha})`
    }

    function lineWithOpacity(colorStr, a) {
      // colorStr already rgba or hex, try to return rgba with scaled alpha
      if (colorStr.startsWith('rgba')) return colorStr.replace(/([\d\.]+)\)$/,'$1')
      return colorStr
    }

    initParticles()
    window.addEventListener('mousemove', onMove)
    window.addEventListener('resize', onResize)
    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', onResize)
    }
  }, [isDark])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
    />
  )
}

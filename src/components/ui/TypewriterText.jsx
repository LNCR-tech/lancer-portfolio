import React, { useEffect, useState } from 'react'

export default function TypewriterText({ roles = [], speed = 80 }) {
  const [idx, setIdx] = useState(0)
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    let mounted = true
    let timeout

    function tick() {
      const full = roles[idx]
      if (!full) return
      if (deleting) {
        setDisplay((s) => full.substring(0, s.length - 1))
        if (display.length <= 1) {
          setDeleting(false)
          setIdx((i) => (i + 1) % roles.length)
        }
      } else {
        setDisplay((s) => full.substring(0, s.length + 1))
        if (display.length >= full.length) {
          timeout = setTimeout(() => setDeleting(true), 900)
        }
      }
      timeout = setTimeout(tick, deleting ? speed / 2 : speed)
    }

    timeout = setTimeout(tick, 500)
    return () => { mounted = false; clearTimeout(timeout) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [display, deleting, idx, roles])

  return (
    <span className="font-display font-medium text-xl md:text-2xl text-cyan-400">
      {display}
      <span className="cursor-blink ml-1" />
    </span>
  )
}

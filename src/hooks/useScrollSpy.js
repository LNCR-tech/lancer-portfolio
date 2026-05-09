import { useEffect, useState } from 'react'

export default function useScrollSpy(ids = []) {
  const [active, setActive] = useState(ids[0] || null)

  useEffect(() => {
    if (!ids || ids.length === 0) return
    const observers = new Map()

    const options = { threshold: 0.4 }

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(id)
        })
      }, options)
      obs.observe(el)
      observers.set(id, obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [ids.join('|')])

  return active
}

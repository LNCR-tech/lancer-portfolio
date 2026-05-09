import React, { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement
      const scrolled = window.scrollY || doc.scrollTop
      const height = doc.scrollHeight - doc.clientHeight
      const pct = height > 0 ? (scrolled / height) * 100 : 0
      setWidth(pct)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 z-50">
      <div
        className="h-0.5"
        style={{ width: `${width}%`, background: 'linear-gradient(90deg,#00d4ff,#1e90ff)' }}
      />
    </div>
  )
}

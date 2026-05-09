import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from '../ui/ThemeToggle'
import useScrollSpy from '../../hooks/useScrollSpy'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' }
]

export default function Navbar() {
  const active = useScrollSpy(LINKS.map((l) => l.id))
  const [open, setOpen] = useState(false)

  function scrollTo(id) {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-navy-900/80 dark:bg-navy-950/85 border-b border-cyan-400/20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="font-display font-bold px-2 py-1 border border-cyan-400 text-cyan-400">LC</div>
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          {LINKS.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className={`text-sm ${active === l.id ? 'text-cyan-400' : 'text-text-secondary hover:text-text-primary'}`}>
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <div className="md:hidden">
            <button onClick={() => setOpen((s) => !s)} aria-label="menu">
              {open ? <X className="text-cyan-400" /> : <Menu className="text-text-secondary" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.aside initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed top-0 right-0 h-full w-72 bg-navy-900 border-l border-cyan-400/20 p-6">
            <div className="flex flex-col gap-4 mt-8">
              {LINKS.map((l, i) => (
                <motion.button key={l.id} onClick={() => scrollTo(l.id)} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="text-text-secondary text-lg text-left">
                  {l.label}
                </motion.button>
              ))}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  )
}

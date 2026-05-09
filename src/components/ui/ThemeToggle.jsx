import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import useTheme from '../../hooks/useTheme'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme} aria-label="Toggle theme" className="p-1 rounded">
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div key="moon" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}>
            <Moon className="text-cyan-400" />
          </motion.div>
        ) : (
          <motion.div key="sun" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}>
            <Sun className="text-yellow-400" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

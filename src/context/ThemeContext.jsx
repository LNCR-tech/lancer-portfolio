import React, { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext({ isDark: true, toggleTheme: () => {} })

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const raw = localStorage.getItem('lancer-theme')
    if (raw !== null) setIsDark(raw === 'dark')
    else setIsDark(true)
  }, [])

  useEffect(() => {
    try {
      if (isDark) document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')
      localStorage.setItem('lancer-theme', isDark ? 'dark' : 'light')
    } catch (e) {
      // ignore
    }
  }, [isDark])

  function toggleTheme() {
    setIsDark((v) => !v)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>
  )
}

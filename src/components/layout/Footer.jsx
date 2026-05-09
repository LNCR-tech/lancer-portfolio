import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-cyan-400/20 py-6 px-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-text-muted">© 2026 Lancer Celicious</div>
        <div className="text-xs text-text-secondary">Built from Dapitan, Philippines 🇵🇭</div>
        <div className="flex gap-4 text-xs text-text-secondary">
          <button onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}>Back to Top</button>
          <a href="#" className="hover:text-cyan-400">GitHub</a>
          <a href="#" className="hover:text-cyan-400">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

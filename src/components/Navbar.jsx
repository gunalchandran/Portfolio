import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import useActiveSection from '../hooks/useActiveSection.js'
import ThemeToggle from './ThemeToggle.jsx'
import { profile } from '../data/profile.js'

export const NAV_LINKS = [
  { id: 'transmission', label: 'Transmission' },
  { id: 'trajectory', label: 'Trajectory' },
  { id: 'constructs', label: 'Constructs' },
  { id: 'arsenal', label: 'Arsenal' },
  { id: 'frequency', label: 'Frequency' }
]

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.id))

  return (
    <header className="fixed top-0 left-0 right-0 z-[60]">
      <nav className="container-px flex items-center justify-between py-4">
        <button
          type="button"
          onClick={() => scrollToSection('transmission')}
          className="group flex items-center gap-2 font-display text-lg font-semibold tracking-tight"
          aria-label="Go to top"
        >
          <motion.svg
            width="26"
            height="26"
            viewBox="0 0 32 32"
            whileHover={{ rotate: 10 }}
            transition={{ type: 'spring', stiffness: 260 }}
          >
            <rect width="32" height="32" rx="8" fill="#1F1810" />
            <path
              d="M4 16 L10 16 L13 8 L18 24 L21 16 L28 16"
              stroke="#F4C430"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
          <span className="hidden sm:inline">{profile.name.split(' ')[0]}</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className={`relative rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                activeId === link.id ? 'text-void' : 'text-paper-dim hover:text-paper'
              }`}
            >
              {activeId === link.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-signal"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full glass"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden glass mx-4 rounded-2xl"
          >
            <div className="flex flex-col p-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => {
                    scrollToSection(link.id)
                    setOpen(false)
                  }}
                  className={`rounded-xl px-4 py-3 text-left font-mono text-sm uppercase tracking-wider ${
                    activeId === link.id ? 'text-signal' : 'text-paper-dim'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

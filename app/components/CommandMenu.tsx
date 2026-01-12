'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Copy, Linkedin, Twitter, Briefcase, Mail, X, Check } from 'lucide-react'

interface CommandMenuProps {
  email: string
  linkedinUrl: string
  twitterUrl: string
}

export default function CommandMenu({ email, linkedinUrl, twitterUrl }: CommandMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showCopied, setShowCopied] = useState(false)

  // Sections for search filtering
  const sections = ['Work', 'Experience', 'Testimonials', 'Writing', 'Contact']

  // Quick actions
  const quickActions = [
    {
      id: 'copy-email',
      label: 'Copy email',
      icon: Copy,
      action: () => copyEmail(),
    },
    {
      id: 'open-linkedin',
      label: 'Open LinkedIn',
      icon: Linkedin,
      action: () => window.open(linkedinUrl, '_blank'),
    },
    {
      id: 'open-twitter',
      label: 'Open Twitter/X',
      icon: Twitter,
      action: () => window.open(twitterUrl, '_blank'),
    },
    {
      id: 'scroll-work',
      label: 'Scroll to Work',
      icon: Briefcase,
      action: () => scrollToSection('work'),
    },
    {
      id: 'scroll-contact',
      label: 'Scroll to Contact',
      icon: Mail,
      action: () => scrollToSection('contact'),
    },
  ]

  // Filter sections based on search
  const filteredSections = sections.filter((section) =>
    section.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Filter quick actions based on search
  const filteredActions = quickActions.filter((action) =>
    action.label.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email)
      setShowCopied(true)
      setTimeout(() => setShowCopied(false), 2000)
      setIsOpen(false)
    } catch (err) {
      console.error('Failed to copy email:', err)
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = email
      document.body.appendChild(textArea)
      textArea.select()
      try {
        document.execCommand('copy')
        setShowCopied(true)
        setTimeout(() => setShowCopied(false), 2000)
        setIsOpen(false)
      } catch (fallbackErr) {
        console.error('Fallback copy failed:', fallbackErr)
      }
      document.body.removeChild(textArea)
    }
  }, [email])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K to toggle
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }
      // ESC to close
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setSearchQuery('')
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* Toast */}
      <AnimatePresence>
        {showCopied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg shadow-lg flex items-center gap-2 text-sm font-medium z-[60]"
          >
            <Check className="w-4 h-4" />
            Copied!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />
          </>
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-800">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Command Menu
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search */}
            <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  autoFocus
                  className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {/* Quick Actions */}
              {(searchQuery === '' || filteredActions.length > 0) && (
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-500 font-medium mb-3">
                    Quick Actions
                  </h3>
                  <div className="space-y-1">
                    {filteredActions.map((action) => {
                      const Icon = action.icon
                      return (
                        <button
                          key={action.id}
                          onClick={action.action}
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-left transition-colors group"
                        >
                          <Icon className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
                          <span className="text-sm text-zinc-700 dark:text-zinc-300">
                            {action.label}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Sections (for search) */}
              {searchQuery !== '' && filteredSections.length > 0 && (
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-500 font-medium mb-3">
                    Sections
                  </h3>
                  <div className="space-y-1">
                    {filteredSections.map((section) => (
                      <button
                        key={section}
                        onClick={() => scrollToSection(section.toLowerCase())}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-left transition-colors"
                      >
                        <span className="text-sm text-zinc-700 dark:text-zinc-300">
                          {section}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Useful Shortcuts */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-500 font-medium mb-3">
                  Useful Shortcuts
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-900">
                    <span className="text-zinc-600 dark:text-zinc-400">Open command menu</span>
                    <kbd className="px-2 py-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded text-xs font-mono text-zinc-700 dark:text-zinc-300">
                      {navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'} K
                    </kbd>
                  </div>
                  <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-900">
                    <span className="text-zinc-600 dark:text-zinc-400">Copy email</span>
                    <kbd className="px-2 py-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded text-xs font-mono text-zinc-700 dark:text-zinc-300">
                      C
                    </kbd>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}


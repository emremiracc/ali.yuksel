'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import { Check } from 'lucide-react'

interface HeroProps {
  name: string
  title: string
  bio: string
  established: string
  email: string
}

export default function Hero({ name, title, bio, established, email }: HeroProps) {
  const [currentTime, setCurrentTime] = useState('')
  const [showToast, setShowToast] = useState(false)

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }, [email])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString('tr-TR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
      setCurrentTime(`${timeString} GMT+3`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'c' || e.key === 'C') {
        if (!e.ctrlKey && !e.metaKey && !e.altKey) {
          copyEmail()
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [copyEmail])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-[620px] w-full">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-16 text-xs tracking-wider text-zinc-500 dark:text-zinc-500">
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
          <div className="uppercase font-medium">{established}</div>
          <div className="font-mono">{currentTime}</div>
        </div>

        {/* Hero Content */}
        <div className="space-y-8">
          {/* Avatar */}
          <div className="relative inline-block">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 flex items-center justify-center text-2xl font-medium text-zinc-700 dark:text-zinc-300">
              {name.charAt(0)}
            </div>
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-zinc-950" />
          </div>

          {/* Name & Title */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-100">
                {name}
              </h1>
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
            </div>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light">
              {title}
            </p>
          </div>

          {/* Bio */}
          <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-light tracking-wide">
            {bio}
          </p>

          {/* Email Copy */}
          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <button
              onClick={copyEmail}
              className="group flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors"
            >
              <span className="font-mono text-xs">
                Press <kbd className="px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded text-zinc-700 dark:text-zinc-300">C</kbd> to copy my email
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg shadow-lg flex items-center gap-2 text-sm font-medium z-50"
          >
            <Check className="w-4 h-4" />
            Email copied!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

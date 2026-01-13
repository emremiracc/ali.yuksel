'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface ShowcaseItem {
  id: number
  src: string
  alt: string
}

const showcaseItems: ShowcaseItem[] = [
  { id: 1, src: '/showcase/shot-1.avif', alt: 'Showcase 1' },
  { id: 2, src: '/showcase/shot-2.avif', alt: 'Showcase 2' },
  { id: 3, src: '/showcase/shot-3.avif', alt: 'Showcase 3' },
  { id: 4, src: '/showcase/shot-4.avif', alt: 'Showcase 4' },
]

export default function Showcase() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedIndex(null)
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev !== null ? (prev - 1 + showcaseItems.length) % showcaseItems.length : null))
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % showcaseItems.length : null))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex])

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedIndex])

  const openModal = (index: number) => {
    setSelectedIndex(index)
  }

  const closeModal = () => {
    setSelectedIndex(null)
  }

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + showcaseItems.length) % showcaseItems.length)
    }
  }

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % showcaseItems.length)
    }
  }

  return (
    <>
      {/* Showcase Gallery - Grid Layout */}
      <div className="relative w-full py-16 md:py-20">
        {/* Dotted Pattern Background */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Grid Layout - 4 Cards Side by Side */}
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {showcaseItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="cursor-pointer"
                onClick={() => openModal(index)}
              >
                <div className="relative aspect-[4/3] rounded-2xl bg-white border-[10px] border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300 hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={index < 2}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50"
              onClick={closeModal}
            />

            {/* Modal Content */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="relative max-w-6xl w-full max-h-[90vh] pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute -top-12 right-0 text-white hover:text-zinc-300 transition-colors z-10"
                  aria-label="Close modal"
                >
                  <X className="w-8 h-8" />
                </button>

                {/* Navigation Buttons */}
                {showcaseItems.length > 1 && (
                  <>
                    <button
                      onClick={goToPrevious}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-zinc-300 transition-colors bg-black/40 hover:bg-black/60 rounded-full p-3 z-10 backdrop-blur-sm"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={goToNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-zinc-300 transition-colors bg-black/40 hover:bg-black/60 rounded-full p-3 z-10 backdrop-blur-sm"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Image */}
                <div className="relative w-full aspect-[4/3] bg-zinc-900 rounded-lg overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={showcaseItems[selectedIndex].src}
                        alt={showcaseItems[selectedIndex].alt}
                        fill
                        className="object-contain"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

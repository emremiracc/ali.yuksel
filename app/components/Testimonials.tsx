'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface TestimonialItem {
  id: number
  name: string
  role: string
  company: string
  content: string
  avatar: string
}

interface TestimonialsProps {
  items: TestimonialItem[]
}

export default function Testimonials({ items }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [items.length])

  return (
    <section id="testimonials" className="min-h-screen px-4 py-20 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 text-center text-zinc-900"
        >
          Testimonials
        </motion.h2>
        
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 md:p-12"
            >
              <p className="text-2xl md:text-3xl text-zinc-700 leading-relaxed mb-8 italic">
                "{items[currentIndex].content}"
              </p>
              
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-2xl font-bold text-zinc-900">
                  {items[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <p className="text-xl font-bold text-zinc-900">
                    {items[currentIndex].name}
                  </p>
                  <p className="text-lg text-zinc-600">
                    {items[currentIndex].role}, {items[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-zinc-900 w-8'
                    : 'bg-zinc-300 hover:bg-zinc-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


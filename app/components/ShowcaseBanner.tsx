'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ShowcaseBanner() {
  const images = [
    { src: '/showcase/shot-1.jpg', alt: 'Showcase 1' },
    { src: '/showcase/shot-2.jpg', alt: 'Showcase 2' },
    { src: '/showcase/shot-3.jpg', alt: 'Showcase 3' },
    { src: '/showcase/shot-4.jpg', alt: 'Showcase 4' },
  ]

  const rotations = [-6, -2, 3, 7]
  const positions = [
    { top: '10%', left: '15%' },
    { top: '20%', left: '45%' },
    { top: '15%', left: '65%' },
    { top: '25%', left: '35%' },
  ]

  return (
    <section className="relative w-full py-32 bg-black overflow-hidden">
      {/* Dotted Pattern Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0',
        }}
      />

      {/* Desktop Floating Cards */}
      <div className="hidden md:block relative max-w-7xl mx-auto px-4">
        <div className="relative h-[700px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: rotations[index] }}
              whileInView={{ opacity: 1, y: 0, rotate: rotations[index] }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: 'spring',
                stiffness: 100,
              }}
              className="absolute w-[320px] aspect-[4/3]"
              style={{
                top: positions[index].top,
                left: positions[index].left,
                zIndex: index + 1,
                transform: `rotate(${rotations[index]}deg)`,
              }}
            >
              <div className="relative w-full h-full bg-white rounded-xl border-8 border-white shadow-2xl overflow-hidden">
                {/* Placeholder if image doesn't exist */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center z-0">
                  <span className="text-xs text-zinc-400 font-mono">
                    {image.alt}
                  </span>
                </div>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover z-10"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="aspect-[4/3]"
            >
              <div className="relative w-full h-full bg-white rounded-xl border-4 border-white shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center z-0">
                  <span className="text-xs text-zinc-400 font-mono">
                    {image.alt}
                  </span>
                </div>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover z-10"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


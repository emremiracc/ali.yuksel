'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ShowcaseImage {
  src: string
  alt: string
}

interface ShowcaseProps {
  images: ShowcaseImage[]
}

export default function Showcase({ images }: ShowcaseProps) {
  const rotations = [-2, 3, -1.5, 2.5]
  const zIndices = [1, 3, 2, 4]

  return (
    <section className="relative px-4 py-32 bg-white dark:bg-zinc-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative"
              style={{
                rotate: `${rotations[index % rotations.length]}deg`,
                zIndex: zIndices[index % zIndices.length],
              }}
            >
              <div className="relative aspect-[4/5] bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-lg overflow-hidden">
                {/* Placeholder if image doesn't exist */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center">
                  <span className="text-xs text-zinc-400 dark:text-zinc-600 font-mono">
                    {image.alt}
                  </span>
                </div>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Hide image on error, placeholder will show
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


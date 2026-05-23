import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const words = ['interfaces', 'APIs', 'experiences', 'products'] as const

export function RotatingWords() {
  const reduced = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduced) return
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2800)
    return () => clearInterval(id)
  }, [reduced])

  if (reduced) {
    return <span className="text-primary">digital experiences</span>
  }

  return (
    <span className="relative inline-flex min-w-[10ch] text-primary">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 24, opacity: 0, filter: 'blur(4px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -24, opacity: 0, filter: 'blur(4px)' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      <span className="invisible">{words[0]}</span>
    </span>
  )
}

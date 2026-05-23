import { motion } from 'framer-motion'
import { useScrollProgress } from '../../hooks/useScrollProgress'

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <motion.div
      className="fixed top-0 left-0 z-[60] h-[2px] origin-left bg-primary shadow-glow-sm"
      style={{ scaleX: progress, width: '100%' }}
      aria-hidden
    />
  )
}

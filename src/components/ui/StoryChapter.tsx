import { motion } from 'framer-motion'
import { fadeIn, scrollViewport } from '../../lib/motion'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

type StoryChapterProps = {
  number: string
  title: string
  subtitle?: string
  centered?: boolean
}

export function StoryChapter({ number, title, subtitle, centered }: StoryChapterProps) {
  const align = centered ? 'text-center mx-auto' : ''
  const reduced = usePrefersReducedMotion()

  if (reduced) {
    return (
      <header className={`mb-16 ${align}`}>
        <p className="mb-2 font-label-mono text-label-mono text-primary">{number}</p>
        <h2 className="font-headline-lg text-headline-lg">{title}</h2>
        {subtitle && (
          <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant">{subtitle}</p>
        )}
      </header>
    )
  }

  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      variants={fadeIn}
      className={`mb-16 ${align}`}
    >
      <motion.p
        variants={fadeIn}
        className="mb-2 font-label-mono text-label-mono tracking-[0.25em] text-primary"
      >
        {number}
      </motion.p>
      <motion.h2
        variants={fadeIn}
        className="font-headline-lg text-headline-lg"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeIn}
          className="mt-2 max-w-lg font-body-sm text-body-sm text-on-surface-variant"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.header>
  )
}

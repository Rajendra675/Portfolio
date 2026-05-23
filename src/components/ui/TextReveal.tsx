import { motion } from 'framer-motion'
import { scrollViewport } from '../../lib/motion'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

type TextRevealProps = {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'p' | 'span'
  delay?: number
}

export function TextReveal({ text, className, as: Tag = 'span', delay = 0 }: TextRevealProps) {
  const reduced = usePrefersReducedMotion()
  const words = text.split(' ')

  if (reduced) {
    return <Tag className={className}>{text}</Tag>
  }

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={scrollViewport}
            transition={{
              duration: 0.55,
              delay: delay + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

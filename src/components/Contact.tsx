import { motion } from 'framer-motion'
import { site } from '../data/portfolio'
import { fadeUp, scrollViewport, staggerContainer } from '../lib/motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { StoryChapter } from './ui/StoryChapter'

export function Contact() {
  const reduced = usePrefersReducedMotion()

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-container-max overflow-hidden px-margin-mobile py-32 text-center md:px-margin-desktop"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[80px]" />

      <motion.div
        initial={reduced ? false : 'hidden'}
        whileInView="visible"
        viewport={scrollViewport}
        variants={staggerContainer}
        className="relative mx-auto max-w-2xl"
      >
        <StoryChapter
          number="Ch. 05"
          title="Let's Connect"
          subtitle="Currently open to new opportunities and interesting technical challenges."
          centered
        />

        <motion.h2
          variants={fadeUp}
          className="mb-8 font-headline-xl text-headline-xl"
        >
          Ready to build something{' '}
          <motion.span
            className="inline-block text-primary italic"
            animate={reduced ? undefined : { rotate: [0, -2, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            exceptional
          </motion.span>
          ?
        </motion.h2>

        <motion.a
          variants={fadeUp}
          href={`mailto:${site.email}`}
          whileHover={reduced ? undefined : { scale: 1.02 }}
          className="group inline-flex items-center gap-3 border-b-2 border-primary pb-2 font-headline-lg text-headline-lg transition-colors hover:text-primary"
        >
          {site.email}
          <motion.span
            className="material-symbols-outlined text-primary opacity-0 transition-opacity group-hover:opacity-100"
            animate={reduced ? undefined : { x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            arrow_forward
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  )
}

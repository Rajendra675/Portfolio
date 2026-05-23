import { motion } from 'framer-motion'
import { experience } from '../data/portfolio'
import { fadeUp, lineGrow, scaleIn, scrollViewport, staggerContainer } from '../lib/motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { StoryChapter } from './ui/StoryChapter'

export function Experience() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="experience" className="relative border-t border-outline-variant/20 bg-surface-container py-24">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mx-auto max-w-3xl">
          <StoryChapter
            number="Ch. 04"
            title="The Journey"
            subtitle="From intern to software engineer — growing through sprints, APIs, and shipped features."
            centered
          />

          <div className="relative">
            <motion.div
              variants={lineGrow}
              initial={reduced ? false : 'hidden'}
              whileInView="visible"
              viewport={scrollViewport}
              className="absolute left-0 top-0 hidden h-full w-px origin-top bg-gradient-to-b from-primary via-outline-variant/50 to-transparent md:left-1/2 md:block"
              aria-hidden
            />

            <motion.div
              variants={staggerContainer}
              initial={reduced ? false : 'hidden'}
              whileInView="visible"
              viewport={scrollViewport}
              className="space-y-16"
            >
              {experience.map((item, index) => (
                <motion.div
                  key={item.period}
                  variants={fadeUp}
                  className={`relative pl-8 md:w-[calc(50%-2rem)] md:pl-0 ${
                    index % 2 === 0
                      ? 'md:mr-auto md:pr-8 md:text-right'
                      : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <motion.div
                    variants={scaleIn}
                    className={`absolute top-1 h-3 w-3 rounded-full ring-4 ring-surface-container ${
                      item.active ? 'bg-primary shadow-glow-sm' : 'bg-outline'
                    } left-[-6px] md:left-auto ${
                      index % 2 === 0 ? 'md:right-[-22px]' : 'md:left-[-22px]'
                    }`}
                  />
                  <span className="mb-2 block font-label-mono text-label-mono text-primary">
                    {item.period}
                  </span>
                  <h4 className="mb-1 text-body-md font-bold">{item.title}</h4>
                  <p className="mb-2 text-body-sm font-medium text-secondary">{item.company}</p>
                  <p className="text-body-sm leading-relaxed text-on-surface-variant">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

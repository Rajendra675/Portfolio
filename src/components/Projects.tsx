import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { projects } from '../data/portfolio'
import { fadeUp, scrollViewportDeep, slideFromLeft, slideFromRight, staggerFast } from '../lib/motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { StoryChapter } from './ui/StoryChapter'

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const yPercent = useTransform(scrollYProgress, [0, 1], ['8%', '-8%'])

  return (
    <div ref={ref} className="relative aspect-video overflow-hidden rounded-xl">
      <motion.img
        style={reduced ? undefined : { y: yPercent }}
        alt={alt}
        className="h-[120%] w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
        src={src}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-surface/50 via-transparent to-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  )
}

export function Projects() {
  const reduced = usePrefersReducedMotion()

  return (
    <section
      id="projects"
      className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop"
    >
      <StoryChapter
        number="Ch. 03"
        title="What I've Built"
        subtitle="Real products shipped across enterprise and HR domains — each with its own technical story."
      />

      <div className="space-y-24">
        {projects.map((project, index) => {
          // 1st, 3rd, 5th… → image left; 2nd, 4th… → image right
          const imageOnRight = index % 2 === 1

          return (
          <motion.article
            key={project.title}
            initial={reduced ? false : 'hidden'}
            whileInView="visible"
            viewport={scrollViewportDeep}
            className="grid grid-cols-1 items-center gap-gutter md:grid-cols-12"
          >
            <motion.div
              variants={imageOnRight ? slideFromRight : slideFromLeft}
              className={`group overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container md:col-span-7 ${
                imageOnRight ? 'md:order-2' : ''
              }`}
            >
              <ProjectImage src={project.image} alt={project.imageAlt} />
            </motion.div>

            <motion.div
              variants={imageOnRight ? slideFromLeft : slideFromRight}
              className={`px-4 md:col-span-5 ${imageOnRight ? 'md:order-1' : ''}`}
            >
              <span className="mb-4 block font-label-mono text-label-mono text-secondary">
                {String(index + 1).padStart(2, '0')} — {project.category}
              </span>
              <h3 className="mb-4 font-headline-lg text-headline-lg transition-colors group-hover:text-primary">
                {project.title}
              </h3>
              <p className="mb-6 font-body-md text-body-md leading-relaxed text-on-surface-variant">
                {project.description}
              </p>
              <motion.div
                variants={staggerFast}
                className="mb-8 flex flex-wrap gap-2"
              >
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    variants={fadeUp}
                    className="rounded border border-outline-variant/50 bg-surface-container-highest px-3 py-1 font-label-mono text-label-mono text-on-surface transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {tag.trim()}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.article>
          )
        })}
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { site } from '../data/portfolio'
import { fadeUp, scrollViewport, staggerContainer } from '../lib/motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { RotatingWords } from './ui/RotatingWords'
import { TextReveal } from './ui/TextReveal'

const codeLines = [
  { indent: 0, parts: [{ t: 'const', c: 'keyword' }, { t: ' developer', c: 'plain' }, { t: ' = ', c: 'plain' }, { t: '{', c: 'plain' }] },
  { indent: 1, parts: [{ t: 'name', c: 'prop' }, { t: ': ', c: 'plain' }, { t: `'${site.name}'`, c: 'string' }, { t: ',', c: 'plain' }] },
  { indent: 1, parts: [{ t: 'stack', c: 'prop' }, { t: ': ', c: 'plain' }, { t: "['React', 'Spring Boot', 'AWS']", c: 'string' }] },
  { indent: 0, parts: [{ t: '}', c: 'plain' }] },
] as const

export function Hero() {
  const reduced = usePrefersReducedMotion()

  return (
    <section
      id="about"
      className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-container-max flex-col justify-center px-margin-mobile py-24 md:px-margin-desktop md:py-32"
    >
      <motion.div
        initial={reduced ? false : 'hidden'}
        whileInView="visible"
        viewport={scrollViewport}
        variants={staggerContainer}
        className="grid grid-cols-1 items-center gap-gutter md:grid-cols-12"
      >
        <div className="md:col-span-7">
          <motion.p
            variants={fadeUp}
            className="mb-6 font-label-mono text-label-mono uppercase tracking-[0.2em] text-primary"
          >
            Ch. 01 — {site.role}
          </motion.p>

          <h1 className="mb-8 font-headline-xl text-headline-xl leading-tight">
            <TextReveal
              as="span"
              text="Building high-performance"
              className="block"
            />
            <span className="mt-1 block">
              <RotatingWords />
              <span className="text-on-surface"> with precision.</span>
            </span>
          </h1>

          <motion.p
            variants={fadeUp}
            className="mb-10 max-w-xl font-body-md text-body-md text-on-surface-variant"
          >
            With over 2 years of professional experience, I specialize in crafting robust
            backend architectures with Java and Spring Boot, paired with reactive, fluid
            frontend interfaces using React.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group relative overflow-hidden rounded bg-primary px-8 py-3 font-label-mono text-label-mono uppercase tracking-widest text-on-primary"
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 -translate-x-full bg-on-primary/20 transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a
              href="#contact"
              className="rounded border border-outline-variant px-8 py-3 font-label-mono text-label-mono uppercase tracking-widest text-on-surface transition-all duration-300 hover:border-primary hover:bg-surface-container hover:shadow-glow"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="relative md:col-span-5">
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/25 via-tertiary/5 to-secondary/15 opacity-70 blur-2xl" />
          <motion.div
            className="relative aspect-square overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-high"
            whileHover={reduced ? undefined : { scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          >
            <img
              alt="Professional headshot"
              className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
              src="/myimg.png"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mono mt-6 overflow-hidden rounded-lg border border-outline-variant/40 bg-surface-container/90 p-4 text-[11px] leading-relaxed backdrop-blur-sm md:absolute md:-bottom-8 md:-left-8 md:mt-0 md:max-w-[280px]"
          >
            {codeLines.map((line, li) => (
              <div key={li} style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                {line.parts.map((part, pi) => (
                  <span key={pi} className={`code-${part.c}`}>
                    {part.t}
                  </span>
                ))}
              </div>
            ))}
            <motion.span
              className="ml-0.5 inline-block h-3.5 w-1.5 bg-primary"
              animate={reduced ? undefined : { opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#stack"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-on-surface-variant"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-label="Scroll to tech stack"
      >
        <span className="font-label-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          className="block h-8 w-px bg-outline-variant"
          animate={reduced ? undefined : { scaleY: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.a>
    </section>
  )
}

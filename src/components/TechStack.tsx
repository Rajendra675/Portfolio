import { motion } from 'framer-motion'
import { FaAws, FaJava } from 'react-icons/fa6'
import { HiOutlineCircleStack } from 'react-icons/hi2'
import {
  SiCss,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiJenkins,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSpringboot,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { scaleIn, scrollViewport, staggerContainer } from '../lib/motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { StoryChapter } from './ui/StoryChapter'

export function TechStack() {
  const reduced = usePrefersReducedMotion()

  return (
    <section
      id="stack"
      className="relative border-y border-outline-variant/25 bg-surface-container-low/60 py-24 backdrop-blur-sm"
    >
      <motion.div
        initial={reduced ? false : 'hidden'}
        whileInView="visible"
        viewport={scrollViewport}
        variants={staggerContainer}
        className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop"
      >
        <StoryChapter
          number="Ch. 02"
          title="The Craft"
          subtitle="The tools and languages I use to bring ideas to life — from pixel to production."
        />

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          <motion.div
            variants={scaleIn}
            whileHover={
              reduced
                ? undefined
                : { y: -6, transition: { type: 'spring', stiffness: 400, damping: 20 } }
            }
            className="group relative overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-low p-8 transition-colors hover:border-primary/50 hover:shadow-glow-card"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
            <h3 className="mb-4 font-headline-lg text-body-md font-bold">Languages</h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-label-mono text-[11px] leading-snug text-on-surface-variant sm:text-label-mono">
              <span className="inline-flex items-center gap-1.5">
                <FaJava className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                Java
              </span>
              <span className="inline-flex items-center gap-1.5">
                <SiJavascript className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                JavaScript
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={scaleIn}
            whileHover={
              reduced
                ? undefined
                : { y: -6, transition: { type: 'spring', stiffness: 400, damping: 20 } }
            }
            className="group relative overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-low p-8 transition-colors hover:border-primary/50 hover:shadow-glow-card"
          >
            <motion.div
              className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150"
            />
            <h3 className="mb-4 font-headline-lg text-body-md font-bold">Backend</h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-label-mono text-[11px] leading-snug text-on-surface-variant sm:text-label-mono">
              <span className="inline-flex items-center gap-1.5">
                <SiSpringboot className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                Spring Boot
              </span>
              <span className="inline-flex items-center gap-1.5">
                <SiKubernetes className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                Microservices
              </span>
              <span className="inline-flex items-center gap-1.5">
                <SiSwagger className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                REST APIs
              </span>
              <span className="inline-flex items-center gap-1.5">
                <SiPostgresql className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                PostgreSQL
              </span>
              <span className="inline-flex items-center gap-1.5">
                <SiMysql className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                MySQL
              </span>
              <span className="inline-flex items-center gap-1.5">
                <SiMongodb className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                MongoDB
              </span>
              
            </div>
          </motion.div>

          <motion.div
            variants={scaleIn}
            whileHover={
              reduced
                ? undefined
                : { y: -6, transition: { type: 'spring', stiffness: 400, damping: 20 } }
            }
            className="group relative overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-low p-8 transition-colors hover:border-primary/50 hover:shadow-glow-card"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
            <h3 className="mb-4 font-headline-lg text-body-md font-bold">Frontend</h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-label-mono text-[11px] leading-snug text-on-surface-variant sm:text-label-mono">
              <span className="inline-flex items-center gap-1.5">
                <SiReact className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                React
              </span>
              <span className="inline-flex items-center gap-1.5">
                <SiTailwindcss className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                Tailwind CSS
              </span>
              <span className="inline-flex items-center gap-1.5">
                <SiRedux className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                Redux
              </span>
              <span className="inline-flex items-center gap-1.5">
                <SiHtml5 className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                HTML
              </span>
              <span className="inline-flex items-center gap-1.5">
                <SiCss className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                CSS
              </span>
              <span className="inline-flex items-center gap-1.5">
                <HiOutlineCircleStack className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                Zustand
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={scaleIn}
            whileHover={
              reduced
                ? undefined
                : { y: -6, transition: { type: 'spring', stiffness: 400, damping: 20 } }
            }
            className="group relative overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-low p-8 transition-colors hover:border-primary/50 hover:shadow-glow-card"
          >
            <motion.div
              className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150"
            />
            <h3 className="mb-4 font-headline-lg text-body-md font-bold">Infrastructure</h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-label-mono text-[11px] leading-snug text-on-surface-variant sm:text-label-mono">
              <span className="inline-flex items-center gap-1.5">
                <SiDocker className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                Docker
              </span>
              <span className="inline-flex items-center gap-1.5">
                <FaAws className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                AWS
              </span>
              <span className="inline-flex items-center gap-1.5">
                <SiGit className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                Git
              </span>
              <span className="inline-flex items-center gap-1.5">
                <SiJenkins className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                Jenkins
              </span>
              <span className="inline-flex items-center gap-1.5">
                <SiGithubactions className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                CI/CD
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          <motion.span
            variants={scaleIn}
            className="inline-flex items-center gap-2 rounded-full border border-outline-variant/40 px-4 py-1.5 font-label-mono text-[11px] uppercase tracking-wider text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
          >
            <SiReact className="h-3.5 w-3.5 text-primary" aria-hidden />
            React
          </motion.span>
          <motion.span
            variants={scaleIn}
            className="inline-flex items-center gap-2 rounded-full border border-outline-variant/40 px-4 py-1.5 font-label-mono text-[11px] uppercase tracking-wider text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
          >
            <SiTypescript className="h-3.5 w-3.5 text-primary" aria-hidden />
            TypeScript
          </motion.span>
          <motion.span
            variants={scaleIn}
            className="inline-flex items-center gap-2 rounded-full border border-outline-variant/40 px-4 py-1.5 font-label-mono text-[11px] uppercase tracking-wider text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
          >
            <SiTailwindcss className="h-3.5 w-3.5 text-primary" aria-hidden />
            Tailwind
          </motion.span>
          <motion.span
            variants={scaleIn}
            className="inline-flex items-center gap-2 rounded-full border border-outline-variant/40 px-4 py-1.5 font-label-mono text-[11px] uppercase tracking-wider text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
          >
            <SiSpringboot className="h-3.5 w-3.5 text-primary" aria-hidden />
            Spring Boot
          </motion.span>
          <motion.span
            variants={scaleIn}
            className="inline-flex items-center gap-2 rounded-full border border-outline-variant/40 px-4 py-1.5 font-label-mono text-[11px] uppercase tracking-wider text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
          >
            <SiDocker className="h-3.5 w-3.5 text-primary" aria-hidden />
            Docker
          </motion.span>
          <motion.span
            variants={scaleIn}
            className="inline-flex items-center gap-2 rounded-full border border-outline-variant/40 px-4 py-1.5 font-label-mono text-[11px] uppercase tracking-wider text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
          >
            <FaAws className="h-3.5 w-3.5 text-primary" aria-hidden />
            AWS
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  )
}

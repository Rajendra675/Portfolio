import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { navLinks, site } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function NavBar() {
  const reduced = usePrefersReducedMotion()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? 0
    if (!reduced) setHidden(latest > prev && latest > 120)
    setScrolled(latest > 24)
  })

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: hidden ? -80 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 z-50 h-20 w-full transition-[background,box-shadow,border] duration-500 ${
        scrolled
          ? 'border-b border-outline-variant/30 bg-surface/95 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-full max-w-container-max items-center justify-between px-margin-mobile md:px-margin-desktop">
        <a
          href="#about"
          className="font-headline-lg text-headline-lg font-bold text-on-surface transition-colors hover:text-primary"
        >
          {site.name}
          <span className="text-primary">.</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label }, i) => (
            <motion.a
              key={href}
              href={href}
              initial={reduced ? false : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="group relative font-label-mono text-label-mono text-on-surface-variant transition-colors hover:text-on-surface"
            >
              {label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>
        <motion.a
          href="#contact"
          whileHover={reduced ? undefined : { scale: 1.03 }}
          whileTap={reduced ? undefined : { scale: 0.97 }}
          className="rounded bg-primary px-6 py-2 font-label-mono text-label-mono text-on-primary transition-shadow hover:shadow-glow"
        >
          Hire Me
        </motion.a>
      </div>
    </motion.nav>
  )
}

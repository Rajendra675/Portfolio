import { motion } from 'framer-motion'
import { footerLinks, site } from '../data/portfolio'
import { fadeUp, scrollViewport } from '../lib/motion'
import { FaLinkedinIn } from 'react-icons/fa6'
import { HiOutlineEnvelope, HiOutlineCodeBracket } from 'react-icons/hi2'
import { SiGithub } from 'react-icons/si'

export const footerIconMap = {
  github: SiGithub,
  linkedin: FaLinkedinIn,
  source: HiOutlineCodeBracket,
  mail: HiOutlineEnvelope,
} satisfies Record<string, React.ElementType>

export function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      variants={fadeUp}
      className="w-full border-t border-outline-variant/25 bg-surface-container-lowest py-12"
    >
      <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-gutter px-margin-mobile md:flex-row md:px-margin-desktop">
        <span className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface">
          {site.name}
        </span>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {footerLinks.map(({ href, label, icon, external }) => {
            const Icon = footerIconMap[icon]
            return (
              <motion.a
                key={label}
                href={href}
                {...(external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                whileHover={{ y: -2, color: 'var(--color-on-surface)' }}
                className="inline-flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-on-surface"
                aria-label={label}
              >
                <Icon className="h-4.5 w-4.5 shrink-0" aria-hidden />
                <span>{label}</span>
              </motion.a>
            )
          })}
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant opacity-80">
          © {new Date().getFullYear()} {site.name}. Engineered with Precision.
        </p>
      </div>
    </motion.footer>
  )
}

import type { Transition, Variants, ViewportOptions } from 'framer-motion'

/** Re-triggers enter/exit animations on scroll up and down */
export const scrollViewport: ViewportOptions = {
  once: false,
  amount: 0.2,
  margin: '-60px 0px -60px 0px',
}

export const scrollViewportDeep: ViewportOptions = {
  once: false,
  amount: 0.15,
  margin: '-100px 0px -100px 0px',
}

export const easeOut = [0.22, 1, 0.36, 1] as const

export const spring: Transition = {
  type: 'spring',
  stiffness: 120,
  damping: 20,
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
}

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: easeOut },
  },
}

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: easeOut },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.02 },
  },
}

export const lineGrow: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.2, ease: easeOut },
  },
}

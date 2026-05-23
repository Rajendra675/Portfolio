import type { Config } from 'tailwindcss'

/** Warm obsidian palette — gold primary, coral secondary, periwinkle tertiary */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Surfaces — warm charcoal layers */
        surface: '#0a0908',
        background: '#0a0908',
        'surface-dim': '#0a0908',
        'surface-container-lowest': '#050504',
        'surface-container-low': '#110f0e',
        'surface-container': '#1a1715',
        'surface-container-high': '#231f1c',
        'surface-container-highest': '#2d2824',
        'surface-variant': '#2d2824',
        'surface-bright': '#3a342f',

        /* Text */
        'on-surface': '#f5f0ea',
        'on-surface-variant': '#a39e96',
        'on-background': '#f5f0ea',

        /* Primary — amber gold */
        primary: '#e5a84a',
        'on-primary': '#1c1408',
        'primary-container': '#a67c2e',
        'on-primary-container': '#fff5e6',
        'primary-fixed': '#ffd88a',
        'primary-fixed-dim': '#e5a84a',
        'on-primary-fixed': '#261a06',
        'on-primary-fixed-variant': '#5c4210',
        'inverse-primary': '#f0c878',
        'surface-tint': '#e5a84a',

        /* Secondary — muted coral */
        secondary: '#e8927f',
        'on-secondary': '#2a1410',
        'secondary-container': '#9e4f42',
        'on-secondary-container': '#ffe8e3',
        'secondary-fixed': '#ffd5cc',
        'secondary-fixed-dim': '#e8927f',
        'on-secondary-fixed': '#3a1814',
        'on-secondary-fixed-variant': '#8b4a3f',

        /* Tertiary — soft periwinkle */
        tertiary: '#9b9ed4',
        'on-tertiary': '#1a1a2e',
        'tertiary-container': '#5a5d8a',
        'on-tertiary-container': '#e8e9ff',
        'tertiary-fixed': '#dce0ff',
        'tertiary-fixed-dim': '#b8bcff',
        'on-tertiary-fixed': '#22244a',
        'on-tertiary-fixed-variant': '#444878',

        /* Borders */
        outline: '#7a746c',
        'outline-variant': '#433f3a',

        /* Inverse */
        'inverse-surface': '#f5f0ea',
        'inverse-on-surface': '#2d2824',

        /* Error */
        error: '#ffb4a9',
        'on-error': '#690003',
        'error-container': '#930006',
        'on-error-container': '#ffdad4',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
      spacing: {
        'margin-desktop': '64px',
        'container-max': '1200px',
        unit: '8px',
        'margin-mobile': '16px',
        gutter: '24px',
      },
      maxWidth: {
        'container-max': '1200px',
      },
      fontFamily: {
        'headline-lg-mobile': ['Geist', 'sans-serif'],
        'headline-lg': ['Geist', 'sans-serif'],
        'body-md': ['Geist', 'sans-serif'],
        'body-sm': ['Geist', 'sans-serif'],
        'label-mono': ['"Geist Mono"', 'monospace'],
        'headline-xl': ['Geist', 'sans-serif'],
        geist: ['Geist', 'sans-serif'],
        'geist-mono': ['"Geist Mono"', 'monospace'],
      },
      fontSize: {
        'headline-lg-mobile': ['28px', { lineHeight: '1.2', fontWeight: '600' }],
        'headline-lg': ['32px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'label-mono': ['12px', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '500' }],
        'headline-xl': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      boxShadow: {
        glow: '0 0 24px color-mix(in srgb, var(--color-primary) 18%, transparent)',
        'glow-sm': '0 0 12px color-mix(in srgb, var(--color-primary) 45%, transparent)',
        'glow-card': '0 12px 40px color-mix(in srgb, var(--color-primary) 10%, transparent)',
        'glow-coral': '0 0 20px color-mix(in srgb, var(--color-secondary) 30%, transparent)',
      },
    },
  },
} satisfies Config

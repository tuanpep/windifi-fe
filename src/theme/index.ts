import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        // Wind-inspired brand colors with sky blues and airy tones
        brand: {
          '50': { value: '#f0f9ff' }, // Lightest sky blue
          '100': { value: '#e0f2fe' }, // Very light sky blue
          '200': { value: '#bae6fd' }, // Light sky blue
          '300': { value: '#7dd3fc' }, // Medium sky blue
          '400': { value: '#38bdf8' }, // Sky blue
          '500': { value: '#0ea5e9' }, // Primary wind blue
          '600': { value: '#0284c7' }, // Deep sky blue
          '700': { value: '#0369a1' }, // Darker sky blue
          '800': { value: '#075985' }, // Deep blue
          '900': { value: '#0c4a6e' }, // Dark blue
          '950': { value: '#082f49' }, // Darkest blue
        },
        // Wind accent colors with cyan and teal tones
        accent: {
          '50': { value: '#ecfeff' }, // Lightest cyan
          '100': { value: '#cffafe' }, // Very light cyan
          '200': { value: '#a5f3fc' }, // Light cyan
          '300': { value: '#67e8f9' }, // Medium cyan
          '400': { value: '#22d3ee' }, // Cyan
          '500': { value: '#06b6d4' }, // Primary cyan
          '600': { value: '#0891b2' }, // Deep cyan
          '700': { value: '#0e7490' }, // Darker cyan
          '800': { value: '#155e75' }, // Deep teal
          '900': { value: '#164e63' }, // Dark teal
          '950': { value: '#083344' }, // Darkest teal
        },
        // Success colors with wind-inspired green tones
        success: {
          '50': { value: '#f0fdfa' }, // Lightest mint
          '100': { value: '#ccfbf1' }, // Very light mint
          '200': { value: '#99f6e4' }, // Light mint
          '300': { value: '#5eead4' }, // Medium mint
          '400': { value: '#2dd4bf' }, // Mint
          '500': { value: '#14b8a6' }, // Primary teal
          '600': { value: '#0d9488' }, // Deep teal
          '700': { value: '#0f766e' }, // Darker teal
          '800': { value: '#115e59' }, // Deep green-teal
          '900': { value: '#134e4a' }, // Dark green-teal
          '950': { value: '#042f2e' }, // Darkest green-teal
        },
        // Warning colors with wind-inspired amber tones
        warning: {
          '50': { value: '#fffbeb' }, // Lightest amber
          '100': { value: '#fef3c7' }, // Very light amber
          '200': { value: '#fde68a' }, // Light amber
          '300': { value: '#fcd34d' }, // Medium amber
          '400': { value: '#fbbf24' }, // Amber
          '500': { value: '#f59e0b' }, // Primary amber
          '600': { value: '#d97706' }, // Deep amber
          '700': { value: '#b45309' }, // Darker amber
          '800': { value: '#92400e' }, // Deep orange
          '900': { value: '#78350f' }, // Dark orange
          '950': { value: '#451a03' }, // Darkest orange
        },
        // Error colors with wind-inspired red tones
        error: {
          '50': { value: '#fef2f2' }, // Lightest red
          '100': { value: '#fee2e2' }, // Very light red
          '200': { value: '#fecaca' }, // Light red
          '300': { value: '#fca5a5' }, // Medium red
          '400': { value: '#f87171' }, // Red
          '500': { value: '#ef4444' }, // Primary red
          '600': { value: '#dc2626' }, // Deep red
          '700': { value: '#b91c1c' }, // Darker red
          '800': { value: '#991b1b' }, // Deep crimson
          '900': { value: '#7f1d1d' }, // Dark crimson
          '950': { value: '#450a0a' }, // Darkest crimson
        },
        // Wind-inspired background colors with cool, airy tones
        bg: {
          DEFAULT: { value: '#0f172a' }, // Deep night sky
          subtle: { value: '#1e293b' }, // Dark slate
          muted: { value: '#334155' }, // Slate gray
          emphasized: { value: '#475569' }, // Medium slate
          elevated: { value: '#64748b' }, // Light slate
          surface: { value: '#94a3b8' }, // Very light slate
        },
        // Wind-inspired foreground colors with airy contrast
        fg: {
          DEFAULT: { value: '#f8fafc' }, // Pure white
          muted: { value: '#e2e8f0' }, // Light gray
          subtle: { value: '#cbd5e1' }, // Medium gray
          disabled: { value: '#94a3b8' }, // Slate gray
          inverse: { value: '#0f172a' }, // Dark for inverse text
        },
        // Wind-inspired border colors with airy definition
        border: {
          DEFAULT: { value: '#334155' }, // Slate gray
          subtle: { value: '#475569' }, // Medium slate
          muted: { value: '#64748b' }, // Light slate
          emphasized: { value: '#94a3b8' }, // Very light slate
          focus: { value: '#0ea5e9' }, // Wind blue for focus states
        },
        // Wind-inspired gradient colors representing air flow and movement
        gradient: {
          primary: {
            value: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)', // Sky to cyan
          },
          secondary: {
            value: 'linear-gradient(135deg, #06b6d4 0%, #14b8a6 100%)', // Cyan to teal
          },
          success: {
            value: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)', // Teal gradient
          },
          warning: {
            value: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', // Amber gradient
          },
          error: {
            value: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', // Red gradient
          },
          wind: {
            value:
              'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 50%, #7dd3fc 100%)', // Wind flow
          },
          sky: {
            value:
              'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 50%, #7dd3fc 100%)', // Sky gradient
          },
          air: {
            value:
              'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)', // Air gradient
          },
          glass: {
            value:
              'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)',
          },
          subtle: {
            value: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', // Night sky
          },
        },
        // Wind-inspired glow colors for ethereal effects
        glow: {
          brand: { value: '0 0 25px rgba(14, 165, 233, 0.4)' }, // Wind blue glow
          accent: { value: '0 0 25px rgba(6, 182, 212, 0.4)' }, // Cyan glow
          success: { value: '0 0 25px rgba(20, 184, 166, 0.4)' }, // Teal glow
          warning: { value: '0 0 25px rgba(245, 158, 11, 0.4)' }, // Amber glow
          error: { value: '0 0 25px rgba(239, 68, 68, 0.4)' }, // Red glow
          wind: { value: '0 0 30px rgba(14, 165, 233, 0.3)' }, // Wind glow
          sky: { value: '0 0 20px rgba(56, 189, 248, 0.2)' }, // Sky glow
          air: { value: '0 0 15px rgba(186, 230, 253, 0.15)' }, // Air glow
        },
        // Wind-inspired neutral colors with cool undertones
        neutral: {
          '50': { value: '#f8fafc' },
          '100': { value: '#f1f5f9' },
          '200': { value: '#e2e8f0' },
          '300': { value: '#cbd5e1' },
          '400': { value: '#94a3b8' },
          '500': { value: '#64748b' },
          '600': { value: '#475569' },
          '700': { value: '#334155' },
          '800': { value: '#1e293b' },
          '900': { value: '#0f172a' },
          '950': { value: '#020617' },
        },
      },
      fonts: {
        heading: { value: 'var(--font-geist-sans), system-ui, sans-serif' },
        body: { value: 'var(--font-geist-sans), system-ui, sans-serif' },
        mono: { value: 'var(--font-geist-mono), ui-monospace, monospace' },
      },
      fontSizes: {
        xs: { value: '0.75rem' },
        sm: { value: '0.875rem' },
        md: { value: '1rem' },
        lg: { value: '1.125rem' },
        xl: { value: '1.25rem' },
        '2xl': { value: '1.5rem' },
        '3xl': { value: '1.875rem' },
        '4xl': { value: '2.25rem' },
        '5xl': { value: '3rem' },
        '6xl': { value: '3.75rem' },
        '7xl': { value: '4.5rem' },
        '8xl': { value: '6rem' },
        '9xl': { value: '8rem' },
      },
      fontWeights: {
        normal: { value: '400' },
        medium: { value: '500' },
        semibold: { value: '600' },
        bold: { value: '700' },
        extrabold: { value: '800' },
      },
      lineHeights: {
        normal: { value: 'normal' },
        none: { value: '1' },
        shorter: { value: '1.25' },
        short: { value: '1.375' },
        base: { value: '1.5' },
        tall: { value: '1.625' },
        taller: { value: '2' },
      },
      radii: {
        none: { value: '0' },
        sm: { value: '0.125rem' },
        base: { value: '0.25rem' },
        md: { value: '0.375rem' },
        lg: { value: '0.5rem' },
        xl: { value: '0.75rem' },
        '2xl': { value: '1rem' },
        '3xl': { value: '1.5rem' },
        full: { value: '9999px' },
      },
      shadows: {
        xs: { value: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
        sm: {
          value:
            '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        },
        base: {
          value:
            '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        },
        md: {
          value:
            '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        },
        lg: {
          value:
            '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        },
        xl: { value: '0 25px 50px -12px rgb(0 0 0 / 0.25)' },
        '2xl': { value: '0 25px 50px -12px rgb(0 0 0 / 0.25)' },
        inner: { value: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)' },
        none: { value: 'none' },
        // Wind-inspired shadows with ethereal effects
        glow: { value: '0 0 25px rgba(14, 165, 233, 0.3)' }, // Wind blue glow shadow
        'glow-lg': { value: '0 0 50px rgba(14, 165, 233, 0.4)' }, // Large wind glow
        glass: { value: '0 8px 32px rgba(0, 0, 0, 0.4)' }, // Glass shadow
        'glass-lg': { value: '0 16px 64px rgba(0, 0, 0, 0.5)' }, // Large glass shadow
      },
      spacing: {
        1: { value: '0.25rem' },
        2: { value: '0.5rem' },
        3: { value: '0.75rem' },
        4: { value: '1rem' },
        5: { value: '1.25rem' },
        6: { value: '1.5rem' },
        7: { value: '1.75rem' },
        8: { value: '2rem' },
        9: { value: '2.25rem' },
        10: { value: '2.5rem' },
        12: { value: '3rem' },
        14: { value: '3.5rem' },
        16: { value: '4rem' },
        20: { value: '5rem' },
        24: { value: '6rem' },
        28: { value: '7rem' },
        32: { value: '8rem' },
        36: { value: '9rem' },
        40: { value: '10rem' },
        44: { value: '11rem' },
        48: { value: '12rem' },
        52: { value: '13rem' },
        56: { value: '14rem' },
        60: { value: '15rem' },
        64: { value: '16rem' },
        72: { value: '18rem' },
        80: { value: '20rem' },
        96: { value: '24rem' },
      },
      sizes: {
        1: { value: '0.25rem' },
        2: { value: '0.5rem' },
        3: { value: '0.75rem' },
        4: { value: '1rem' },
        5: { value: '1.25rem' },
        6: { value: '1.5rem' },
        7: { value: '1.75rem' },
        8: { value: '2rem' },
        9: { value: '2.25rem' },
        10: { value: '2.5rem' },
        12: { value: '3rem' },
        14: { value: '3.5rem' },
        16: { value: '4rem' },
        20: { value: '5rem' },
        24: { value: '6rem' },
        28: { value: '7rem' },
        32: { value: '8rem' },
        36: { value: '9rem' },
        40: { value: '10rem' },
        44: { value: '11rem' },
        48: { value: '12rem' },
        52: { value: '13rem' },
        56: { value: '14rem' },
        60: { value: '15rem' },
        64: { value: '16rem' },
        72: { value: '18rem' },
        80: { value: '20rem' },
        96: { value: '24rem' },
        auto: { value: 'auto' },
        min: { value: 'min-content' },
        max: { value: 'max-content' },
        fit: { value: 'fit-content' },
        screen: { value: '100vw' },
        full: { value: '100%' },
        '3xs': { value: '14rem' },
        '2xs': { value: '16rem' },
        xs: { value: '20rem' },
        sm: { value: '24rem' },
        md: { value: '28rem' },
        lg: { value: '32rem' },
        xl: { value: '36rem' },
        '2xl': { value: '42rem' },
        '3xl': { value: '48rem' },
        '4xl': { value: '56rem' },
        '5xl': { value: '64rem' },
        '6xl': { value: '72rem' },
        '7xl': { value: '80rem' },
      },
      zIndex: {
        hide: { value: '-1' },
        auto: { value: 'auto' },
        base: { value: '0' },
        docked: { value: '10' },
        dropdown: { value: '1000' },
        sticky: { value: '1100' },
        banner: { value: '1200' },
        overlay: { value: '1300' },
        modal: { value: '1400' },
        popover: { value: '1500' },
        skipLink: { value: '1600' },
        toast: { value: '1700' },
        tooltip: { value: '1800' },
      },
      // New animation tokens
      animations: {
        fadeIn: { value: 'fadeIn 0.3s ease-in-out' },
        slideUp: { value: 'slideUp 0.3s ease-out' },
        slideDown: { value: 'slideDown 0.3s ease-out' },
        scaleIn: { value: 'scaleIn 0.2s ease-out' },
        pulse: { value: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' },
        shimmer: { value: 'shimmer 2s linear infinite' },
      },
    },
    semanticTokens: {
      colors: {
        // Enhanced semantic color mappings for dark theme with better contrast
        primary: {
          DEFAULT: { value: '{colors.brand.500}' },
          foreground: { value: '{colors.bg}' },
          muted: { value: '{colors.brand.200}' },
          'muted-foreground': { value: '{colors.bg}' },
          hover: { value: '{colors.brand.600}' },
          active: { value: '{colors.brand.700}' },
        },
        secondary: {
          DEFAULT: { value: '{colors.accent.500}' },
          foreground: { value: '{colors.bg}' },
          muted: { value: '{colors.accent.200}' },
          'muted-foreground': { value: '{colors.bg}' },
          hover: { value: '{colors.accent.600}' },
          active: { value: '{colors.accent.700}' },
        },
        destructive: {
          DEFAULT: { value: '{colors.error.500}' },
          foreground: { value: '{colors.bg}' },
          hover: { value: '{colors.error.600}' },
          active: { value: '{colors.error.700}' },
        },
        muted: {
          DEFAULT: { value: '{colors.bg.muted}' },
          foreground: { value: '{colors.fg.muted}' },
        },
        accent: {
          DEFAULT: { value: '{colors.bg.emphasized}' },
          foreground: { value: '{colors.fg}' },
        },
        popover: {
          DEFAULT: { value: '{colors.bg}' },
          foreground: { value: '{colors.fg}' },
        },
        card: {
          DEFAULT: { value: '{colors.bg.subtle}' },
          foreground: { value: '{colors.fg}' },
          elevated: { value: '{colors.bg.elevated}' },
          surface: { value: '{colors.bg.surface}' },
        },
        border: {
          DEFAULT: { value: '{colors.border}' },
          input: { value: '{colors.border.subtle}' },
          focus: { value: '{colors.border.focus}' },
        },
        input: {
          DEFAULT: { value: '{colors.bg.subtle}' },
          foreground: { value: '{colors.fg}' },
          placeholder: { value: '{colors.fg.subtle}' },
        },
        ring: {
          DEFAULT: { value: '{colors.brand.500}' },
          focus: { value: '{colors.brand.400}' },
        },
        chart: {
          '1': { value: '{colors.brand.500}' },
          '2': { value: '{colors.accent.500}' },
          '3': { value: '{colors.success.500}' },
          '4': { value: '{colors.warning.500}' },
          '5': { value: '{colors.error.500}' },
        },
        // Wind-inspired semantic tokens for ethereal UI patterns
        glass: {
          DEFAULT: { value: 'rgba(255, 255, 255, 0.15)' }, // Airy glass effect
          border: { value: 'rgba(255, 255, 255, 0.25)' }, // Airy border
          backdrop: { value: 'rgba(15, 23, 42, 0.9)' }, // Night sky backdrop
        },
        overlay: {
          DEFAULT: { value: 'rgba(15, 23, 42, 0.6)' }, // Night sky overlay
          light: { value: 'rgba(15, 23, 42, 0.4)' }, // Light night sky overlay
          heavy: { value: 'rgba(15, 23, 42, 0.9)' }, // Heavy night sky overlay
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);

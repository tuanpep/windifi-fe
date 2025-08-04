import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        // Enhanced brand colors with better gradients
        brand: {
          '50': { value: '#fefce8' },
          '100': { value: '#fef9c3' },
          '200': { value: '#fef08a' },
          '300': { value: '#fde047' },
          '400': { value: '#facc15' },
          '500': { value: '#eab308' }, // Primary brand color
          '600': { value: '#ca8a04' },
          '700': { value: '#a16207' },
          '800': { value: '#854d0e' },
          '900': { value: '#713f12' },
          '950': { value: '#422006' },
        },
        // Enhanced accent colors for DeFi
        accent: {
          '50': { value: '#f0f9ff' },
          '100': { value: '#e0f2fe' },
          '200': { value: '#bae6fd' },
          '300': { value: '#7dd3fc' },
          '400': { value: '#38bdf8' },
          '500': { value: '#0ea5e9' },
          '600': { value: '#0284c7' },
          '700': { value: '#0369a1' },
          '800': { value: '#075985' },
          '900': { value: '#0c4a6e' },
          '950': { value: '#082f49' },
        },
        // Success colors for positive actions
        success: {
          '50': { value: '#f0fdf4' },
          '100': { value: '#dcfce7' },
          '200': { value: '#bbf7d0' },
          '300': { value: '#86efac' },
          '400': { value: '#4ade80' },
          '500': { value: '#22c55e' },
          '600': { value: '#16a34a' },
          '700': { value: '#15803d' },
          '800': { value: '#166534' },
          '900': { value: '#14532d' },
          '950': { value: '#052e16' },
        },
        // Warning colors for alerts
        warning: {
          '50': { value: '#fffbeb' },
          '100': { value: '#fef3c7' },
          '200': { value: '#fde68a' },
          '300': { value: '#fcd34d' },
          '400': { value: '#fbbf24' },
          '500': { value: '#f59e0b' },
          '600': { value: '#d97706' },
          '700': { value: '#b45309' },
          '800': { value: '#92400e' },
          '900': { value: '#78350f' },
          '950': { value: '#451a03' },
        },
        // Error colors for negative actions
        error: {
          '50': { value: '#fef2f2' },
          '100': { value: '#fee2e2' },
          '200': { value: '#fecaca' },
          '300': { value: '#fca5a5' },
          '400': { value: '#f87171' },
          '500': { value: '#ef4444' },
          '600': { value: '#dc2626' },
          '700': { value: '#b91c1c' },
          '800': { value: '#991b1b' },
          '900': { value: '#7f1d1d' },
          '950': { value: '#450a0a' },
        },
        // Enhanced background colors based on specified colors with better contrast
        bg: {
          DEFAULT: { value: '#222831' }, // Darkest background as specified
          subtle: { value: '#2d3441' }, // Enhanced contrast from darkest
          muted: { value: '#393E46' }, // Gray as specified
          emphasized: { value: '#4a4f5a' }, // Enhanced contrast from gray
          elevated: { value: '#5a5f6a' }, // Even more contrast
          surface: { value: '#6a6f7a' }, // Maximum contrast for surfaces
        },
        // Enhanced foreground colors with maximum contrast
        fg: {
          DEFAULT: { value: '#ffffff' }, // Pure white for maximum contrast
          muted: { value: '#e1e5ea' }, // Light gray with high contrast
          subtle: { value: '#b8c0c8' }, // Medium gray with good contrast
          disabled: { value: '#8a929a' }, // Darker gray for disabled state
          inverse: { value: '#222831' }, // Darkest for inverse text
        },
        // Enhanced border colors with better definition and contrast
        border: {
          DEFAULT: { value: '#393E46' }, // Gray as specified
          subtle: { value: '#4a4f5a' }, // Enhanced contrast from gray
          muted: { value: '#5a5f6a' }, // Even more contrast
          emphasized: { value: '#6a6f7a' }, // Maximum contrast for borders
          focus: { value: '#eab308' }, // Brand color for focus states
        },
        // New gradient colors for modern UI with enhanced contrast
        gradient: {
          primary: {
            value: 'linear-gradient(135deg, #eab308 0%, #ca8a04 100%)',
          },
          secondary: {
            value: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
          },
          success: {
            value: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
          },
          warning: {
            value: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
          },
          error: { value: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' },
          dark: { value: 'linear-gradient(135deg, #393E46 0%, #222831 100%)' }, // Updated with new colors
          glass: {
            value:
              'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)',
          }, // Enhanced glass effect
          subtle: {
            value: 'linear-gradient(135deg, #2d3441 0%, #222831 100%)',
          }, // New subtle gradient
        },
        // New glow colors for modern effects with enhanced visibility
        glow: {
          brand: { value: '0 0 25px rgba(234, 179, 8, 0.4)' }, // Enhanced glow
          accent: { value: '0 0 25px rgba(14, 165, 233, 0.4)' }, // Enhanced glow
          success: { value: '0 0 25px rgba(34, 197, 94, 0.4)' }, // Enhanced glow
          warning: { value: '0 0 25px rgba(245, 158, 11, 0.4)' }, // Enhanced glow
          error: { value: '0 0 25px rgba(239, 68, 68, 0.4)' }, // Enhanced glow
          subtle: { value: '0 0 15px rgba(255, 255, 255, 0.1)' }, // New subtle glow
        },
        // New semantic colors for better UI hierarchy
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
        // Enhanced modern shadows with better contrast
        glow: { value: '0 0 25px rgba(234, 179, 8, 0.3)' }, // Enhanced glow shadow
        'glow-lg': { value: '0 0 50px rgba(234, 179, 8, 0.4)' }, // Enhanced large glow
        glass: { value: '0 8px 32px rgba(0, 0, 0, 0.4)' }, // Enhanced glass shadow
        'glass-lg': { value: '0 16px 64px rgba(0, 0, 0, 0.5)' }, // New large glass shadow
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
        // Enhanced semantic tokens for modern UI patterns with better contrast
        glass: {
          DEFAULT: { value: 'rgba(255, 255, 255, 0.15)' }, // Enhanced glass effect
          border: { value: 'rgba(255, 255, 255, 0.25)' }, // Enhanced border
          backdrop: { value: 'rgba(34, 40, 49, 0.9)' }, // Enhanced backdrop
        },
        overlay: {
          DEFAULT: { value: 'rgba(34, 40, 49, 0.6)' }, // Enhanced overlay
          light: { value: 'rgba(34, 40, 49, 0.4)' }, // Enhanced light overlay
          heavy: { value: 'rgba(34, 40, 49, 0.9)' }, // Enhanced heavy overlay
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
